import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amna Faraz — Panaversity AI Agent Architect",
  description:
    "Building Digital FTEs — 168h/week. Zero fatigue. Panaversity Hackathon Portfolio by Amna Faraz.",
  keywords: ["AI", "Panaversity", "hackathon", "Next.js", "Groq", "Supabase"],
  openGraph: {
    title: "Amna Faraz — Panaversity AI Agent Architect",
    description: "Building Digital FTEs — 168h/week. Zero fatigue.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amna Faraz — Panaversity AI Agent Architect",
    description: "Building Digital FTEs — 168h/week. Zero fatigue.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
