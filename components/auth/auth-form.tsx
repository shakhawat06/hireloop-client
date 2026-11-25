
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

interface AuthFormProps {
  type: "signin" | "signup";
}

export default function AuthForm({ type }: AuthFormProps) {
  const isSignUp = type === "signup";

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      ...(isSignUp && { name: formData.get("name") }),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    console.log("Authentication data:", data);

    // Connect your authentication API here.
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#08090d] px-4 py-12 text-white">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#5545ff]/20 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#5545ff]/15 blur-[130px]" />

      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      {/* Authentication Card */}
      <div className="relative z-10 w-full max-w-md">

        {/* Logo */}
        

        {/* Form Card */}
        <div className="rounded-2xl border border-white/10 bg-[#14151c]/90 p-6 shadow-2xl backdrop-blur-xl sm:p-8">

          {/* Heading */}
          <div className="mb-7 text-center">
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {isSignUp ? "Create your account" : "Welcome back"}
            </h1>

            <p className="mt-2 text-sm text-gray-400">
              {isSignUp
                ? "Join HireLoop and discover opportunities."
                : "Sign in to continue your career journey."}
            </p>
          </div>

          {/* Google Button */}
          <Button
            type="button"
            variant="outline"
            className="h-11 w-full border-white/10 `bg-white/[0.04]` text-white hover:bg-white/10 hover:text-white"
            onClick={() => {
              // Connect Google OAuth here.
              console.log("Google authentication");
            }}
          >
            <svg viewBox="0 0 48 48" className="mr-2 h-5 w-5">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5Z" />
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.73 7.18l7.66 5.94c4.47-4.13 7.11-10.22 7.11-17.59Z" />
              <path fill="#FBBC05" d="M10.53 28.59A14.5 14.5 0 0 1 9.75 24c0-1.59.27-3.13.75-4.59l-7.98-6.19A23.9 23.9 0 0 0 0 24c0 3.87.93 7.52 2.56 10.78l7.97-6.19Z" />
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.87-5.86l-7.66-5.94c-2.13 1.45-4.84 2.3-8.21 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 43.62 14.62 48 24 48Z" />
            </svg>
            Continue with Google
          </Button>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <Separator className="flex-1 bg-white/10" />
            <span className="text-xs text-gray-500">OR CONTINUE WITH EMAIL</span>
            <Separator className="flex-1 bg-white/10" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            {isSignUp && (
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-300">
                  Full Name
                </Label>

                <div className="relative">
                  <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />

                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    required
                    autoComplete="name"
                    className="h-11 border-white/10 `bg-white/[0.04]` pl-10 text-white placeholder:text-gray-500 focus-visible:border-[#6255ff] focus-visible:ring-[#6255ff]/30"
                  />
                </div>
              </div>
            )}

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-300">
                Email Address
              </Label>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />

                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  autoComplete="email"
                  className="h-11 border-white/10 `bg-white/[0.04]` pl-10 text-white placeholder:text-gray-500 focus-visible:border-[#6255ff] focus-visible:ring-[#6255ff]/30"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-gray-300">
                  Password
                </Label>

                {!isSignUp && (
                  <Link
                    href="/forgot-password"
                    className="text-xs text-[#8b80ff] transition hover:text-white"
                  >
                    Forgot password?
                  </Link>
                )}
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />

                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                  minLength={8}
                  autoComplete={
                    isSignUp ? "new-password" : "current-password"
                  }
                  className="h-11 border-white/10 `bg-white/[0.04]` pl-10 pr-11 text-white placeholder:text-gray-500 focus-visible:border-[#6255ff] focus-visible:ring-[#6255ff]/30"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 transition hover:text-white"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Terms */}
            {isSignUp && (
              <div className="flex items-start gap-2">
                <input
                  id="terms"
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 accent-[#6255ff]"
                />

                <label
                  htmlFor="terms"
                  className="text-xs leading-5 text-gray-400"
                >
                  I agree to the{" "}
                  <Link href="/terms" className="text-[#8b80ff] hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-[#8b80ff] hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>
            )}

            {/* Submit */}
            <Button
              type="submit"
              className="group h-11 w-full bg-[#6255ff] font-medium text-white shadow-lg shadow-[#6255ff]/20 transition hover:bg-[#5144ed]"
            >
              {isSignUp ? "Create Account" : "Sign In"}

              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>

          {/* Switch Authentication */}
          <div className="mt-7 text-center text-sm text-gray-400">
            {isSignUp
              ? "Already have an account?"
              : "Don't have an account?"}

            {" "}

            <Link
              href={isSignUp ? "/sign-in" : "/sign-up"}
              className="font-medium text-[#8b80ff] transition hover:text-white"
            >
              {isSignUp ? "Sign in" : "Create an account"}
            </Link>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} HireLoop. All rights reserved.
        </p>
      </div>
    </section>
  );
}
