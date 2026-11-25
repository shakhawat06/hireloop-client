import Image from "next/image";
import Link from "next/link";
import {
  BriefcaseBusiness,
  ChartColumn,
  MapPin,
  Search,
  Star,
  UserSearch,
} from "lucide-react";

/**
 * Hero section — built from the "Homepage" frame in hireloop.fig.
 *
 * Fonts used by the design (expose these as CSS variables in app/layout.tsx
 * via next/font/google, see the note in the hand-off message):
 *   --font-manrope     → headline, paragraph, chips
 *   --font-space-mono  → badge
 * Both fall back to the system sans/mono stack if the variable isn't set.
 */

const trendingRoles = ["Product Designer", "AI Engineering", "Dev-ops Engineer"];

const stats = [
  { icon: BriefcaseBusiness, value: "50K", label: "Active Jobs" },
  { icon: ChartColumn, value: "12K", label: "Companies" },
  { icon: UserSearch, value: "2M", label: "Job Seekers" },
  { icon: Star, value: "97%", label: "Satisfaction Rate" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#010103] text-white">
      {/* ── Background: purple glow, dotted map, floor glow ─────────────── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* top glow (Figma: "Exclude" 1840×851, #dc02ce + #5c53fe, blur 244) */}
        <div className="absolute -top-40 left-1/2 h-[520px] w-[1840px] max-w-none -translate-x-1/2 bg-[radial-gradient(ellipse_at_50%_0%,rgba(92,83,254,0.55)_0%,rgba(220,2,206,0.18)_45%,transparent_72%)] blur-[60px]" />

        {/* dotted map (Figma: "image 15" 1180×731) */}
        <div className="absolute top-[540px] left-1/2 hidden w-[1180px] max-w-none -translate-x-1/2 [mask-image:linear-gradient(to_bottom,black_55%,transparent)] sm:block">
          <Image
            src="/images/hero-map.png"
            alt=""
            width={816}
            height={505}
            priority
            className="h-auto w-full opacity-80"
          />
        </div>

        {/* horizon glow (Figma: blurred #5c53fe ellipse, black ellipse offset
            24px on top, radial rim-light) */}
        <div className="absolute top-[820px] left-1/2 hidden h-[1037px] w-[1236px] max-w-none -translate-x-1/2 lg:block">
          <div className="absolute inset-0 rounded-[50%] bg-[#5c53fe] blur-[148px]" />
          <div className="absolute inset-x-[14px] top-6 bottom-0 rounded-[50%] bg-[#010103]" />
          <div className="absolute inset-x-[14px] top-6 bottom-0 rounded-[50%] bg-[radial-gradient(closest-side,#5c53fe_0%,rgba(92,83,254,0.6)_29%,rgba(92,83,254,0.5)_52%,transparent_100%)] opacity-40" />
        </div>
        {/* smaller screens: simple bottom glow */}
        <div className="absolute inset-x-0 bottom-0 h-72 bg-[radial-gradient(ellipse_at_50%_100%,rgba(92,83,254,0.45),transparent_70%)] lg:hidden" />
      </div>

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="mx-auto flex max-w-[1440px] flex-col items-center px-5 pt-36 pb-20 sm:px-10 lg:pt-44 lg:pb-[72px]">
        <div className="flex w-full max-w-[784px] flex-col items-center gap-8 lg:gap-12">
          {/* badge + headline + copy */}
          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center">
              <span className="hidden h-px w-16 bg-gradient-to-r from-[#010123] to-[#a8a8a8] sm:block" />
              <span className="flex items-center gap-3 rounded-full border border-[#a8a8a8]/50 bg-gradient-to-r from-[#474747] to-[#010102] px-5 py-3 shadow-[inset_0_0_6px_rgba(255,255,255,0.15)] sm:gap-4 sm:px-6">
                <BriefcaseBusiness className="size-5 shrink-0 text-[#bac8fa] sm:size-6" />
                <span className="font-[family-name:var(--font-space-mono),ui-monospace,monospace] text-sm sm:text-xl">
                  50,000+ new jobs this month
                </span>
              </span>
              <span className="hidden h-px w-16 bg-gradient-to-l from-[#010123] to-[#a8a8a8] sm:block" />
            </div>

            <div className="flex flex-col items-center gap-4 text-center font-[family-name:var(--font-manrope),ui-sans-serif,system-ui]">
              <h1 className="text-[40px] leading-[1.15] font-bold tracking-[-0.02em] text-balance sm:text-5xl lg:text-[56px]">
                Find Your Dream Job Today
              </h1>
              <p className="max-w-[784px] text-base leading-[1.6] text-white/70 text-pretty sm:text-lg lg:text-xl">
                HireLoop connects top talent with world-class companies. Browse
                thousands of curated opportunities and land your next role —
                faster.
              </p>
            </div>
          </div>

          {/* search + trending */}
          <div className="flex w-full flex-col items-center gap-6 font-[family-name:var(--font-manrope),ui-sans-serif,system-ui]">
            <form
              action="/jobs"
              method="get"
              role="search"
              className="flex w-full flex-col gap-2 rounded-2xl border border-white/20 bg-[#101010] p-2 md:h-16 md:flex-row md:items-center md:gap-6 md:py-2 md:pr-2 md:pl-6"
            >
              <label className="flex min-w-0 flex-1 items-center gap-2 px-3 py-2 md:px-0 md:py-0">
                <Search aria-hidden className="size-6 shrink-0" />
                <span className="sr-only">Job title, skill or company</span>
                <input
                  type="text"
                  name="q"
                  placeholder="Job title, skill or company"
                  className="w-full min-w-0 bg-transparent text-base text-white/80 outline-none placeholder:text-white/80"
                />
              </label>

              <span aria-hidden className="hidden h-px w-[23px] rotate-90 bg-white/20 md:block" />
              <span aria-hidden className="h-px w-full bg-white/10 md:hidden" />

              <label className="flex min-w-0 flex-1 items-center gap-2 px-3 py-2 md:px-0 md:py-0">
                <MapPin aria-hidden className="size-6 shrink-0" />
                <span className="sr-only">Location or Remote</span>
                <input
                  type="text"
                  name="location"
                  placeholder="Location or Remote"
                  className="w-full min-w-0 bg-transparent text-base text-white/80 outline-none placeholder:text-white/80"
                />
              </label>

              <button
                type="submit"
                aria-label="Search jobs"
                className="flex h-12 items-center justify-center gap-2 rounded-xl bg-[#5c53fe] text-white transition-colors hover:bg-[#6e66ff] focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none md:size-12 md:shrink-0"
              >
                <Search aria-hidden className="size-6" />
                <span className="font-medium md:hidden">Search</span>
              </button>
            </form>

            <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
              <span className="text-base text-white/70">Trending Position</span>
              <ul className="flex flex-wrap justify-center gap-2">
                {trendingRoles.map((role) => (
                  <li key={role}>
                    <Link
                      href={`/jobs?q=${encodeURIComponent(role)}`}
                      className="inline-flex items-center rounded-full border border-white/10 bg-[#1a1a1b] px-3 py-1.5 text-sm transition-colors hover:border-white/30 hover:bg-[#242426]"
                    >
                      {role}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* stats strip */}
        <div className="mt-24 flex w-full flex-col items-center gap-12 lg:mt-[358px]">
          <h2 className="max-w-[600px] text-center font-[family-name:var(--font-instrument-sans),ui-sans-serif,system-ui] text-2xl leading-[1.3] font-medium tracking-[-0.025em] text-balance text-white/70 sm:text-3xl lg:text-[40px]">
            Assisting over 15,000 job seekers find their dream positions.
          </h2>
          <ul className="grid w-full max-w-[1320px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {stats.map(({ icon: Icon, value, label }) => (
              <li
                key={label}
                className="flex flex-col gap-12 rounded-2xl border border-white/10 bg-gradient-to-b from-[#010102] to-[#313131] p-6 lg:min-h-[254px] lg:justify-between lg:gap-[72px]"
              >
                <Icon aria-hidden className="size-6 text-white" strokeWidth={1.5} />
                <div className="flex flex-col gap-4">
                  <span className="font-[family-name:var(--font-jakarta),var(--font-manrope),ui-sans-serif] text-5xl leading-[1.15] font-semibold tracking-[-0.02em] lg:text-[56px]">
                    {value}
                  </span>
                  <span className="text-lg leading-[1.65] text-white/90">
                    {label}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
