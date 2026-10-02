import { ArrowUp } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="container-page">
      <div className="flex items-center justify-between border-t border-line py-8 font-mono text-[12px] text-fg-dim">
        <span>
          &copy; {new Date().getFullYear()} {site.name}
        </span>
        <a href="#top" className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-fg">
          Back to top <ArrowUp size={12} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
