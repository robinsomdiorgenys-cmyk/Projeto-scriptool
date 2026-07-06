import { useEffect, useState } from "react";
import { Check, MessageCircle, Flame } from "lucide-react";
import { Reveal } from "./Reveal";
import { PLANS, PROMO_END, waLink } from "../lib/data";

const getTimeLeft = () => {
  const diff = PROMO_END.getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    dias: Math.floor(diff / 86400000),
    horas: Math.floor((diff / 3600000) % 24),
    min: Math.floor((diff / 60000) % 60),
    seg: Math.floor((diff / 1000) % 60),
  };
};

const Countdown = ({ timeLeft }) => (
  <div data-testid="promo-countdown" className="mt-10 flex flex-col items-center gap-4">
    <p className="font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-[#FF6B4A] flex items-center gap-2">
      <Flame size={16} className="animate-flicker" /> Oferta de lançamento termina em:
    </p>
    <div className="flex gap-3">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} data-testid={`countdown-${unit}`} className="flex flex-col items-center">
          <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-xl bg-[#0F1322] border border-[#2ECC96]/30 flex items-center justify-center shadow-lg shadow-black/30">
            <span key={value} className="font-sora text-2xl md:text-3xl font-bold text-[#2ECC96] animate-tick tabular-nums">
              {String(value).padStart(2, "0")}
            </span>
          </div>
          <span className="mt-2 font-mono text-[10px] uppercase tracking-widest text-slate-400">{unit}</span>
        </div>
      ))}
    </div>
  </div>
);

const PromoBadge = () => (
  <span
    data-testid="promo-badge"
    className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#FF4D3D] to-[#FF6B4A] text-white text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-lg shadow-[#FF4D3D]/30 animate-pulse-soft"
  >
    <Flame size={14} className="animate-flicker" /> 50% OFF
  </span>
);

export const Pricing = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const promoActive = timeLeft !== null;

  return (
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
          {promoActive && <Countdown timeLeft={timeLeft} />}
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
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2ECC96] text-[#0F1322] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider whitespace-nowrap">
                    Mais Popular
                  </span>
                )}
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-sora text-xl font-semibold text-white">{plan.name}</h3>
                  {promoActive && <PromoBadge />}
                </div>
                <p className="mt-2 text-sm text-slate-400">{plan.desc}</p>
                {promoActive ? (
                  <div className="mt-6">
                    <p data-testid={`original-price-${plan.name.toLowerCase()}`} className="text-sm text-slate-500 line-through">
                      de {plan.price}
                    </p>
                    <p className="mt-1">
                      <span data-testid={`promo-price-${plan.name.toLowerCase()}`} className="font-sora text-4xl font-bold text-[#2ECC96]">
                        {plan.promoPrice}
                      </span>
                      <span className="text-xs text-slate-400 ml-2 uppercase tracking-wide">por tempo limitado</span>
                    </p>
                  </div>
                ) : (
                  <p className="mt-6">
                    <span className="font-sora text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-sm text-slate-400 ml-1">/ projeto</span>
                  </p>
                )}
                <ul className="mt-8 space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                      <Check size={18} className="text-[#2ECC96] shrink-0 mt-0.5" /> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink(`Olá! Tenho interesse no plano ${plan.name}${promoActive ? " com a oferta de lançamento de 50% OFF" : ""}.`)}
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
};
