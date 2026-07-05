import { Reveal } from "./Reveal";
import { STEPS } from "../lib/data";

export const Process = () => (
  <section id="como-funciona" data-testid="process-section" className="py-24 md:py-32 bg-[#0F1322]">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <Reveal>
        <p className="font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-[#2ECC96] mb-4">Como funciona</p>
        <h2 className="font-sora text-3xl md:text-4xl font-bold tracking-tight text-white max-w-2xl">
          Do briefing ao site no ar em 5 passos
        </h2>
      </Reveal>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-8 relative">
        <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-px bg-gradient-to-r from-[#2ECC96]/0 via-[#2ECC96]/50 to-[#2ECC96]/0" />
        {STEPS.map((step, i) => (
          <Reveal key={step.num} delay={i * 0.15}>
            <div data-testid={`process-step-${i}`} className="relative text-center md:text-left">
              <div className="w-14 h-14 mx-auto md:mx-0 rounded-full bg-[#1A1F36] border-2 border-[#2ECC96] flex items-center justify-center font-mono font-bold text-[#2ECC96] relative z-10">
                {step.num}
              </div>
              <h3 className="mt-5 font-sora text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">{step.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
