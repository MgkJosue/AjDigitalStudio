"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import AutomationMock from "./AutomationMock";
import TechBackground from "./TechBackground";

const WHATSAPP_URL = "https://wa.me/12368788095";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative bg-black">
      <TechBackground variant="hero" />

      <div className="relative max-w-[1400px] mx-auto w-full px-6 lg:px-12 pt-36 pb-20">

        {/* Top label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-white/25 text-[11px] tracking-[0.3em] uppercase font-body mb-16"
        >
          {t("badge")}
        </motion.p>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">

          {/* Left — headline + CTA */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="font-heading font-extrabold leading-[0.93] tracking-tight text-white mb-6"
              style={{ fontSize: "clamp(2.8rem, 5.5vw, 5.5rem)" }}
            >
              {t("headline")}
              <br />
              <span className="text-white/25">{t("headlineAccent")}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-white/45 text-base lg:text-lg leading-relaxed max-w-md mb-10 font-body"
            >
              {t("subheadline")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-semibold tracking-wide hover:bg-white/90 transition-colors font-body"
              >
                {t("ctaPrimary")}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/15 text-white/60 hover:text-white hover:border-white/40 text-sm font-medium tracking-wide transition-all font-body"
              >
                <MessageCircle size={14} />
                {t("ctaSecondary")}
              </a>
            </motion.div>
          </div>

          {/* Right — automation visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="hidden lg:block"
          >
            <AutomationMock />
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-white/8 pt-8 flex flex-wrap gap-10 lg:gap-16"
        >
          {[
            { v: t("stat1Value"), l: t("stat1Label") },
            { v: t("stat2Value"), l: t("stat2Label") },
            { v: t("stat3Value"), l: t("stat3Label") },
          ].map(({ v, l }) => (
            <div key={l}>
              <div className="font-heading font-extrabold text-2xl lg:text-3xl text-white mb-1">{v}</div>
              <div className="text-white/25 text-[10px] tracking-[0.2em] uppercase font-body">{l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
