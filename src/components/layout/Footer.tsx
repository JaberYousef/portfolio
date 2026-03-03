import { socialLinks, siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-bp-border/50 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 sm:flex-row sm:justify-between">
        <p className="font-[family-name:var(--font-jetbrains)] text-xs tracking-wider opacity-50">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.icon !== "email" ? "_blank" : undefined}
              rel={link.icon !== "email" ? "noopener noreferrer" : undefined}
              className="font-[family-name:var(--font-jetbrains)] text-xs tracking-wider opacity-50 transition-opacity hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
