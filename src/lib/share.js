import { questions } from "@/data/questions";

// Each question becomes the index of the chosen option(s). "_" means unanswered.
// Questions are separated by ".". Example: "3.1.2._.015"
// NOTE: if you reorder questions or options later, old links will change meaning.

export function encodeAnswers(answers) {
  return questions
    .map((q) => {
      const a = answers[q.id];
      const values = Array.isArray(a) ? a : a ? [a] : [];
      const idx = values
        .map((v) => q.options.findIndex((o) => o.value === v))
        .filter((i) => i >= 0);
      return idx.length ? idx.join("") : "_";
    })
    .join(".");
}

export function decodeAnswers(code) {
  if (typeof code !== "string") return null;
  const parts = code.split(".");
  if (parts.length !== questions.length) return null;

  const answers = {};
  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    const part = parts[i];
    if (part === "_") continue;
    if (!/^\d+$/.test(part)) return null;

    const values = [];
    for (const ch of part) {
      const opt = q.options[Number(ch)]; // options have fewer than 10 items
      if (!opt) return null;
      values.push(opt.value);
    }
    answers[q.id] =
      q.type === "multi"
        ? [...new Set(values)].slice(0, q.max || values.length)
        : values[0];
  }
  return Object.keys(answers).length ? answers : null;
}