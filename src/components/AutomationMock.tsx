"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const LETTERS = ["A", "B", "C", "D", "E"];

export default function AutomationMock() {
  const t = useTranslations("automation");
  const nodes = t.raw("nodes") as { label: string; sub: string }[];
  const logs  = t.raw("logs")  as { time: string; text: string }[];

  return (
    <div className="border border-white/10 bg-[#080808] overflow-hidden text-[13px] font-mono">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5 bg-black/40">
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-white/10" />
          ))}
        </div>
        <span className="text-white/20 text-[11px] ml-2">{t("file")}</span>
        <div className="ml-auto flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-pulse inline-block" />
          <span className="text-white/25 text-[10px] tracking-widest">{t("running")}</span>
        </div>
      </div>

      {/* Flow */}
      <div className="px-5 py-5 space-y-1">
        {nodes.map((node, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
            className="flex items-start gap-3"
          >
            <div className="flex flex-col items-center mt-1 shrink-0">
              <div
                className={`w-5 h-5 border flex items-center justify-center text-[9px] font-bold ${
                  i < 2 ? "border-white/60 text-white" : "border-white/15 text-white/30"
                }`}
              >
                {LETTERS[i]}
              </div>
              {i < nodes.length - 1 && (
                <div className="w-px h-4 bg-white/8 mt-0.5" />
              )}
            </div>
            <div className="pb-2">
              <div
                className={`text-[12px] font-bold tracking-wide ${
                  i < 2 ? "text-white" : "text-white/35"
                }`}
              >
                {node.label}
              </div>
              <div className="text-[10px] text-white/20">{node.sub}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Log */}
      <div className="border-t border-white/5 px-5 py-4 space-y-1.5 bg-black/20">
        <div className="text-[10px] text-white/15 tracking-widest uppercase mb-2">
          {t("logTitle")}
        </div>
        {logs.map(({ time, text }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 + i * 0.15, duration: 0.3 }}
            className="flex gap-3 text-[11px]"
          >
            <span className="text-white/15 shrink-0 tabular-nums">{time}</span>
            <span className={i % 2 === 1 ? "text-white/25" : "text-white/50"}>{text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
