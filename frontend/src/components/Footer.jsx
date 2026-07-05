import { Instagram, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_LINKS, INSTAGRAM, WHATSAPP } from "../lib/data";

export const Footer = () => (
  <footer data-testid="main-footer" className="bg-[#0F1322] border-t border-white/10 py-16">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-xs">
            Criamos sites profissionais para empresas que merecem existir online.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-instagram-link"
              aria-label="Instagram da Scriptool"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-slate-300 hover:border-[#2ECC96] hover:text-[#2ECC96] transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-whatsapp-link"
              aria-label="WhatsApp da Scriptool"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-slate-300 hover:border-[#2ECC96] hover:text-[#2ECC96] transition-colors"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-sora font-semibold text-white text-sm uppercase tracking-wider">Links rápidos</h3>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-slate-400 hover:text-[#2ECC96] transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-sora font-semibold text-white text-sm uppercase tracking-wider">Contato</h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-400">
            <li>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="hover:text-[#2ECC96] transition-colors">
                WhatsApp: (41) 98786-9936
              </a>
            </li>
            <li>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:text-[#2ECC96] transition-colors">
                @stonkmind
              </a>
            </li>
            <li>Curitiba — PR, Brasil</li>
          </ul>
        </div>
      </div>
      <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-500">© {new Date().getFullYear()} Scriptool. Todos os direitos reservados.</p>
        <p className="font-mono text-xs text-slate-600">&lt;/&gt; feito com código e café</p>
      </div>
    </div>
  </footer>
);
