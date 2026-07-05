import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { waLink } from "../lib/data";

const CodeCard = () => (
  <motion.div
    animate={{ y: [0, -18, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    className="relative bg-[#0F1322]/90 border border-white/10 rounded-2xl p-6 shadow-2xl shadow-black/50 backdrop-blur-xl w-full max-w-md font-mono text-sm leading-7"
  >
    <div className="flex gap-2 mb-4">
      <span className="w-3 h-3 rounded-full bg-red-400/70" />
      <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
      <span className="w-3 h-3 rounded-full bg-[#2ECC96]" />
    </div>
    <p><span className="text-[#7C8CF8]">const</span> <span className="text-white">suaEmpresa</span> = {"{"}</p>
    <p className="pl-5"><span className="text-slate-400">presencaDigital:</span> <span className="text-[#2ECC96]">true</span>,</p>
    <p className="pl-5"><span className="text-slate-400">clientesNovos:</span> <span className="text-[#2ECC96]">"+340%"</span>,</p>
    <p className="pl-5"><span className="text-slate-400">abertoOnline:</span> <span className="text-[#2ECC96]">"24/7"</span>,</p>
    <p>{"}"};</p>
    <p className="mt-3 text-slate-500">// feito pela <span className="text-[#2ECC96]">Scriptool</span> ✓</p>
    <motion.span
      animate={{ opacity: [1, 0, 1] }}
      transition={{ duration: 1, repeat: Infinity }}
      className="inline-block w-2 h-4 bg-[#2ECC96] align-middle ml-1"
    />
  </motion.div>
);

export const Hero = () => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 600], [0, 140]);
  const yContent = useTransform(scrollY, [0, 600], [0, -60]);

  return (
    <section id="inicio" data-testid="hero-section" className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20">
      <motion.div style={{ y: yBg }} className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1758073519996-6d3c63b4922c?crop=entropy&cs=srgb&fm=jpg&q=85&w=1920"
          alt=""
          className="w-full h-[120%] object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1F36]/80 via-[#1A1F36]/90 to-[#1A1F36]" />
      </motion.div>

      <motion.div style={{ y: yContent }} className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center w-full">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-[#2ECC96] mb-6"
          >
            &lt;/&gt; Criação de sites profissionais
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-sora text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]"
          >
            Sua empresa merece{" "}
            <span className="text-[#2ECC96]">existir online</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 text-base md:text-lg text-slate-300 leading-relaxed max-w-xl"
          >
            Criamos sites modernos, rápidos e prontos para vender — para pequenas e médias
            empresas que ainda não têm presença digital. Do domínio à entrega, cuidamos de tudo.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href={waLink("Olá! Quero meu site com a Scriptool.")}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-whatsapp-button"
              className="inline-flex items-center justify-center gap-2 bg-[#2ECC96] text-[#0F1322] font-semibold px-8 py-4 rounded-full hover:scale-105 hover:shadow-[0_0_28px_rgba(46,204,150,0.45)] transition-all duration-300"
            >
              <MessageCircle size={20} /> Quero meu site
            </a>
            <a
              href="#portfolio"
              data-testid="hero-portfolio-button"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:border-[#2ECC96] hover:text-[#2ECC96] transition-all duration-300"
            >
              Ver portfólio <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden lg:flex justify-center"
        >
          <CodeCard />
        </motion.div>
      </motion.div>
    </section>
  );
};
