# PRD — Scriptool (Site Institucional)

## Problem Statement Original
Criar um site institucional completo, extra moderno, para a marca Scriptool — empresa que cria sites profissionais para PMEs sem presença digital. Dark mode (navy #1A1F36 + mint #2ECC96), efeitos de scroll reveal, parallax no hero, contadores animados, micro-interações. Single-page com âncoras. WhatsApp oficial: https://wa.me/5541987869936. Instagram: https://www.instagram.com/stonkmind/. Conteúdo em pt-BR.

## Escolhas do Usuário
- Logo: gerada pelo agente (variantes light/dark criadas via image_generation_tool; header usa versão SVG recriada)
- Portfólio/depoimentos: fictícios/demonstrativos
- Preços demonstrativos: R$ 897 / R$ 1.497 / R$ 2.497
- Formulário de contato: redireciona ao WhatsApp com mensagem pré-preenchida (sem backend)

## Arquitetura
- Frontend-only: React 19 + Tailwind + Framer Motion + shadcn (Accordion)
- Sem backend customizado (template FastAPI intocado)
- Fontes: Sora (títulos), Manrope (corpo), JetBrains Mono (acentos de código)

## Implementado (Jun/2026)
- Header sticky glassmorphism com menu, Instagram e CTA WhatsApp; menu mobile hambúrguer
- Hero com parallax, code card flutuante animado, CTAs
- Quem Somos com 4 contadores animados (count-up on scroll)
- Serviços: 6 cards com hover lift
- Como Funciona: stepper 5 passos
- Portfólio: 6 projetos com filtros (Todos/Institucional/Landing Page/E-commerce) e animação layout
- Depoimentos: carrossel com prev/next/dots
- Planos: 3 cards, Profissional destacado com badge "Mais Popular", CTAs com mensagem pré-preenchida por plano
- FAQ: accordion com 6 perguntas
- CTA final + formulário → abre WhatsApp com mensagem montada (nome + empresa + necessidade)
- Footer completo + FAB WhatsApp com animação de pulso
- Scroll reveal (fade-in + slide-up) em todas as seções
- Logos geradas: light e dark (URLs no histórico da conversa)
- Testes: iteração 1 — 100% frontend aprovado

## Backlog Priorizado
- P1: Substituir portfólio/depoimentos fictícios por reais quando o usuário fornecer
- P1: SEO on-page (meta description, Open Graph, favicon com a logo)
- P2: Persistir leads do formulário em banco (MongoDB) além do redirect WhatsApp
- P2: Página de política de privacidade
- P2: Analytics (Google Analytics / Meta Pixel)

## Próximas Tarefas
1. Favicon + meta tags OG com a logo gerada
2. Conteúdo real de portfólio quando disponível
