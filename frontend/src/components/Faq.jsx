import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Reveal } from "./Reveal";
import { FAQS } from "../lib/data";

export const Faq = () => (
  <section id="faq" data-testid="faq-section" className="py-24 md:py-32 bg-[#0F1322]">
    <div className="max-w-3xl mx-auto px-6 lg:px-12">
      <Reveal className="text-center">
        <p className="font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-[#2ECC96] mb-4">FAQ</p>
        <h2 className="font-sora text-3xl md:text-4xl font-bold tracking-tight text-white">
          Perguntas frequentes
        </h2>
      </Reveal>
      <Reveal delay={0.15}>
        <Accordion type="single" collapsible className="mt-12 space-y-4">
          {FAQS.map((f, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              data-testid={`faq-item-${i}`}
              className="border border-white/10 rounded-xl px-6 bg-white/5 data-[state=open]:border-[#2ECC96]/50 transition-colors"
            >
              <AccordionTrigger className="font-sora text-left text-white hover:text-[#2ECC96] hover:no-underline text-base font-semibold">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-slate-400 text-sm md:text-base leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </div>
  </section>
);
