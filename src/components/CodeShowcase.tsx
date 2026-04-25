"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function CodeShowcase() {
  const t = useTranslations("showcase");

  const codeLines = [
    [{ t: t("codeComment"), c: "#3a3a3a" }],
    [],
    [{ t: "const ", c: "#666" }, { t: "agent", c: "#eee" }, { t: " = new ", c: "#666" }, { t: "AIAgent", c: "#fff" }, { t: "({", c: "#666" }],
    [{ t: "  model", c: "#aaa" }, { t: ": ", c: "#666" }, { t: '"gpt-4-turbo"', c: "#888" }, { t: ",", c: "#666" }],
    [{ t: "  tools", c: "#aaa" }, { t: ": [", c: "#666" }, { t: "crm", c: "#ddd" }, { t: ", ", c: "#666" }, { t: "email", c: "#ddd" }, { t: ", ", c: "#666" }, { t: "slack", c: "#ddd" }, { t: "],", c: "#666" }],
    [{ t: "  memory", c: "#aaa" }, { t: ": ", c: "#666" }, { t: "true", c: "#ccc" }],
    [{ t: "});", c: "#666" }],
    [],
    [{ t: "const ", c: "#666" }, { t: "result", c: "#eee" }, { t: " = await ", c: "#666" }, { t: "agent", c: "#eee" }, { t: ".run(", c: "#666" }],
    [{ t: "  " + t("codePrompt"), c: "#666" }],
    [{ t: ");", c: "#666" }],
  ];

  return (
    <section className="bg-black py-24 lg:py-36 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Text */}
          <div>
            <p className="text-white/25 text-[11px] tracking-[0.3em] uppercase font-body mb-5">
              {t("badge")}
            </p>
            <h2
              className="font-heading font-extrabold leading-[0.93] tracking-tight text-white mb-5"
              style={{ fontSize: "clamp(2.2rem, 3.8vw, 3.8rem)" }}
            >
              {t("headline")}
              <br />
              <span className="text-white/25">{t("headlineAccent")}</span>
            </h2>
            <p className="text-white/40 text-[15px] leading-relaxed font-body mb-8 max-w-sm">
              {t("body")}
            </p>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/5">
              {[
                { v: t("m1v"), l: t("m1l") },
                { v: t("m2v"), l: t("m2l") },
                { v: t("m3v"), l: t("m3l") },
              ].map(({ v, l }) => (
                <div key={l}>
                  <div className="font-heading font-extrabold text-xl lg:text-2xl text-white mb-0.5">{v}</div>
                  <div className="text-white/20 text-[10px] tracking-wide uppercase font-body leading-tight">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Code block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-white/8"
          >
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5 bg-[#0A0A0A]">
              <div className="flex gap-1.5">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-white/8" />
                ))}
              </div>
              <span className="text-white/20 text-[11px] font-mono">agent.ts</span>
              <div />
            </div>

            <div className="bg-[#050505] px-5 py-5 font-mono text-[12px] leading-[1.8]">
              {codeLines.map((line, i) => (
                <div key={i} className="flex min-h-[1.8em]">
                  <span className="text-white/8 w-5 shrink-0 select-none mr-4 text-right text-[10px] mt-[3px]">
                    {i + 1}
                  </span>
                  <span>
                    {line.map((tok, j) => (
                      <span key={j} style={{ color: tok.c }}>{tok.t}</span>
                    ))}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-black border-t border-white/5 px-5 py-4 font-mono text-[11px] space-y-1">
              <div className="text-white/15">{t("terminalRun")}</div>
              <div className="text-white/45">{t("terminalOut1")}</div>
              <div className="text-white/45">{t("terminalOut2")}</div>
              <div className="text-white/15">{t("terminalOut3")}</div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="mt-20 h-px bg-white/5" />
      </div>
    </section>
  );
}
