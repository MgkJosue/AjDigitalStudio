"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function WhyUs() {
  const t = useTranslations("why");
  const items = t.raw("items") as { title: string; description: string }[];

  return (
    <section id="why" className="bg-white text-black py-24 lg:py-36 border-t border-black/6">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header row */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 mb-16 items-end">
          <div>
            <p className="text-black/30 text-[11px] tracking-[0.25em] uppercase font-body mb-3">
              {t("badge")}
            </p>
            <h2
              className="font-heading font-extrabold leading-[0.93] tracking-tight"
              style={{ fontSize: "clamp(2.2rem, 4vw, 4rem)" }}
            >
              {t("headline")}&nbsp;
              <span className="text-black/25">{t("headlineAccent")}</span>
            </h2>
          </div>
          <p className="text-black/40 text-[15px] leading-relaxed font-body max-w-sm">
            {t("subheadline")}
          </p>
        </div>

        {/* Items — clean bordered rows */}
        <div className="border-t border-black/8">
          {items.map(({ title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              className="group border-b border-black/8 py-8 grid grid-cols-1 lg:grid-cols-[64px_240px_1fr] gap-3 lg:gap-8 items-start hover:bg-black/[0.015] transition-colors -mx-2 px-2"
            >
              {/* Number */}
              <span className="font-heading font-bold text-[13px] tracking-widest text-black/20 pt-1">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Title */}
              <div className="flex items-start gap-2.5">
                <CheckCircle
                  size={16}
                  className="text-black/30 mt-0.5 shrink-0 group-hover:text-black/60 transition-colors"
                />
                <h3 className="font-heading font-bold text-[17px] lg:text-[19px] tracking-tight text-black leading-snug">
                  {title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-black/45 text-[14px] leading-relaxed font-body pl-[26px] lg:pl-0">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
