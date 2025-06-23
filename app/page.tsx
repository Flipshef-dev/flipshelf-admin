import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Providers } from './providers';
import { Poppins } from 'next/font/google';
import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";

import './globals.css';

export default function Home() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white transition-all duration-300">
      <Navbar  />
      <Sidebar />
    </div>
  );
}

 

