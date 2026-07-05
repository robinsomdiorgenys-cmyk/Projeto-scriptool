import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Reveal } from "./Reveal";
import { PORTFOLIO, PORTFOLIO_FILTERS, waLink } from "../lib/data";

export const Portfolio = () => {
  const [filter, setFilter] = useState("Todos");
  const items = filter === "Todos" ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === filter);

  return (
    <section id="portfolio" data-testid="portfolio-section" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal>
          <p className="font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-[#2ECC96] mb-4">Portfólio</p>
          <h2 className="font-sora text-3xl md:text-4xl font-bold tracking-tight text-white max-w-2xl">
            Projetos que já estão gerando resultado
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap gap-3">
            {PORTFOLIO_FILTERS.map((f) => (
              <button
                key={f}
                data-testid={`portfolio-filter-${f.toLowerCase().replace(/\s/g, "-")}`}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                  filter === f
                    ? "bg-[#2ECC96] text-[#0F1322] border-[#2ECC96]"
                    : "border-white/20 text-slate-300 hover:border-[#2ECC96]/60 hover:text-[#2ECC96]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>
        <motion.div layout className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {items.map((p) => (
              <motion.a
                layout
                key={p.title}
                href={waLink(`Olá! Vi o projeto "${p.title}" no portfólio e quero um site parecido.`)}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`portfolio-item-${p.title.toLowerCase().replace(/\s/g, "-")}`}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl overflow-hidden border border-white/10 block"
              >
                <img
                  src={p.img}
                  alt={`Mockup do projeto ${p.title}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1322] via-[#0F1322]/30 to-transparent opacity-80 group-hover:bg-[#2ECC96]/20 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                  <div>
                    <span className="font-mono text-xs text-[#2ECC96] uppercase tracking-wider">{p.category}</span>
                    <h3 className="font-sora text-lg font-semibold text-white mt-1">{p.title}</h3>
                  </div>
                  <ExternalLink size={18} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
