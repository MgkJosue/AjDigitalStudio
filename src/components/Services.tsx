"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Services() {
  const t = useTranslations("services");
  const items = t.raw("items") as { title: string; description: string }[];

  return (
    <section id="services" className="bg-white text-black py-24 lg:py-36 border-t border-black/6">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <p className="text-black/30 text-[11px] tracking-[0.25em] uppercase font-body mb-3">
              {t("badge")}
            </p>
            <h2
              className="font-heading font-extrabold leading-[0.93] tracking-tight text-black"
              style={{ fontSize: "clamp(2.2rem, 4vw, 4rem)" }}
            >
              {t("headline")}
            </h2>
          </div>
          <p className="text-black/40 text-[15px] leading-relaxed max-w-xs font-body">
            {t("subheadline")}
          </p>
        </div>

        {/* Service rows */}
        <div className="border-t border-black/8">
          {items.map(({ title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="group border-b border-black/8 py-7 lg:py-8 flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-0 hover:bg-black/[0.015] transition-colors -mx-2 px-2"
            >
              {/* Number */}
              <span className="font-heading font-bold text-[12px] tracking-widest text-black/18 shrink-0 w-14 pt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Title */}
              <h3 className="font-heading font-bold text-[18px] lg:text-[20px] tracking-tight text-black leading-snug shrink-0 lg:w-[260px]">
                {title}
              </h3>

              {/* Description */}
              <p className="text-black/45 text-[14px] leading-relaxed font-body flex-1 lg:pl-8 lg:max-w-xl">
                {description}
              </p>

              {/* Arrow */}
              <ArrowUpRight
                size={16}
                className="text-black/15 group-hover:text-black/50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0 mt-1 hidden lg:block ml-6"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
