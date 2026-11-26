"use client"

import { MenuIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import logo from "@/app/images/logo.png"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/jobs", label: "Browse Jobs" },
  { href: "/company", label: "Company" },
  { href: "/pricing", label: "Pricing" },
]

const authLinkClassName =
  "text-sm font-medium text-indigo-500 transition-colors hover:text-indigo-400 dark:text-indigo-400 dark:hover:text-indigo-300"

const ctaClassName =
  "bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:ring-indigo-500/40"

export function Navbar() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-background px-4 pt-4">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 rounded-2xl border border-border bg-card px-5 sm:px-6">
        <Link href="/" aria-label="hireloop home" className="shrink-0">
          <Image src={logo} alt="hireloop" className="h-7 w-auto" priority />
        </Link>

        <div className="flex items-center gap-6">
          <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-foreground/90 transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}

            <span aria-hidden="true" className="h-6 w-px bg-foreground/20" />

            <Link href="/sign-in" className={authLinkClassName}>
              Sign In
            </Link>

            <Button
              render={<Link href="/sign-up" />}
              className={cn("h-10 px-5", ctaClassName)}
            >
              Get Started
            </Button>
          </nav>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open navigation menu"
                  className="lg:hidden"
                />
              }
            >
              <MenuIcon />
            </SheetTrigger>

            <SheetContent side="right" className="gap-0 p-0 sm:max-w-xs">
              <SheetHeader className="flex-row items-center justify-between border-b border-border p-4">
                <SheetTitle className="sr-only">Navigation menu</SheetTitle>
                <Image src={logo} alt="hireloop" className="h-6 w-auto" />
              </SheetHeader>

              <nav aria-label="Mobile" className="flex flex-col gap-1 p-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={close}
                    className="rounded-lg px-3 py-2.5 text-sm font-medium text-popover-foreground transition-colors hover:bg-muted"
                  >
                    {link.label}
                  </Link>
                ))}

                <div aria-hidden="true" className="mx-3 my-2 h-px bg-border" />

                <Link
                  href="/sign-in"
                  onClick={close}
                  className={cn(
                    "rounded-lg px-3 py-2.5 transition-colors hover:bg-muted",
                    authLinkClassName
                  )}
                >
                  Sign In
                </Link>

                <Link
                  href="/sign-up"
                  onClick={close}
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "mt-2 w-full",
                    ctaClassName
                  )}
                >
                  Get Started
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
