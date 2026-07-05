import { Globe, Rocket, ShoppingCart, Wrench, TrendingUp, Server } from "lucide-react";
import { Reveal } from "./Reveal";
import { SERVICES } from "../lib/data";

const ICONS = { Globe, Rocket, ShoppingCart, Wrench, TrendingUp, Server };

export const Services = () => (
  <section id="servicos" data-testid="services-section" className="py-24 md:py-32">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <Reveal>
        <p className="font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-[#2ECC96] mb-4">Serviços</p>
        <h2 className="font-sora text-3xl md:text-4xl font-bold tracking-tight text-white max-w-2xl">
          Tudo que sua empresa precisa para vender online
        </h2>
      </Reveal>
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((s, i) => {
          const Icon = ICONS[s.icon];
          return (
            <Reveal key={s.title} delay={(i % 3) * 0.12}>
              <div
                data-testid={`service-card-${i}`}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:-translate-y-2 hover:border-[#2ECC96]/50 hover:shadow-2xl hover:shadow-[#2ECC96]/10 transition-all duration-300 h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2ECC96]/10 flex items-center justify-center text-[#2ECC96] group-hover:bg-[#2ECC96] group-hover:text-[#0F1322] transition-colors duration-300">
                  <Icon size={24} />
                </div>
                <h3 className="mt-6 font-sora text-xl font-semibold text-white">{s.title}</h3>
                <p className="mt-3 text-sm md:text-base text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
