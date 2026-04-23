"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Process() {
  const t = useTranslations("process");
  const steps = t.raw("steps") as { number: string; title: string; description: string }[];

  return (
    <section id="process" className="bg-black py-24 lg:py-36 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-28">

          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-white/25 text-[11px] tracking-[0.3em] uppercase font-body mb-3">
              {t("badge")}
            </p>
            <h2
              className="font-heading font-extrabold leading-[0.93] tracking-tight text-white mb-5"
              style={{ fontSize: "clamp(2.2rem, 3.5vw, 3.5rem)" }}
            >
              {t("headline")}<br />
              <span className="text-white/25">{t("headlineAccent")}</span>
            </h2>
            <p className="text-white/30 text-[14px] leading-relaxed font-body">
              {t("subheadline")}
            </p>
          </div>

          <div>
            {steps.map(({ number, title, description }, i) => (
              <motion.div
                key={number}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className="group border-b border-white/5 last:border-0 py-9 grid grid-cols-[52px_1fr] gap-5"
              >
                <span className="font-heading font-bold text-white/10 text-[15px] tracking-widest group-hover:text-white/25 transition-colors duration-300 pt-0.5">
                  {number}
                </span>
                <div>
                  <h3 className="font-heading font-bold text-[20px] lg:text-[22px] text-white tracking-tight mb-2">
                    {title}
                  </h3>
                  <p className="text-white/30 text-[14px] leading-relaxed font-body">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
