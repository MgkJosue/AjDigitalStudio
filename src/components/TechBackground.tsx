"use client";

import { motion } from "framer-motion";

interface TechBackgroundProps {
  variant?: "hero" | "section";
}

export default function TechBackground({ variant = "section" }: TechBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden>
      {/* Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Vignette — fades grid toward edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 20%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      {/* Primary glow — top-right */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "55vw",
          height: "55vw",
          maxWidth: 680,
          maxHeight: 680,
          top: variant === "hero" ? "-15%" : "5%",
          right: "-8%",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.10) 0%, rgba(99,102,241,0.04) 40%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.07, 1], opacity: [0.75, 1, 0.75] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Secondary glow — bottom-left */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "42vw",
          height: "42vw",
          maxWidth: 520,
          maxHeight: 520,
          bottom: "-12%",
          left: "-6%",
          background:
            "radial-gradient(circle, rgba(20,184,166,0.07) 0%, rgba(20,184,166,0.02) 45%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.11, 1], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* HUD corner brackets */}
      <div className="absolute top-7 left-7 w-10 h-10 border-l-[1.5px] border-t-[1.5px] border-white/[0.07]" />
      <div className="absolute top-7 right-7 w-10 h-10 border-r-[1.5px] border-t-[1.5px] border-white/[0.07]" />
      <div className="absolute bottom-7 left-7 w-10 h-10 border-l-[1.5px] border-b-[1.5px] border-white/[0.07]" />
      <div className="absolute bottom-7 right-7 w-10 h-10 border-r-[1.5px] border-b-[1.5px] border-white/[0.07]" />

      {/* Scanning line (hero only) */}
      {variant === "hero" && (
        <motion.div
          className="absolute left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 30%, rgba(99,102,241,0.15) 50%, rgba(255,255,255,0.04) 70%, transparent 100%)",
          }}
          animate={{ top: ["8%", "88%"] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            repeatType: "reverse",
          }}
        />
      )}

      {/* Accent dots — decorative data points */}
      {[
        { top: "20%", left: "8%" },
        { top: "65%", left: "92%" },
        { top: "45%", left: "5%" },
      ].map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white/10"
          style={pos}
          animate={{ opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 1.2 }}
        />
      ))}
    </div>
  );
}
