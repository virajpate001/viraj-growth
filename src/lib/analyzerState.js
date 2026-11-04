import { sections, questions } from "@/data/questions";

// Build the ordered list of screens
function buildFlow() {
  const steps = [{ type: "intro" }];
  sections.forEach((section) => {
    steps.push({ type: "section", section });
    questions
      .filter((q) => q.section === section.id)
      .forEach((question) => steps.push({ type: "question", question }));
  });
  steps.push({ type: "complete" });
  return steps;
}

export const flow = buildFlow();
export const totalQuestions = questions.length;
export const STORAGE_KEY = "viraj-analyzer-v1";

export const initialState = {
  step: 0,
  dir: 1, // 1 = moving forward, -1 = moving back (for animation)
  answers: {},
  hydrated: false,
};

export function reducer(state, action) {
  switch (action.type) {
    case "HYDRATE":
      return { ...state, ...action.payload, hydrated: true };

    case "ANSWER":
      return {
        ...state,
        answers: { ...state.answers, [action.id]: action.value },
      };

    case "NEXT":
      return {
        ...state,
        step: Math.min(state.step + 1, flow.length - 1),
        dir: 1,
      };

    case "BACK": {
      let s = state.step - 1;
      // skip section-break screens when going back
      while (s > 0 && flow[s].type === "section") s--;
      return { ...state, step: Math.max(s, 0), dir: -1 };
    }

    case "RESET":
      return { ...initialState, hydrated: true };

    default:
      return state;
  }
}