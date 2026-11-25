"use client";

import { useState } from "react";
import {
  Search,
  MapPin,
  BriefcaseBusiness,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const trendingJobs = [
  "Product Designer",
  "AI Engineering",
  "Dev-ops Engineer",
];

export default function HeroSection() {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const params = new URLSearchParams({
      keyword: jobTitle,
      location: location,
    });

    window.location.href = `/jobs?${params.toString()}`;
  };

  return (
    <section className="relative min-h-[650] flex mx-auto w-full overflow-hidden bg-[#08090d] text-white">

      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_75%,rgba(74,53,255,0.18),transparent_48%)]" />

      {/* Stars */}
      <div className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage: `
            radial-gradient(2px 2px at 10% 55%, #8175ff, transparent),
            radial-gradient(2px 2px at 20% 70%, #8175ff, transparent),
            radial-gradient(2px 2px at 35% 60%, #8175ff, transparent),
            radial-gradient(2px 2px at 65% 55%, #8175ff, transparent),
            radial-gradient(2px 2px at 80% 65%, #8175ff, transparent),
            radial-gradient(2px 2px at 90% 52%, #8175ff, transparent),
            radial-gradient(2px 2px at 75% 80%, #8175ff, transparent),
            radial-gradient(2px 2px at 15% 85%, #8175ff, transparent)
          `,
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 pt-24 text-center sm:pt-28">

        {/* Monthly Jobs Badge */}
        <div className="mb-6 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 shadow-lg backdrop-blur-md">
          <BriefcaseBusiness className="h-3.5 w-3.5 text-orange-400" />
          <span className="text-xs font-semibold tracking-wider">
            50,000+
          </span>
          <span className="text-xs text-gray-400">
            NEW JOBS THIS MONTH
          </span>
        </div>

        {/* Heading */}
        <h1 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          Find Your Dream Job Today
        </h1>

        <p className="mt-4 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
          HireLoop connects top talent with world-class companies.
          Browse thousands of curated opportunities and land your
          next role — faster.
        </p>

        {/* Search Form */}
        <form
          onSubmit={handleSearch}
          className="mt-7 flex w-full max-w-2xl flex-col gap-2 rounded-xl border border-white/10 bg-[#1b1b1e] p-2 shadow-2xl sm:flex-row sm:items-center"
        >
          {/* Job Search */}
          <div className="flex flex-1 items-center gap-2 px-2">
            <Search className="h-4 w-4 shrink-0 text-gray-400" />

            <Input
              type="text"
              placeholder="Job title, skill or company"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className="h-8 border-0 bg-transparent text-xs shadow-none placeholder:text-gray-500 focus-visible:ring-0"
            />
          </div>

          <div className="hidden h-6 w-px bg-white/10 sm:block" />

          {/* Location Search */}
          <div className="flex flex-1 items-center gap-2 px-2">
            <MapPin className="h-4 w-4 shrink-0 text-gray-400" />

            <Input
              type="text"
              placeholder="Location or Remote"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="h-8 border-0 bg-transparent text-xs shadow-none placeholder:text-gray-500 focus-visible:ring-0"
            />
          </div>

          {/* Search Button */}
          <Button
            type="submit"
            size="icon"
            className="h-10 w-full shrink-0 bg-[#6255ff] text-white hover:bg-[#5144ed] sm:w-10"
          >
            <Search className="h-4 w-4" />
          </Button>
        </form>

        {/* Trending Searches */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          <span className="mr-1 text-xs text-gray-400">
            Trending Position
          </span>

          {trendingJobs.map((job) => (
            <button
              key={job}
              onClick={() => setJobTitle(job)}
              className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-1 text-[10px] text-gray-300 transition hover:border-[#6255ff] hover:bg-[#6255ff]/20"
            >
              {job}
            </button>
          ))}
        </div>
      </div>

      {/* Glowing Globe */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-[650px] -translate-x-1/2 translate-y-[55%] sm:h-[380px] sm:w-[850px] md:h-[470px] md:w-[1000px]">

        {/* Purple Glow */}
        <div className="absolute inset-x-[5%] top-0 h-48 rounded-full bg-[#5545ff] opacity-40 blur-[100px]" />

        {/* Globe */}
        <div className="relative h-full w-full overflow-hidden rounded-[50%_50%_0_0] border-t border-indigo-300/30 bg-[radial-gradient(ellipse_at_50%_0%,#7770ff_0%,#3733a2_40%,#17183c_75%,#090a16_100%)] shadow-[0_-15px_70px_rgba(89,69,255,0.65)]">

          {/* Globe Map */}
          <svg
            viewBox="0 0 1000 500"
            className="absolute inset-0 h-full w-full opacity-70"
            preserveAspectRatio="xMidYMin slice"
          >
            <defs>
              <clipPath id="globeClip">
                <ellipse cx="500" cy="500" rx="500" ry="500" />
              </clipPath>

              <linearGradient id="landGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#aaa5ff" />
                <stop offset="100%" stopColor="#5554a4" />
              </linearGradient>
            </defs>

            <g clipPath="url(#globeClip)" fill="url(#landGradient)">

              {/* North America */}
              <path d="M50 95 L105 55 155 48 195 28 245 45 275 35 320 15 300 55 265 68 245 100 210 125 185 160 145 172 125 215 95 205 75 170 50 150 Z" />

              <path d="M245 170 L285 185 305 225 295 260 270 245 255 215 Z" />

              {/* South America */}
              <path d="M330 230 L375 245 400 285 385 330 370 370 350 420 330 465 310 440 315 390 295 345 305 300 Z" />

              {/* Europe */}
              <path d="M430 75 L470 55 505 60 530 82 515 110 485 115 465 100 440 112 415 95 Z" />

              {/* Africa */}
              <path d="M455 140 L510 130 550 160 545 215 525 265 500 320 475 285 455 230 435 190 Z" />

              {/* Asia */}
              <path d="M520 65 L580 35 650 42 700 55 765 48 825 80 870 105 925 140 900 175 850 165 820 190 770 175 730 205 685 180 650 145 610 160 580 125 540 115 Z" />

              {/* Southeast Asia */}
              <path d="M685 200 L730 215 750 250 725 275 700 245 Z" />

              {/* Australia */}
              <path d="M790 310 L850 295 895 325 880 365 830 375 795 350 Z" />

            </g>
          </svg>

          {/* Globe Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#08090d]/60" />

        </div>
      </div>

      {/* Bottom Globe Text */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 z-20 w-full -translate-x-1/2 px-4 text-center">
        <p className="text-xl font-light tracking-tight text-white/80 sm:text-2xl md:text-3xl">
          Assisting over{" "}
          <span className="font-medium text-white">15,000</span> job seekers
          <br />
          find their dream positions.
        </p>
      </div>

    </section>
  );
}