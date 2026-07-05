import { useState, useEffect } from "react";
import { Instagram, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_LINKS, INSTAGRAM, waLink } from "../lib/data";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1A1F36]/70 backdrop-blur-xl border-b border-white/10 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Logo />
        <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.href.slice(1)}`}
              className="text-sm font-medium text-slate-300 hover:text-[#2ECC96] transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="header-instagram-link"
            aria-label="Instagram da Scriptool"
            className="text-slate-300 hover:text-[#2ECC96] transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a
            href={waLink("Olá! Quero criar um site para minha empresa.")}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="header-cta-button"
            className="bg-[#2ECC96] text-[#0F1322] text-sm font-semibold px-6 py-2.5 rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(46,204,150,0.4)] transition-all duration-300"
          >
            Fale Conosco
          </a>
        </div>
        <button
          data-testid="mobile-menu-toggle"
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      {open && (
        <div data-testid="mobile-menu" className="lg:hidden bg-[#0F1322]/95 backdrop-blur-xl border-t border-white/10 mt-3">
          <nav className="flex flex-col px-6 py-6 gap-4" aria-label="Menu mobile">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-[#2ECC96] transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href={waLink("Olá! Quero criar um site para minha empresa.")}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="mobile-cta-button"
              className="bg-[#2ECC96] text-[#0F1322] text-center font-semibold px-6 py-3 rounded-full mt-2"
            >
              Fale Conosco
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
