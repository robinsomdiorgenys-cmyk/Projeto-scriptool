import { Check, MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import { PLANS, waLink } from "../lib/data";

export const Pricing = () => (
  <section id="planos" data-testid="pricing-section" className="py-24 md:py-32">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <Reveal className="text-center">
        <p className="font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-[#2ECC96] mb-4">Planos e preços</p>
        <h2 className="font-sora text-3xl md:text-4xl font-bold tracking-tight text-white">
          Escolha o plano ideal para o seu momento
        </h2>
        <p className="mt-4 text-base md:text-lg text-slate-400 max-w-xl mx-auto">
          Todos os planos incluem domínio, hospedagem e design responsivo. Sem mensalidade escondida.
        </p>
      </Reveal>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {PLANS.map((plan, i) => (
          <Reveal key={plan.name} delay={i * 0.15}>
            <div
              data-testid={`pricing-card-${plan.name.toLowerCase()}`}
              className={`relative p-8 rounded-2xl border h-full flex flex-col transition-all duration-300 hover:-translate-y-2 ${
                plan.highlight
                  ? "bg-[#2ECC96]/5 border-[#2ECC96] shadow-[0_0_40px_rgba(46,204,150,0.15)]"
                  : "bg-white/5 border-white/10 hover:border-[#2ECC96]/40"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2ECC96] text-[#0F1322] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  Mais Popular
                </span>
              )}
              <h3 className="font-sora text-xl font-semibold text-white">{plan.name}</h3>
              <p className="mt-2 text-sm text-slate-400">{plan.desc}</p>
              <p className="mt-6">
                <span className="font-sora text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-sm text-slate-400 ml-1">/ projeto</span>
              </p>
              <ul className="mt-8 space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                    <Check size={18} className="text-[#2ECC96] shrink-0 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>
              <a
                href={waLink(`Olá! Tenho interesse no plano ${plan.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`pricing-cta-${plan.name.toLowerCase()}`}
                className={`mt-8 inline-flex items-center justify-center gap-2 font-semibold px-6 py-3.5 rounded-full transition-all duration-300 ${
                  plan.highlight
                    ? "bg-[#2ECC96] text-[#0F1322] hover:scale-105 hover:shadow-[0_0_20px_rgba(46,204,150,0.4)]"
                    : "border-2 border-[#2ECC96] text-[#2ECC96] hover:bg-[#2ECC96]/10"
                }`}
              >
                <MessageCircle size={18} /> Contratar {plan.name}
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
