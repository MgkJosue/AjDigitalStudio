"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/12368788095";

export default function Navbar() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#services", label: t("services") },
    { href: "#why", label: t("whyUs") },
    { href: "#process", label: t("process") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/90 backdrop-blur-sm border-b border-white/5" : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 lg:px-12 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 shrink-0">
          <div className="relative w-9 h-9">
            <Image
              src="/images/logo-white.jpg"
              alt="AJ Digital Studio"
              fill
              className="object-contain rounded-sm"
              sizes="36px"
              priority
            />
          </div>
          <span className="font-heading font-bold text-white text-base tracking-tight hidden sm:block">
            AJ Digital Studio
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[13px] text-white/50 hover:text-white transition-colors duration-200 tracking-wide font-body"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center px-5 py-2 border border-white/20 hover:border-white hover:bg-white hover:text-black text-white text-[13px] font-medium tracking-wide transition-all duration-200"
        >
          {t("cta")}
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar" : "Abrir menú"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black px-6 py-8 flex flex-col gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/60 hover:text-white text-lg font-heading font-bold tracking-tight transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center border border-white/30 hover:bg-white hover:text-black text-white py-3 px-6 text-sm font-medium transition-all duration-200"
          >
            {t("cta")}
          </a>
        </div>
      )}
    </header>
  );
}
