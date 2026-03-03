"use client";

import { createContext, useContext, useState } from "react";

type Mode = "work" | "personal";

const ModeContext = createContext<{
  mode: Mode;
  toggle: () => void;
}>({
  mode: "work",
  toggle: () => {},
});

export function useMode() {
  return useContext(ModeContext);
}

export default function ContentSwitcher({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<Mode>("work");
  const toggle = () => setMode((m) => (m === "work" ? "personal" : "work"));

  return (
    <ModeContext.Provider value={{ mode, toggle }}>
      {children}
    </ModeContext.Provider>
  );
}
