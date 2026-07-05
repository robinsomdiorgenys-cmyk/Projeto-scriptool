import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Reveal } from "./Reveal";
import { STATS } from "../lib/data";

const Counter = ({ value, suffix }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      setCount(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-sora text-4xl md:text-5xl font-bold text-[#2ECC96]">
      {count}
      {suffix}
    </span>
  );
};

export const About = () => (
  <section id="quem-somos" data-testid="about-section" className="py-24 md:py-32 bg-[#0F1322]">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
      <Reveal>
        <p className="font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-[#2ECC96] mb-4">Quem somos</p>
        <h2 className="font-sora text-3xl md:text-4xl font-bold tracking-tight text-white">
          Existimos para colocar o seu negócio no mapa digital
        </h2>
        <p className="mt-6 text-base md:text-lg text-slate-300 leading-relaxed">
          A <strong className="text-white">Scriptool</strong> nasceu de uma constatação simples: milhares de
          empresas incríveis ainda são invisíveis na internet. Nossa missão é mudar isso — criando sites
          profissionais, acessíveis e que realmente geram resultado para pequenas e médias empresas.
        </p>
        <p className="mt-4 text-base md:text-lg text-slate-300 leading-relaxed">
          Cuidamos de todo o processo: design, desenvolvimento, domínio, hospedagem e suporte.
          Você foca no seu negócio, nós cuidamos da sua presença online.
        </p>
      </Reveal>
      <div className="grid grid-cols-2 gap-6">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.12}>
            <div
              data-testid={`stat-card-${i}`}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#2ECC96]/40 transition-colors duration-300"
            >
              <Counter value={s.value} suffix={s.suffix} />
              <p className="mt-2 text-sm text-slate-400">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
