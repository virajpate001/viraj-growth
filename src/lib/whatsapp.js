import { contactInfo } from "@/data/content";

const clean = (v) => String(v ?? "").trim();

// Builds the wa.me link. Everything after "text=" is the pre-filled message.
export function whatsappUrl(text = "") {
  const number = clean(contactInfo.whatsapp).replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

// Message sent by the contact form
export function buildContactMessage({
  name, email, phone, service, budget, message, score, reportUrl,
}) {
  const lines = ["Hi Viraj, I'm contacting you from your website.", ""];
  lines.push(`*Name:* ${clean(name)}`);
  if (clean(email)) lines.push(`*Email:* ${clean(email)}`);
  if (clean(phone)) lines.push(`*Phone:* ${clean(phone)}`);
  if (clean(service)) lines.push(`*Service:* ${clean(service)}`);
  if (clean(budget)) lines.push(`*Budget:* ${clean(budget)}`);
  lines.push("", "*Message:*", clean(message));
  if (reportUrl) {
    lines.push("", `*My Growth Report (${score}/100):*`, reportUrl);
  }
  return lines.join("\n");
}

// Message sent by every "Book a free call" button
export function callMessage({ score, reportUrl } = {}) {
  const lines = ["Hi Viraj, I'd like to book a free 30-minute call."];
  if (reportUrl) {
    lines.push("", `I just took your Growth Analyzer and scored ${score}/100.`, `My report: ${reportUrl}`);
  }
  lines.push("", "What times work for you?");
  return lines.join("\n");
}

// Message sent from the report's "Unlock your full action plan" box
export function planMessage({ score, reportUrl }) {
  const lines = [`Hi Viraj, I just took your Business Growth Analyzer and scored ${score}/100.`];
  if (reportUrl) lines.push("", `My report: ${reportUrl}`);
  lines.push("", "Can you walk me through my full action plan?");
  return lines.join("\n");
}

// Message sent from a single service page
export function serviceMessage(title) {
  return `Hi Viraj, I'm interested in ${title}. Can we talk about my project?`;
}

export function guideMessage(title) {
  return `Hi Viraj, I just read your guide "${title}" and have a question.`;
}