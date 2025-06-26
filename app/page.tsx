'use client';
import { useState } from "react";
import Header from "./components/Header/header";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/page";

export default function Home() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDark, setIsDark] = useState(false);
  return (
    <div className="flex min-h-screen bg-neutral-50 dark:bg-neutral-900 text-black dark:text-white transition-all duration-300 ">
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <div
      className={`
          flex-1 transition-all duration-300 ease-in-out
        `}
      >
        <Header isDark={isDark} setIsDark={setIsDark} />
        <Dashboard />

      </div>
    </div>
  );
}
