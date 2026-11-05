import { questions, categories } from "@/data/questions";
import { contactInfo } from "@/data/content";

const esc = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));

const shell = (inner) =>
  `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#0f172a;line-height:1.6">${inner}</div>`;

const button = (href, text) =>
  `<a href="${esc(href)}" style="display:inline-block;background:#f97316;color:#ffffff;padding:12px 24px;border-radius:999px;text-decoration:none;font-weight:bold">${esc(text)}</a>`;

function describeAnswers(answers) {
  return questions.map((q) => {
    const raw = answers[q.id];
    const values = Array.isArray(raw) ? raw : raw ? [raw] : [];
    const labels = values
      .map((v) => q.options.find((o) => o.value === v)?.label)
      .filter(Boolean);
    return { question: q.text, answer: labels.length ? labels.join(", ") : "Not answered" };
  });
}

// Email to YOU
export function ownerEmail({ lead, report, answers, reportUrl }) {
  const kind = lead.type === "contact" ? "enquiry" : "report lead";
  const who = lead.name || lead.email;
  const subject = report
    ? `New ${kind}: ${report.overall}/100 · ${who}`
    : `New ${kind}: ${who}`;

  const rows = [
    ["Name", lead.name],
    ["Email", lead.email],
    ["Phone", lead.phone],
    ["Service", lead.service],
    ["Budget", lead.budget],
  ]
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#64748b">${k}</td><td>${esc(v)}</td></tr>`)
    .join("");

  const reportBlock = report
    ? `<h3 style="margin:24px 0 8px">Growth report: ${report.overall}/100</h3>
       <p style="margin:0 0 8px">${Object.entries(report.scores)
         .map(([k, v]) => `${esc(categories[k])}: <strong>${v}</strong>`)
         .join(" &nbsp;|&nbsp; ")}</p>
       <p style="margin:0 0 8px"><strong>Top priorities:</strong> ${report.priorities.map((p) => esc(p.label)).join(", ")}</p>
       <p style="margin:0 0 12px">${button(reportUrl, "Open their report")}</p>
       <h3 style="margin:24px 0 8px">Their answers</h3>
       <table style="font-size:13px;border-collapse:collapse">${describeAnswers(answers)
         .map((a) => `<tr><td style="padding:3px 12px 3px 0;color:#64748b;vertical-align:top">${esc(a.question)}</td><td style="vertical-align:top">${esc(a.answer)}</td></tr>`)
         .join("")}</table>`
    : "";

  const messageBlock = lead.message
    ? `<h3 style="margin:24px 0 8px">Message</h3><p style="white-space:pre-wrap">${esc(lead.message)}</p>`
    : "";

  return {
    subject,
    html: shell(`<h2 style="margin:0 0 12px">${esc(subject)}</h2><table style="font-size:14px">${rows}</table>${messageBlock}${reportBlock}`),
  };
}

// Email to the VISITOR
export function visitorEmail({ lead, report, reportUrl }) {
  const hi = `<p>Hi ${esc(lead.name || "there")},</p>`;
  const bookLine = `<p>Want help turning this into results? <a href="${esc(contactInfo.calLink)}">Book a free 30-minute call</a> or just reply to this email.</p><p>Viraj Pate</p>`;

  if (lead.type === "contact") {
    return {
      subject: "Thanks for reaching out",
      html: shell(
        `${hi}<p>Thanks for your message. I'll reply personally within 24 hours, usually sooner.</p>` +
          (reportUrl ? `<p>Your Growth Report, for reference:</p><p>${button(reportUrl, "View my report")}</p>` : "") +
          bookLine
      ),
    };
  }

  return {
    subject: `Your Business Growth Report: ${report.overall}/100`,
    html: shell(
      `${hi}<p>Thanks for taking the Business Growth Analyzer. Your score is <strong>${report.overall}/100</strong> (${esc(report.label)}).</p>
       <p><strong>Your top 3 priorities:</strong></p>
       <ol>${report.priorities.map((p) => `<li><strong>${esc(p.label)}</strong> (${p.score}/100): ${esc(p.diagnosis)}</li>`).join("")}</ol>
       <p>${button(reportUrl, "View my full report")}</p>
       <p style="font-size:13px;color:#64748b">Tip: open the report and use "Download PDF" to save a copy.</p>
       ${bookLine}`
    ),
  };
}