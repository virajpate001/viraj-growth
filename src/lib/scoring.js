import { questions, categories } from "@/data/questions";
import { categoryContent, insightRules, solutions } from "@/data/recommendations";
import { getLevel } from "./levels";

// How much each category counts toward the overall score (adds up to 1)
const WEIGHTS = { website: 0.2, traffic: 0.2, conversion: 0.25, retention: 0.15, tech: 0.2 };

// How much a gap in each category matters when ranking priorities
const IMPACT = { website: 1.0, traffic: 1.1, conversion: 1.3, retention: 0.9, tech: 0.9 };

// Score for one question (0-100), or null if unanswered or unscored
function scoreQuestion(q, answer) {
  if (answer === undefined || answer === null) return null;

  if (q.type === "multi") {
    if (!Array.isArray(answer) || answer.length === 0) return null;
    const total = q.options
      .filter((o) => answer.includes(o.value))
      .reduce((sum, o) => sum + (o.score || 0), 0);
    return Math.min(total, 100);
  }

  const opt = q.options.find((o) => o.value === answer);
  return opt && typeof opt.score === "number" ? opt.score : null;
}

function getCategoryScores(answers) {
  const buckets = {};
  Object.keys(categories).forEach((k) => (buckets[k] = { sum: 0, w: 0 }));

  questions.forEach((q) => {
    if (!q.category) return; // profile and challenge questions aren't scored
    const s = scoreQuestion(q, answers[q.id]);
    if (s === null) return;
    const w = q.weight ?? 1;
    buckets[q.category].sum += s * w;
    buckets[q.category].w += w;
  });

  const out = {};
  Object.keys(buckets).forEach((k) => {
    out[k] = buckets[k].w ? Math.round(buckets[k].sum / buckets[k].w) : 0;
  });
  return out;
}

function getOverall(scores) {
  return Math.round(
    Object.keys(WEIGHTS).reduce((sum, k) => sum + scores[k] * WEIGHTS[k], 0)
  );
}

function overallLabel(score) {
  if (score >= 80) return "A strong foundation with room to scale";
  if (score >= 60) return "Good, with clear gaps to close";
  if (score >= 40) return "Real potential, held back by key gaps";
  return "A big opportunity to build stronger foundations";
}

function rankPriorities(scores, answers) {
  const challengeQ = questions.find((q) => q.id === "challenges");
  const chosen = Array.isArray(answers.challenges) ? answers.challenges : [];

  // Count how many chosen challenges fall in each category
  const flagged = {};
  chosen.forEach((v) => {
    const opt = challengeQ.options.find((o) => o.value === v);
    if (opt?.category) flagged[opt.category] = (flagged[opt.category] || 0) + 1;
  });

  return Object.keys(scores)
    .map((cat) => {
      const level = getLevel(scores[cat]);
      return {
        category: cat,
        label: categories[cat],
        score: scores[cat],
        level,
        flagged: Boolean(flagged[cat]),
        impact: (100 - scores[cat]) * IMPACT[cat] + 12 * (flagged[cat] || 0),
        ...categoryContent[cat][level], // diagnosis, why, quickWins, actions
      };
    })
    .sort((a, b) => b.impact - a.impact)
    .slice(0, 3);
}

function optionNumber(id, answers) {
  const q = questions.find((x) => x.id === id);
  const opt = q?.options.find((o) => o.value === answers[id]);
  return typeof opt?.number === "number" ? opt.number : 0;
}

// Simple estimate: what if conversion improved by a modest 25%?
function estimateRevenue(answers) {
  if (answers.platform === "none") return null;
  const visitors = optionNumber("visitors", answers);
  const conv = optionNumber("conversion", answers);
  const aov = optionNumber("aov", answers);
  if (!visitors || !conv || !aov) return null;

  const newConv = Math.min(conv * 1.25, 4);
  const round100 = (n) => Math.round(n / 100) * 100;
  const monthlyNow = visitors * (conv / 100) * aov;
  const monthlyGain = visitors * ((newConv - conv) / 100) * aov;

  return {
    visitors,
    aov,
    conv,
    newConv: Math.round(newConv * 100) / 100,
    monthlyNow: round100(monthlyNow),
    monthlyGain: round100(monthlyGain),
    annualGain: round100(monthlyGain * 12),
    assumed: answers.visitors === "unsure" || answers.conversion === "unsure",
  };
}

function pickSolution(answers, priorities, overall) {
  const p = answers.platform;
  if (p === "none" || p === "marketplace") {
    return answers.industry === "b2b" ? solutions.launchB2B : solutions.launchShopify;
  }
  if (p === "builder") return solutions.migrateShopify;
  if (overall >= 80) return solutions.scale;

  const byCategory = {
    tech: solutions.speed,
    website: solutions.redesign,
    traffic: solutions.seo,
    conversion: solutions.conversion,
    retention: solutions.retention,
  };
  return byCategory[priorities[0].category];
}

// MAIN FUNCTION: answers in, full report out (plain data, safe to pass to the UI)
export function computeReport(answers) {
  const scores = getCategoryScores(answers);
  const overall = getOverall(scores);
  const priorities = rankPriorities(scores, answers);

  const sorted = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
  const strongest = categories[sorted[0]];

  const insights = insightRules
    .filter((r) => r.test(answers, scores))
    .map(({ id, title, text }) => ({ id, title, text }))
    .slice(0, 3);

  const quickWins = [];
  priorities.forEach((p, i) => {
    const picks = i === 0 ? p.quickWins : p.quickWins.slice(0, 1);
    picks.forEach((text) => quickWins.push({ category: p.label, text }));
  });

  const roadmap = { d30: [], d60: [], d90: [] };
  priorities.forEach((p) => {
    ["d30", "d60", "d90"].forEach((k) =>
      roadmap[k].push({ category: p.label, text: p.actions[k] })
    );
  });

  return {
    overall,
    label: overallLabel(overall),
    scores,
    strongest,
    priorities,
    insights,
    quickWins,
    roadmap,
    revenue: estimateRevenue(answers),
    solution: pickSolution(answers, priorities, overall),
  };
}