"use client";

import Image from "next/image";
import LandingPage from "./components/landingpage";
import ChatApp from "./components/landingpage"; // Adjust the path as needed
import { AuthContextProvider } from "./context/AuthContext";

export default function Home() {
  return (
    <AuthContextProvider>
      <main className="flex flex-col h-screen bg-[#040d17] text-white">
        <nav className="flex justify-between items-center p-4">
          <h1 className="text-xl font-semibold">
            <span className="highlighted-text">MAAN</span>
          </h1>
        </nav>
        <div className="flex-grow overflow-hidden">
          <ChatApp />
        </div>
      </main>
    </AuthContextProvider>
  );
}
