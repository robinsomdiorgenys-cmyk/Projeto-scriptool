import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Reveal } from "./Reveal";
import { TESTIMONIALS } from "../lib/data";

export const Testimonials = () => {
  const [idx, setIdx] = useState(0);
  const t = TESTIMONIALS[idx];
  const next = () => setIdx((i) => (i + 1) % TESTIMONIALS.length);
  const prev = () => setIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section id="depoimentos" data-testid="testimonials-section" className="py-24 md:py-32 bg-[#0F1322]">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <Reveal>
          <p className="font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-[#2ECC96] mb-4">Depoimentos</p>
          <h2 className="font-sora text-3xl md:text-4xl font-bold tracking-tight text-white">
            Quem já existe online com a Scriptool
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-14 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                data-testid="testimonial-card"
                className="p-10 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="flex justify-center gap-1 text-[#2ECC96]">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="mt-6 text-base md:text-lg text-slate-300 leading-relaxed italic">"{t.text}"</p>
                <div className="mt-8 flex items-center justify-center gap-4">
                  <img src={t.img} alt={`Foto de ${t.name}`} className="w-14 h-14 rounded-full object-cover border-2 border-[#2ECC96]/50" loading="lazy" />
                  <div className="text-left">
                    <p className="font-sora font-semibold text-white">{t.name}</p>
                    <p className="text-sm text-slate-400">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="mt-8 flex items-center justify-center gap-4">
              <button data-testid="testimonial-prev-button" onClick={prev} aria-label="Depoimento anterior" className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#2ECC96] hover:text-[#2ECC96] transition-colors">
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    data-testid={`testimonial-dot-${i}`}
                    onClick={() => setIdx(i)}
                    aria-label={`Ir para depoimento ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${i === idx ? "w-8 bg-[#2ECC96]" : "w-2 bg-white/30"}`}
                  />
                ))}
              </div>
              <button data-testid="testimonial-next-button" onClick={next} aria-label="Próximo depoimento" className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#2ECC96] hover:text-[#2ECC96] transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
