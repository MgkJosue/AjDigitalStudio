import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "AJ Digital Studio — Software, Automatización & IA",
  description:
    "Agencia de desarrollo de software a medida, automatizaciones con IA y soluciones digitales end-to-end para emprendedores y empresas que quieren escalar.",
  keywords: [
    "automatización de procesos", "desarrollo de software", "agentes de IA",
    "chatbots", "n8n", "OpenAI", "SEO", "consultoría digital", "AJ Digital Studio",
  ],
  openGraph: {
    title: "AJ Digital Studio — Software, Automatización & IA",
    description: "Construimos la tecnología. Tú escalas el negocio.",
    type: "website",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as "en" | "es")) notFound();
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={`${syne.variable} ${dmSans.variable} font-body antialiased bg-black text-white`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
