"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

const expertiseLinks = [
  { name: "Production", href: "#production" },
  { name: "Research & Development", href: "#research" },
  { name: "License & Approvals", href: "#license" },
];

const mainLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Facilities", href: "#facilities" },
  { name: "R&D", href: "#research" },
  { name: "Careers", href: "#careers" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const [menuOpen, setMenuOpen] = useState(false);
  const [expertiseOpen, setExpertiseOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setExpertiseOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-60 transition-all duration-300 ${
        isHomePage
        ? ""
        : "border-b border-purple-100 bg-white/95 shadow-sm backdrop-blur-[10px]"
      }`}
    >
      {/* MAIN NAVIGATION BAR */}
      <div className="mx-auto flex min-h-[78px] max-w-[1600px] items-center justify-between gap-5 px-5 md:px-10 lg:px-16">

        {/* CHENGENE BRANDING */}
        <a
          href="/#home"
          onClick={closeMenu}
          aria-label="Chengene Private Limited - Home"
          className="group flex shrink-0 items-center gap-3"
        >
          {/* COMPANY LOGO */}
          <img
            src="/logo.jpeg"
            alt="Chengene Logo"
            className="h-14 w-14 shrink-0 rounded-full object-contain shadow-lg ring-1 ring-white/40 md:h-16 md:w-16"
          />

          {/* COMPANY NAME */}
          <div className="flex flex-col">
            <span
              className={`text-[25px] font-extrabold leading-none tracking-[0.30em] transition-colors md:text-[25px] ${
                isHomePage
                  ? "text-white group-hover:text-purple-200"
                  : "text-purple-700 group-hover:text-purple-900"
              }`}
            >
              CHENGENE
            </span>

            <span
              className={`mt-2 text-[8px] font-semibold uppercase tracking-[0.19em] md:text-[9px] md:tracking-[0.20em] ${
                isHomePage ? "text-white/65" : "text-purple-400"
              }`}
            >
              Research · Innovation · Impact
            </span>
          </div>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 xl:flex 2xl:gap-8"
        >
          {mainLinks.slice(0, 2).map((link) => (
            <a
              key={link.href}
              href={`/${link.href}`}
              className={`group relative whitespace-nowrap py-3 text-[13px] font-medium transition-colors ${
                isHomePage
                  ? "text-white/85 hover:text-purple-200"
                  : "text-[#51476D] hover:text-purple-700"
              }`}
            >
              {link.name}

              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-purple-700 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          {/* OUR EXPERTISE DROPDOWN */}
          <div className="group relative">
            <button
              type="button"
              aria-haspopup="true"
              className={`flex items-center gap-2 whitespace-nowrap py-3 text-[13px] font-medium transition-colors ${
                isHomePage
                  ? "text-white hover:text-purple-200"
                  : "text-[#51476D] hover:text-purple-700"
              }`}
            >
              Our Expertise

              <svg
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="m5 7.5 5 5 5-5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* DROPDOWN PANEL */}
            <div className="invisible absolute left-0 top-full z-50 w-64 translate-y-2 rounded-2xl border border-purple-100 bg-white p-2 opacity-0 shadow-xl shadow-purple-950/10 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">

              <p className="px-4 pb-2 pt-3 text-[10px] font-bold uppercase tracking-[0.18em] text-purple-500">
                Explore Our Expertise
              </p>

              {expertiseLinks.map((link) => (
                <a
                  key={link.href}
                  href={`/${link.href}`}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-[13px] font-medium text-[#51476D] transition-all hover:bg-purple-50 hover:text-purple-800"
                >
                  {link.name}

                  <span className="text-purple-400">↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* REMAINING DESKTOP LINKS */}
          {mainLinks.slice(2).map((link) => (
            <a
              key={link.href}
              href={`/${link.href}`}
              className={`group relative whitespace-nowrap py-3 text-[13px] font-medium transition-colors ${
                isHomePage
                  ? "text-white/85 hover:text-purple-200"
                  : "text-[#51476D] hover:text-purple-700"
              }`}
            >
              {link.name}

              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-purple-700 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* PARTNER WITH US CTA */}
        <a
          href="/#contact"
          className={`hidden shrink-0 items-center gap-3 rounded-full px-5 py-3 text-[12px] font-semibold transition-all duration-300 xl:inline-flex ${
            isHomePage
              ? "border border-white/40 bg-white/[0.06] text-white hover:border-purple-300 hover:bg-purple-600"
              : "border border-purple-200 bg-purple-50 text-purple-700 hover:border-purple-300 hover:bg-purple-100"
          }`}
        >
          Partner With Us

          <span className="text-base transition-transform duration-300 hover:translate-x-1">
            →
          </span>
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          className={`flex h-11 w-11 items-center justify-center rounded-xl transition xl:hidden ${
            isHomePage
              ? "border border-white/25 bg-white/10 text-white hover:bg-white/20"
              : "border border-purple-200 bg-purple-50 text-purple-700 hover:bg-purple-100"
          }`}
        >
          {menuOpen ? (
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="m6 6 12 12M18 6 6 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      <div
        className={`overflow-hidden border-t border-purple-100 bg-white text-white backdrop-blur-xl transition-all duration-300 xl:hidden ${
          menuOpen
            ? "max-h-[85vh] overflow-y-auto opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile navigation"
          className="mx-auto flex max-w-[1600px] flex-col px-5 py-4 md:px-10"
        >
          {/* HOME + ABOUT */}
          {mainLinks.slice(0, 2).map((link) => (
            <a
              key={link.href}
              href={`/${link.href}`}
              onClick={closeMenu}
              className="border-b border-purple-50 py-3.5 text-sm font-medium text-[#51476D] transition hover:pl-2 hover:text-purple-700"
            >
              {link.name}
            </a>
          ))}

          {/* MOBILE EXPERTISE ACCORDION */}
          <button
            type="button"
            onClick={() => setExpertiseOpen(!expertiseOpen)}
            aria-expanded={expertiseOpen}
            className="flex items-center justify-between border-b border-purple-50 py-3.5 text-left text-sm font-medium text-[#51476D]"
          >
            Our Expertise

            <svg
              className={`h-4 w-4 text-purple-700 transition-transform duration-300 ${
                expertiseOpen ? "rotate-180" : ""
              }`}
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="m5 7.5 5 5 5-5"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {expertiseOpen && (
            <div className="rounded-xl bg-purple-50/70 px-3 py-2">
              {expertiseLinks.map((link) => (
                <a
                  key={link.href}
                  href={`/${link.href}`}
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-3 text-sm text-[#51476D] transition hover:bg-white hover:text-purple-700"
                >
                  {link.name}
                </a>
              ))}
            </div>
          )}

          {/* OTHER MOBILE LINKS */}
          {mainLinks.slice(2).map((link) => (
            <a
              key={link.href}
              href={`/${link.href}`}
              onClick={closeMenu}
              className="border-b border-purple-50 py-3.5 text-sm font-medium text-[#51476D] transition hover:pl-2 hover:text-purple-700"
            >
              {link.name}
            </a>
          ))}

          {/* MOBILE PARTNER CTA */}
          <a
            href="/#contact"
            onClick={closeMenu}
            className="mt-5 flex items-center justify-center gap-3 rounded-full bg-purple-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-700/20 transition hover:bg-purple-800"
          >
            Partner With Us
            <span>→</span>
          </a>
        </nav>
      </div>
    </header>
  );
}