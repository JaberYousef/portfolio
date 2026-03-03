"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export default function Typewriter({
  words,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
}: TypewriterProps) {
  const [display, setDisplay] = useState("");
  const phase = useRef<"typing" | "pausing" | "deleting">("typing");
  const charIndex = useRef(0);
  const wordIndex = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const tick = useCallback(() => {
    const word = words[wordIndex.current];

    if (phase.current === "typing") {
      charIndex.current += 1;
      setDisplay(word.slice(0, charIndex.current));

      if (charIndex.current === word.length) {
        phase.current = "pausing";
        timer.current = setTimeout(tick, pauseDuration);
        return;
      }
      timer.current = setTimeout(tick, typingSpeed);
    } else if (phase.current === "pausing") {
      phase.current = "deleting";
      timer.current = setTimeout(tick, deletingSpeed);
    } else {
      charIndex.current -= 1;
      setDisplay(word.slice(0, charIndex.current));

      if (charIndex.current === 0) {
        phase.current = "typing";
        wordIndex.current = (wordIndex.current + 1) % words.length;
        timer.current = setTimeout(tick, typingSpeed + 200);
        return;
      }
      timer.current = setTimeout(tick, deletingSpeed);
    }
  }, [words, typingSpeed, deletingSpeed, pauseDuration]);

  useEffect(() => {
    timer.current = setTimeout(tick, typingSpeed);
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, [tick, typingSpeed]);

  return (
    <>
      <span>{display}</span>
      <span className="ml-0.5 inline-block h-5 w-[2px] bg-bp-accent align-middle animate-blink" />
    </>
  );
}
