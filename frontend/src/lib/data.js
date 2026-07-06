export const WHATSAPP = "https://wa.me/5541987869936";
export const INSTAGRAM = "https://www.instagram.com/stonkmind/";

export const waLink = (msg) =>
  `${WHATSAPP}?text=${encodeURIComponent(msg)}`;

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Planos", href: "#planos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export const STATS = [
  { value: 87, suffix: "+", label: "Sites entregues" },
  { value: 98, suffix: "%", label: "Clientes satisfeitos" },
  { value: 7, suffix: " dias", label: "Prazo médio de entrega" },
  { value: 4, suffix: " anos", label: "De experiência" },
];

export const SERVICES = [
  { icon: "Globe", title: "Sites Institucionais", desc: "Presença digital completa e profissional para sua empresa ser encontrada e gerar confiança." },
  { icon: "Rocket", title: "Landing Pages", desc: "Páginas de alta conversão focadas em transformar visitantes em clientes." },
  { icon: "ShoppingCart", title: "E-commerce", desc: "Lojas virtuais completas para você vender online 24 horas por dia." },
  { icon: "Wrench", title: "Manutenção e Suporte", desc: "Seu site sempre atualizado, seguro e funcionando — sem dor de cabeça." },
  { icon: "TrendingUp", title: "SEO Básico", desc: "Otimização para o Google, ajudando clientes a encontrarem seu negócio." },
  { icon: "Server", title: "Domínio e Hospedagem", desc: "Tudo incluso: registramos seu domínio e cuidamos da hospedagem por você." },
];

export const STEPS = [
  { num: "01", title: "Briefing", desc: "Entendemos seu negócio, objetivos e público em uma conversa rápida." },
  { num: "02", title: "Design", desc: "Criamos o layout sob medida, alinhado à identidade da sua marca." },
  { num: "03", title: "Desenvolvimento", desc: "Codificamos seu site com tecnologia moderna, rápida e responsiva." },
  { num: "04", title: "Entrega", desc: "Publicamos seu site no ar, com domínio próprio e tudo configurado." },
  { num: "05", title: "Suporte", desc: "Acompanhamos você depois da entrega com manutenção e melhorias." },
];

export const PORTFOLIO = [
  { title: "Clínica Vitalle", category: "Institucional", img: "https://images.unsplash.com/photo-1558655146-d09347e92766?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200" },
  { title: "Café Moinho", category: "Landing Page", img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200" },
  { title: "Loja Aurora", category: "E-commerce", img: "https://images.unsplash.com/photo-1527443195645-1133f7f28990?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200" },
  { title: "Advocacia Prado", category: "Institucional", img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200" },
  { title: "Studio Fit", category: "Landing Page", img: "https://images.unsplash.com/photo-1547658719-da2b51169166?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200" },
  { title: "Pet Amigo", category: "E-commerce", img: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200" },
];

export const PORTFOLIO_FILTERS = ["Todos", "Institucional", "Landing Page", "E-commerce"];

export const TESTIMONIALS = [
  {
    name: "Mariana Costa",
    role: "Clínica Vitalle",
    text: "Antes do site, dependíamos só de indicação. Hoje mais da metade dos nossos agendamentos vem pelo Google. A Scriptool entregou em uma semana, exatamente como prometido.",
    img: "https://customer-assets.emergentagent.com/job_scriptool-preview/artifacts/ab4d1vsq_images%20%284%29.jpeg",
  },
  {
    name: "Ricardo Almeida",
    role: "Café Moinho",
    text: "Eu não entendia nada de internet. Eles cuidaram de tudo: domínio, hospedagem, textos. O site ficou lindo e meus clientes elogiam direto.",
    img: "https://customer-assets.emergentagent.com/job_scriptool-preview/artifacts/yo0ihezo_CAIOBRAZ11.webp",
  },
  {
    name: "Fernanda Lima",
    role: "Loja Aurora",
    text: "Minha loja virtual triplicou as vendas em três meses. O suporte é rápido e sempre me ajudam quando preciso mudar alguma coisa.",
    img: "https://customer-assets.emergentagent.com/job_scriptool-preview/artifacts/gwqozn4q_images%20%283%29.jpeg",
  },
  {
    name: "Bruno Ferreira",
    role: "Studio Fit",
    text: "A landing page ficou pronta em poucos dias e o resultado foi imediato: agenda cheia de aulas experimentais. Trabalho muito profissional do início ao fim.",
    img: "https://customer-assets.emergentagent.com/job_scriptool-preview/artifacts/ndxh21ep_homem-elegante-e-confiante-com-tatuagens-posando-na-varanda-do-apartamento_74855-2711.avif",
  },
  {
    name: "Lucas Martins",
    role: "Pet Amigo",
    text: "Melhor investimento que fiz no meu negócio. O site carrega rápido, aparece no Google e a integração com o WhatsApp facilitou demais o atendimento.",
    img: "https://customer-assets.emergentagent.com/job_scriptool-preview/artifacts/fo63djma_photo-1695927621677-ec96e048dce2.avif",
  },
];

export const PROMO_END = new Date("2026-07-20T23:59:59-03:00");

export const PLANS = [
  {
    name: "Básico",
    price: "R$ 897",
    promoPrice: "R$ 448,50",
    desc: "Para quem precisa marcar presença online agora.",
    features: ["Site de até 3 seções", "Design responsivo", "Botão de WhatsApp", "Domínio e hospedagem (1 ano)", "Entrega em até 7 dias"],
    highlight: false,
  },
  {
    name: "Profissional",
    price: "R$ 1.497",
    promoPrice: "R$ 748,50",
    desc: "O mais escolhido por pequenas e médias empresas.",
    features: ["Site completo de até 7 seções", "Design personalizado", "SEO básico incluso", "Formulário + WhatsApp integrado", "Domínio e hospedagem (1 ano)", "1 mês de suporte grátis"],
    highlight: true,
  },
  {
    name: "Premium",
    price: "R$ 2.497",
    promoPrice: "R$ 1.248,50",
    desc: "Solução completa com loja virtual ou múltiplas páginas.",
    features: ["Site institucional + E-commerce", "Páginas ilimitadas", "SEO avançado", "Integrações personalizadas", "Domínio e hospedagem (1 ano)", "3 meses de suporte grátis"],
    highlight: false,
  },
];

export const FAQS = [
  { q: "Quanto tempo leva para meu site ficar pronto?", a: "Em média, 7 dias úteis para sites institucionais e landing pages. Projetos de e-commerce podem levar de 15 a 20 dias, dependendo da quantidade de produtos e integrações." },
  { q: "Preciso ter domínio ou hospedagem?", a: "Não! Todos os nossos planos incluem registro de domínio próprio (.com.br ou .com) e hospedagem pelo primeiro ano. Cuidamos de toda a parte técnica por você." },
  { q: "O site funciona bem no celular?", a: "Sim, 100%. Todos os sites são desenvolvidos com design responsivo, adaptando-se perfeitamente a celulares, tablets e computadores." },
  { q: "E se eu quiser mudar algo depois da entrega?", a: "Pequenos ajustes estão inclusos no período de suporte do seu plano. Depois disso, oferecemos planos de manutenção mensal acessíveis para manter seu site sempre atualizado." },
  { q: "Vou aparecer no Google?", a: "Sim. Todos os sites saem com SEO básico configurado (títulos, descrições, velocidade e estrutura otimizadas). No plano Premium, fazemos otimização avançada para melhorar ainda mais seu posicionamento." },
  { q: "Como funciona o pagamento?", a: "50% na aprovação do projeto e 50% na entrega. Aceitamos Pix, cartão de crédito (parcelado) e boleto. Sem taxas escondidas." },
];
