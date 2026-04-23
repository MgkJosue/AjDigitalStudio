"use client";

const items = [
  "n8n", "OpenAI", "Next.js", "Node.js", "PostgreSQL", "Make.com",
  "Webhooks", "REST APIs", "Python", "TypeScript", "AWS", "Vercel",
  "LangChain", "GPT-4", "Docker", "Redis", "Stripe", "Zapier",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="bg-black border-y border-white/8 py-4 overflow-hidden">
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: "marquee 32s linear infinite",
          width: "max-content",
          gap: "3.5rem",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-white/50 text-[11px] tracking-[0.22em] uppercase font-heading font-bold shrink-0"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
