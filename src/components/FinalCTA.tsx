"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/12368788095";

export default function FinalCTA() {
  const t = useTranslations("cta");

  return (
    <section id="contact" className="bg-black text-white py-24 lg:py-36 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-white/25 text-[11px] tracking-[0.3em] uppercase font-body mb-6">
            {t("badge")}
          </p>

          <h2
            className="font-heading font-extrabold leading-[0.92] tracking-tight text-white mb-8 max-w-4xl"
            style={{ fontSize: "clamp(2.4rem, 5vw, 5.5rem)" }}
          >
            {t("headline")}
          </h2>

          <p className="text-white/40 text-[15px] leading-relaxed font-body max-w-md mb-10">
            {t("subheadline")}
          </p>

          <div className="flex flex-wrap gap-3 mb-7">
            <a
              href="#"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-white text-black text-sm font-semibold tracking-wide hover:bg-white/90 transition-colors font-body"
            >
              {t("ctaPrimary")}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/15 text-white/55 hover:text-white hover:border-white/40 text-sm font-medium tracking-wide transition-all font-body"
            >
              <MessageCircle size={14} />
              {t("ctaSecondary")}
            </a>
          </div>

          <p className="text-white/20 text-[11px] tracking-[0.2em] uppercase font-body">{t("note")}</p>
        </motion.div>
      </div>
    </section>
  );
}
