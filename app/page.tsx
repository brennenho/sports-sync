"use client";

import { useState } from "react";
import { HomeView } from "./views";

export default function Home() {
  const [view, setView] = useState<string>("home");

  return <div>{view === "home" && <HomeView />}</div>;
}
