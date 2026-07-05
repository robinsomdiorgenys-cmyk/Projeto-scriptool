import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import { Reveal } from "./Reveal";
import { waLink } from "../lib/data";

export const FinalCta = () => {
  const [form, setForm] = useState({ name: "", business: "", message: "" });

  const submit = (e) => {
    e.preventDefault();
    const msg = `Olá! Me chamo ${form.name}, da empresa ${form.business}. ${form.message}`;
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contato" data-testid="contact-section" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#1A1F36] to-[#0F1322]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#2ECC96]/5 blur-3xl -z-10" />
      <div className="max-w-5xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <h2 className="font-sora text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Pronto para colocar sua empresa <span className="text-[#2ECC96]">no ar</span>?
          </h2>
          <p className="mt-6 text-base md:text-lg text-slate-300 leading-relaxed">
            Preencha o formulário ou chame direto no WhatsApp. Respondemos em minutos e seu
            orçamento é 100% gratuito, sem compromisso.
          </p>
          <a
            href={waLink("Olá! Quero um orçamento gratuito para meu site.")}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="final-cta-whatsapp-button"
            className="mt-8 inline-flex items-center gap-2 bg-[#2ECC96] text-[#0F1322] font-semibold px-8 py-4 rounded-full hover:scale-105 hover:shadow-[0_0_28px_rgba(46,204,150,0.45)] transition-all duration-300"
          >
            <MessageCircle size={20} /> Chamar no WhatsApp
          </a>
        </Reveal>
        <Reveal delay={0.2}>
          <form
            onSubmit={submit}
            data-testid="contact-form"
            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-5"
          >
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-slate-300 mb-2">Seu nome</label>
              <input
                id="contact-name"
                data-testid="contact-name-input"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-[#0F1322] border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#2ECC96] focus:ring-1 focus:ring-[#2ECC96] transition-all"
                placeholder="João Silva"
              />
            </div>
            <div>
              <label htmlFor="contact-business" className="block text-sm font-medium text-slate-300 mb-2">Nome da empresa</label>
              <input
                id="contact-business"
                data-testid="contact-business-input"
                required
                value={form.business}
                onChange={(e) => setForm({ ...form, business: e.target.value })}
                className="w-full bg-[#0F1322] border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#2ECC96] focus:ring-1 focus:ring-[#2ECC96] transition-all"
                placeholder="Minha Empresa Ltda"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-slate-300 mb-2">O que você precisa?</label>
              <textarea
                id="contact-message"
                data-testid="contact-message-input"
                required
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-[#0F1322] border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#2ECC96] focus:ring-1 focus:ring-[#2ECC96] transition-all resize-none"
                placeholder="Quero um site institucional para minha empresa..."
              />
            </div>
            <button
              type="submit"
              data-testid="contact-submit-button"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#2ECC96] text-[#0F1322] font-semibold px-6 py-4 rounded-full hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(46,204,150,0.4)] transition-all duration-300"
            >
              <Send size={18} /> Enviar pelo WhatsApp
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};
