"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const SOCIAL = {
  instagram: "https://instagram.com/ajdigitalstudio", // TODO: Replace
  linkedin: "https://linkedin.com/company/ajdigitalstudio", // TODO: Replace
  twitter: "https://twitter.com/ajdigitalstudio", // TODO: Replace
};

export default function Footer() {
  const t = useTranslations("footer");
  const links = t.raw("links") as Record<string, string>;

  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-14 mb-16">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-9 h-9">
                <Image src="/images/logo-white.jpg" alt="AJ Digital Studio" fill className="object-contain rounded-sm" sizes="36px" />
              </div>
              <span className="font-heading font-bold text-white text-base tracking-tight">
                AJ Digital Studio
              </span>
            </div>
            <p className="text-white/25 text-sm leading-relaxed max-w-xs font-body mb-8">
              {t("tagline")}
            </p>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { href: SOCIAL.instagram, label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
                { href: SOCIAL.linkedin, label: "LinkedIn", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 23.227 24 22.222 0h.003z" },
                { href: SOCIAL.twitter, label: "X", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
              ].map(({ href, label, path }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/20 hover:text-white hover:border-white/30 transition-all duration-200"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-white/20 text-[10px] tracking-[0.2em] uppercase font-body mb-5">{t("services")}</p>
            <ul className="space-y-3">
              {[links.automation, links.software, links.ai, links.landing, links.seo, links.consulting].map((l) => (
                <li key={l}>
                  <a href="#services" className="text-white/30 hover:text-white/70 text-sm font-body transition-colors duration-200">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-white/20 text-[10px] tracking-[0.2em] uppercase font-body mb-5">{t("company")}</p>
            <ul className="space-y-3">
              {[links.about, links.contact].map((l) => (
                <li key={l}>
                  <a href="#contact" className="text-white/30 hover:text-white/70 text-sm font-body transition-colors duration-200">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/15 text-xs font-body">
          <p>&copy; {new Date().getFullYear()} AJ Digital Studio. {t("rights")}</p>
          <p>
            {t("credit")}{" "}
            <a href="https://tododeia.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/30 transition-colors">
              Tododeia
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
