import { NextResponse } from "next/server";
import { Resend } from "resend";
import { decodeAnswers } from "@/lib/share";
import { computeReport } from "@/lib/scoring";
import { saveLead } from "@/lib/leads";
import { ownerEmail, visitorEmail } from "@/lib/email";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const clean = (v, max) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const fail = (error, status = 400) => NextResponse.json({ ok: false, error }, { status });

async function send(resend, payload) {
  try {
    const { error } = await resend.emails.send(payload);
    if (error) {
      console.error("Resend error:", error);
      return false;
    }
    return true;
  } catch (err) {
    console.error("Resend exception:", err);
    return false;
  }
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return fail("Invalid request.");
  }

  // Honeypot: real users never fill this hidden field
  if (clean(body.website, 200)) return NextResponse.json({ ok: true });

  const lead = {
    type: body.type === "contact" ? "contact" : "report",
    name: clean(body.name, 100),
    email: clean(body.email, 200).toLowerCase(),
    phone: clean(body.phone, 30),
    service: clean(body.service, 100),
    budget: clean(body.budget, 60),
    message: clean(body.message, 3000),
  };
  const code = clean(body.code, 200);

  if (!EMAIL_RE.test(lead.email)) return fail("Please enter a valid email address.");
  if (lead.type === "contact" && (lead.name.length < 2 || lead.message.length < 10)) {
    return fail("Please add your name and a short message.");
  }

  // Never trust a score sent by the browser. Recompute it from the answers.
  const answers = code ? decodeAnswers(code) : null;
  const report = answers ? computeReport(answers) : null;
  if (lead.type === "report" && !report) return fail("We couldn't read your report.");

  const origin = process.env.NEXT_PUBLIC_SITE_URL || new URL(request.url).origin;
  const reportUrl = report
    ? `${origin}/analyzer/report?r=${encodeURIComponent(code)}&u=1`
    : null;

  // 1. Save
  const saved = await saveLead({
    ...lead,
    report_code: report ? code : null,
    score: report ? report.overall : null,
    categories: report ? report.scores : null,
  });

  // 2. Email
  let ownerSent = false;
  let visitorSent = false;
  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    const resend = new Resend(apiKey);
    const from = process.env.RESEND_FROM || "Viraj Pate <onboarding@resend.dev>";
    const owner = process.env.LEAD_TO_EMAIL;

    const jobs = [];
    if (owner) {
      const mail = ownerEmail({ lead, report, answers, reportUrl });
      jobs.push(
        send(resend, { from, to: owner, replyTo: lead.email, subject: mail.subject, html: mail.html })
          .then((ok) => (ownerSent = ok))
      );
    }
    const mail = visitorEmail({ lead, report, reportUrl });
    jobs.push(
      send(resend, { from, to: lead.email, replyTo: owner || undefined, subject: mail.subject, html: mail.html })
        .then((ok) => (visitorSent = ok))
    );
    await Promise.all(jobs);
  }

  // 3. Success if you can still reach this lead
  if (saved || ownerSent) return NextResponse.json({ ok: true, emailed: visitorSent });

  // Local testing without keys: log it so you can see the flow work
  if (process.env.NODE_ENV !== "production") {
    console.log("LEAD (dev, nothing configured):", lead, report?.overall);
    return NextResponse.json({ ok: true, emailed: false });
  }

  console.error("Lead not delivered:", lead.email);
  return fail("Something went wrong. Please try again or email me directly.", 500);
}