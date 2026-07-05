import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { waLink } from "../lib/data";

const WhatsAppIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

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
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#2ECC96] text-[#0F1322] font-semibold px-8 py-4 rounded-full hover:scale-105 hover:shadow-[0_0_28px_rgba(46,204,150,0.45)] transition-all duration-300"
            >
              <WhatsAppIcon size={20} /> Quero meu site
            </a>
            <a
              href="#portfolio"
              data-testid="hero-portfolio-button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:border-[#2ECC96] hover:text-[#2ECC96] transition-all duration-300"
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
