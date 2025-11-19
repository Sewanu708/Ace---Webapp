import React from "react";
import {
  Timer,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Target,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <section className=" min-h-screen flex flex-col justify-center px-4 items-center overflow-hidden bg-white">
      <Navbar />
      {/* 1. The Texture Background */}
      <div className="relative w-full flex-1 mt-16 items-center flex justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)]  [background-size:8px_8px] pointer-events-none rounded-2xl bg-gray-50" />

          <div className="text-center pt-32 z-50">
          <h1 className="text-6xl md:text-7xl  text-gray-900 ">
            Think, plan, and track
          </h1>
          <h2 className="text-6xl md:text-7xl  text-gray-400 mb-2">
            all in one place
          </h2>
          
          <p className="text-sm text-gray-600 mb-4">
            Efficiently manage your tasks and boost productivity.
          </p>
          
          <Button className="bg-[#022c22]  text-white ">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50  backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* 1. Brand / Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          {/* Placeholder for your SVG Logo */}
          <div className="w-8 h-8  rounded-lg flex items-center justify-center transform group-hover:rotate-3 transition-transform">
            <svg
              width="32"
              height="32"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#15803d" />
                  <stop offset="100%" stopColor="#022c22" />
                </linearGradient>
              </defs>
              <polygon points="50,10 90,90 10,90" fill="url(#gradient)" />
            </svg>
          </div>
          <span className="text-xl font-semibold tracking-tight">
            Ace
          </span>
        </Link>

        {/* 2. Navigation Links (Hidden on mobile) */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#features"
            className="text-sm font-medium text-slate-800 hover:text-slate-600 transition-colors"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium text-slate-800 hover:text-slate-600 transition-colors"
          >
            How it Works
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium text-slate-800 hover:text-slate-600transition-colors"
          >
            Pricing
          </Link>
        </div>

        {/* 3. Auth Buttons */}
        <div className="flex items-center gap-4">
          <Link
            href="/auth/login"
            className="text-sm font-medium text-slate-800 hover:text-white transition-colors hidden sm:block"
          >
            Sign In
          </Link>
          <Link
            href="/auth/register"
            className="text-sm font-medium bg-slate-900 border border-slate-700 hover:border-indigo-500 hover:text-indigo-400 text-slate-200 px-4 py-2 rounded-lg transition-all flex items-center gap-2"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </nav>
  );
};
