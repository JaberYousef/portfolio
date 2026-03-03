import type { Metadata } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yousef Jaber | Software Engineer",
  description:
    "Portfolio of Yousef Jaber, a software engineer specializing in full-stack development, AI, and distributed systems. UC Santa Cruz CS '25.",
  keywords: [
    "Yousef Jaber",
    "Software Engineer",
    "Full-Stack Developer",
    "Portfolio",
    "UC Santa Cruz",
    "Next.js",
    "TypeScript",
    "React",
  ],
  openGraph: {
    title: "Yousef Jaber | Software Engineer",
    description:
      "Building robust, scalable software with precision engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${jetbrainsMono.variable} bg-bp-bg text-bp-text antialiased`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme')||'dark';document.documentElement.setAttribute('data-theme',t)})();`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
