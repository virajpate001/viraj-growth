"use client";

import { useReducer, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "../Container";
import ProgressBar from "./ProgressBar";
import Intro from "./Intro";
import SectionBreak from "./SectionBreak";
import QuestionCard from "./QuestionCard";
import Complete from "./Complete";
import { sections } from "@/data/questions";
import {
  flow,
  totalQuestions,
  reducer,
  initialState,
  STORAGE_KEY,
} from "@/lib/analyzerState";

const variants = {
  enter: (dir) => ({ opacity: 0, x: dir * 40 }),
  center: { opacity: 1, x: 0 },
  exit: (dir) => ({ opacity: 0, x: dir * -40 }),
};

export default function Analyzer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const timer = useRef(null);

  // Load saved progress once
  useEffect(() => {
    let payload = {};
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (
        saved &&
        Number.isInteger(saved.step) &&
        saved.step >= 0 &&
        saved.step < flow.length &&
        saved.answers &&
        typeof saved.answers === "object"
      ) {
        payload = { step: saved.step, answers: saved.answers };
      }
    } catch {}
    dispatch({ type: "HYDRATE", payload });
    return () => clearTimeout(timer.current);
  }, []);

  // Save progress on every change
  useEffect(() => {
    if (!state.hydrated) return;
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ step: state.step, answers: state.answers })
      );
    } catch {}
  }, [state.step, state.answers, state.hydrated]);

  const go = (type) => {
    clearTimeout(timer.current);
    dispatch({ type });
  };

  const handleSelect = (q, value) => {
    dispatch({ type: "ANSWER", id: q.id, value });
    clearTimeout(timer.current);
    timer.current = setTimeout(() => dispatch({ type: "NEXT" }), 250); // auto-advance
  };

  const handleToggle = (q, value) => {
    const current = state.answers[q.id] || [];
    let next;
    if (current.includes(value)) {
      next = current.filter((v) => v !== value);
    } else if (q.max && current.length >= q.max) {
      return;
    } else {
      next = [...current, value];
    }
    dispatch({ type: "ANSWER", id: q.id, value: next });
  };

  // Loading placeholder (avoids a flash before localStorage loads)
  if (!state.hydrated) {
    return <div className="min-h-[70vh]" aria-busy="true" />;
  }

  const current = flow[state.step];

  // Progress: questions completed so far
  const done = flow
    .slice(0, state.step + (current.type === "question" ? 0 : 0))
    .filter((s) => s.type === "question").length;
  const showProgress = current.type === "question" || current.type === "section";

  let screen = null;
  if (current.type === "intro") {
    screen = <Intro onStart={() => go("NEXT")} />;
  } else if (current.type === "section") {
    const index = sections.findIndex((s) => s.id === current.section.id);
    screen = (
      <SectionBreak
        section={current.section}
        index={index}
        total={sections.length}
        onContinue={() => go("NEXT")}
      />
    );
  } else if (current.type === "question") {
    screen = (
      <QuestionCard
        question={current.question}
        answer={state.answers[current.question.id]}
        onSelect={handleSelect}
        onToggle={handleToggle}
        onNext={() => go("NEXT")}
        onBack={() => go("BACK")}
      />
    );
  } else {
    screen = (
      <Complete answers={state.answers} onReset={() => go("RESET")} />
    );
  }

  return (
    <Container className="max-w-2xl py-12 sm:py-16">
      {showProgress && <ProgressBar done={done} total={totalQuestions} />}

      <AnimatePresence mode="wait" custom={state.dir} initial={false}>
        <motion.div
          key={state.step}
          custom={state.dir}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.25 }}
        >
          {screen}
        </motion.div>
      </AnimatePresence>

      {showProgress && (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => go("RESET")}
            className="text-xs text-muted underline hover:text-ink"
          >
            Start over
          </button>
        </div>
      )}
    </Container>
  );
}