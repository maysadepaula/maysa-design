"use client";

import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle, XCircle, MessageCircle, PenTool, Box, Instagram, Linkedin, Mail, Zap, Smartphone, Layout, Github, Palette } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; 
import Lenis from 'lenis';

// --- Configurações de Animação ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  
  // Link do WhatsApp
  const whatsappLink = "https://wa.me/5561992764532?text=ol%C3%A1%20Maysa%2C%20gostaria%20de%20um%20or%C3%A7amento.";

  // Setup da Rolagem Suave
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // REMOVI A LINHA "smooth: true" DAQUI
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 1000], [0, 150]); 

  return (
    <main className="min-h-screen bg-[#000220] text-gray-200 selection:bg-tayo-green selection:text-black font-sans overflow-x-hidden">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/5 bg-[#000220]/90">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-bold text-2xl tracking-tighter text-white">
            Maysa<span className="text-tayo-green">.</span>
          </div>
          <Link href={whatsappLink} target="_blank" className="hidden md:flex items-center gap-2 bg-tayo-green/10 border border-tayo-green/50 px-6 py-2 rounded-full text-sm font-bold text-tayo-green hover:bg-tayo-green hover:text-black transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            Solicitar Orçamento <MessageCircle size={16} />
          </Link>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[80vh] bg-gradient-to-b from-tayo-blue/40 via-[#000220] to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} style={{ y: yHero }} className="flex flex-col items-center">
            
            <motion.div variants={fadeInUp} className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tayo-blue/20 border border-tayo-blue/30 text-blue-200 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-tayo-green animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest">Agenda Aberta 2025</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Não crio apenas sites. <br />
              Crio <span className="text-tayo-green font-extrabold">estratégias digitais.</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-blue-100/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              Sua empresa merece um posicionamento profissional. Transformo sua visão em um site exclusivo, rápido e pronto para vender.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center">
              <Link 
                href={whatsappLink} 
                target="_blank" 
                className="relative bg-[#0fa372] text-black px-10 py-5 rounded-full font-extrabold text-xl flex items-center justify-center gap-2
                           shadow-[0_0_60px_rgba(16,185,129,1)] scale-105 hover:scale-110 transition-transform"
              >
                <span className="absolute -inset-1 rounded-full border border-tayo-green opacity-50 animate-ping pointer-events-none"></span>
                Conversar sobre o projeto <MessageCircle size={24} strokeWidth={2.5} />
              </Link>
              
              <Link href="#projetos" className="px-8 py-4 rounded-full font-bold text-lg border border-white/20 text-white hover:bg-white/5 hover:border-white transition-all flex items-center justify-center gap-2">
                Ver Portfólio
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- MARQUEE --- */}
      <div className="w-full bg-tayo-blue border-y border-tayo-blue/30 overflow-hidden py-4 -rotate-1 scale-105 z-20 relative shadow-[0_0_40px_rgba(0,3,174,0.4)]">
        <div className="flex w-[200%] animate-marquee">
           {[...Array(4)].map((_, i) => (
             <div key={i} className="flex whitespace-nowrap gap-12 px-6 text-white font-black uppercase tracking-widest text-lg items-center">
                <span>Estratégia</span> <span className="text-tayo-green drop-shadow-lg">•</span>
                <span>Design Exclusivo</span> <span className="text-tayo-green drop-shadow-lg">•</span>
                <span>Alta Conversão</span> <span className="text-tayo-green drop-shadow-lg">•</span>
                <span>Autoridade</span> <span className="text-tayo-green drop-shadow-lg">•</span>
             </div>
           ))}
        </div>
      </div>

      {/* --- SOBRE MIM --- */}
      <section className="py-32 px-6 bg-[#000220] relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tayo-blue/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <div className="relative group">
               <div className="absolute -inset-4 bg-gradient-to-br from-tayo-green/20 to-tayo-blue/20 rounded-[2rem] blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
               <div className="relative rounded-[2rem] overflow-hidden border border-white/10 aspect-[3/4] bg-[#0A0C28]">
                  {/* FOTO PERFIL CORRIGIDA (.jpeg) */}
                  <Image 
                    src="/maysa1.jpeg" 
                    alt="Foto de Maysa de Paula"
                    fill
                    className="object-cover"
                  />
               </div>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Quem dará vida ao <br />
                <span className="text-tayo-blue">seu projeto?</span>
              </h2>
              
              <div className="space-y-6 text-lg leading-relaxed text-gray-400">
                <p className="text-white font-bold text-xl">
                  Olá, sou Maysa de Paula.
                </p>
                <p>
                  Mais do que escrever linhas de código, meu trabalho é traduzir a identidade do seu negócio para o mundo digital.
                </p>
                <p>
                  Com formação em <span className="text-tayo-green font-bold">Análise de Sistemas</span> e um olhar treinado pelo Design, eu crio sites que unem o melhor dos dois mundos: estética impecável e funcionalidade robusta.
                </p>
                <p>
                  Especialista em <span className="text-tayo-blue font-bold">Front-End</span>, garanto que seu projeto não será apenas uma vitrine bonita, mas uma ferramenta otimizada, rápida e que funciona perfeitamente em qualquer dispositivo (celular, tablet ou computador).
                </p>
                <p className="text-white">
                  Meu objetivo é simples: tirar sua ideia do papel e criar uma experiência online que seus clientes adorem navegar.
                </p>
              </div>

              <div className="mt-10 pt-10 border-t border-white/10 flex items-center gap-4">
                 <div className="h-1 w-12 bg-tayo-green rounded-full" />
                 <span className="text-sm font-bold tracking-widest uppercase text-tayo-green">Founder & Developer</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- COMPARATIVO --- */}
      <section className="py-32 px-6 bg-[#000220] relative">
         <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-tayo-blue/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Escolha o que sua história merece</h2>
            <p className="text-blue-100/70">Quando você confia em quem entende, recebe um projeto que honra sua trajetória.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* NÃO RECEBE */}
            <div className="bg-[#0A0205] border border-red-900/30 p-10 rounded-3xl relative overflow-hidden">
              <h3 className="text-2xl font-bold text-red-500 mb-8 flex items-center gap-3">
                <XCircle /> O que você NÃO recebe:
              </h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex gap-3 items-start"><span className="text-red-500/50 mt-1">✕</span> Um projeto clichê igual a tantos outros</li>
                <li className="flex gap-3 items-start"><span className="text-red-500/50 mt-1">✕</span> Um site genérico, feito às pressas</li>
                <li className="flex gap-3 items-start"><span className="text-red-500/50 mt-1">✕</span> Layouts engessados e sem vida</li>
                <li className="flex gap-3 items-start"><span className="text-red-500/50 mt-1">✕</span> Apenas um "site bonito" que não vende</li>
              </ul>
            </div>

            {/* RECEBE */}
            <div className="bg-[#010503] border border-tayo-green/30 p-10 rounded-3xl relative overflow-hidden shadow-[0_0_40px_rgba(16,185,129,0.05)]">
              <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
                <CheckCircle size={100} className="text-tayo-green" />
              </div>
              <h3 className="text-2xl font-bold text-tayo-green mb-8 flex items-center gap-3">
                <CheckCircle /> O que você RECEBE:
              </h3>
              <ul className="space-y-4 text-gray-200">
                <li className="flex gap-3 items-start"><span className="text-tayo-green mt-1">✓</span> Design que revela a essência da sua marca</li>
                <li className="flex gap-3 items-start"><span className="text-tayo-green mt-1">✓</span> Estratégia pensada para seus objetivos</li>
                <li className="flex gap-3 items-start"><span className="text-tayo-green mt-1">✓</span> Experiência digital que conquista clientes</li>
                <li className="flex gap-3 items-start"><span className="text-tayo-green mt-1">✓</span> Um site com a sua cara e que converte</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROCESSO --- */}
      <section className="py-32 px-6 bg-[#000220]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 md:flex justify-between items-end">
             <div>
                <span className="text-tayo-blue font-bold tracking-widest uppercase text-sm mb-2 block">Processo</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white">Sua jornada começa aqui</h2>
             </div>
             <p className="text-blue-100/70 max-w-md mt-6 md:mt-0">
               Um processo leve, humano e estratégico para transformar sua visão em realidade.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-tayo-blue/5 border border-tayo-blue/10 p-8 rounded-2xl hover:border-tayo-blue/40 hover:bg-tayo-blue/10 transition-all group">
               <div className="flex justify-between items-start mb-6">
                 <span className="text-5xl font-bold text-tayo-blue/20 transition-colors">01</span>
                 <div className="bg-tayo-blue/10 p-3 rounded-lg text-tayo-blue"><MessageCircle size={24}/></div>
               </div>
               <h3 className="text-xl font-bold text-white mb-3">Briefing & Conversa</h3>
               <p className="text-blue-200/60 text-sm leading-relaxed">
                 Tudo nasce de uma boa conversa. Ouço sua história e entendo seus objetivos para criar algo sob medida.
               </p>
            </div>

            <div className="bg-tayo-green/5 border border-tayo-green/10 p-8 rounded-2xl hover:border-tayo-green/40 hover:bg-tayo-green/10 transition-all group">
               <div className="flex justify-between items-start mb-6">
                 <span className="text-5xl font-bold text-tayo-green/20 transition-colors">02</span>
                 <div className="bg-tayo-green/10 p-3 rounded-lg text-tayo-green"><PenTool size={24}/></div>
               </div>
               <h3 className="text-xl font-bold text-white mb-3">Criação & Estratégia</h3>
               <p className="text-blue-200/60 text-sm leading-relaxed">
                 Da ideia à vida. Desenvolvo o layout e programo seu site com as melhores tecnologias do mercado.
               </p>
            </div>

            <div className="bg-purple-900/5 border border-purple-500/10 p-8 rounded-2xl hover:border-purple-500/40 hover:bg-purple-500/10 transition-all group">
               <div className="flex justify-between items-start mb-6">
                 <span className="text-5xl font-bold text-purple-500/20 transition-colors">03</span>
                 <div className="bg-purple-500/10 p-3 rounded-lg text-purple-400"><Box size={24}/></div>
               </div>
               <h3 className="text-xl font-bold text-white mb-3">Entrega Simplificada</h3>
               <p className="text-blue-200/60 text-sm leading-relaxed">
                 Site no ar, funcionando perfeitamente. Treinamento para uso e suporte para você não ficar na mão.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROJETOS --- */}
      <section id="projetos" className="py-32 px-6 bg-[#000115] relative">
         <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-tayo-green/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-20 text-center">Projetos <span className="text-tayo-blue">Exclusivos</span></h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* PROJETO 1: YABATAN (.png) */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-[2rem] border border-tayo-blue/20 aspect-[4/3] bg-[#000220] mb-6 group-hover:border-tayo-green/50 transition-colors shadow-lg">
                <Image 
                  src="/projeto1.png" 
                  alt="Yabatan - Casa de Criação"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-tayo-blue/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-500" />
                <div className="absolute bottom-6 right-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                  <span className="bg-tayo-green text-black w-12 h-12 rounded-full flex items-center justify-center shadow-lg"><ArrowUpRight size={24} /></span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white">Yabatan - Casa de Criação</h3>
              <p className="text-blue-200/60 mt-2">Site Institucional • Decoração de Eventos</p>
            </div>

            {/* PROJETO 2: LIVRARIA (.png) */}
            <div className="group cursor-pointer md:mt-20">
              <div className="relative overflow-hidden rounded-[2rem] border border-tayo-blue/20 aspect-[4/3] bg-[#000220] mb-6 group-hover:border-tayo-blue/50 transition-colors shadow-lg">
                <Image 
                  src="/projeto2.png" 
                  alt="Livraria dos Concursos"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-tayo-blue/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-500" />
                <div className="absolute bottom-6 right-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                  <span className="bg-tayo-blue text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg"><ArrowUpRight size={24} /></span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white">Livraria dos Concursos</h3>
              <p className="text-blue-200/60 mt-2">E-commerce • Venda de Apostilas</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- O QUE EU FAÇO --- */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#000115] to-[#000230]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-tayo-blue/5 border border-tayo-blue/10 p-10 rounded-[2rem] hover:border-tayo-blue/30 hover:bg-tayo-blue/10 transition-all">
              <Layout className="text-tayo-blue w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-2">Páginas de Vendas</h3>
              <p className="text-blue-200/60">Páginas únicas focadas em converter visitantes em compradores.</p>
            </div>
            <div className="bg-tayo-green/5 border border-tayo-green/10 p-10 rounded-[2rem] hover:border-tayo-green/30 hover:bg-tayo-green/10 transition-all">
              <Smartphone className="text-tayo-green w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-2">Perfeito no Celular</h3>
              <p className="text-blue-200/60">Seu site ajustado para funcionar em qualquer tamanho de tela.</p>
            </div>
            <div className="bg-purple-500/5 border border-purple-500/10 p-10 rounded-[2rem] hover:border-purple-500/30 hover:bg-purple-500/10 transition-all">
              <Zap className="text-purple-400 w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-2">Velocidade</h3>
              <p className="text-blue-200/60">Tecnologia moderna para seu site carregar instantaneamente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-20 text-center bg-[#000230] border-t border-tayo-blue/20 relative overflow-hidden">
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-tayo-blue/10 rounded-full blur-[100px] pointer-events-none" />
        
        {/* BOTÃO FOOTER */}
        <div className="mb-16 flex justify-center relative z-10">
           <Link 
                href={whatsappLink} 
                target="_blank" 
                className="relative bg-[#0fa372] text-black px-10 py-5 rounded-full font-extrabold text-xl flex items-center justify-center gap-2
                           shadow-[0_0_60px_rgba(16,185,129,1)] scale-105 hover:scale-110 transition-transform"
              >
                <span className="absolute -inset-1 rounded-full border border-tayo-green opacity-50 animate-ping pointer-events-none"></span>
                Conversar sobre o projeto <MessageCircle size={24} strokeWidth={2.5} />
              </Link>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 relative z-10">Vamos tirar sua ideia do papel?</h2>
        
        {/* LINKS SOCIAIS */}
        <div className="flex justify-center gap-6 mb-12 relative z-10">
            <Link href="https://www.behance.net/maysadepaula" target="_blank" className="p-4 bg-tayo-blue/10 rounded-full hover:bg-tayo-green hover:text-black transition-all" title="Behance"><Palette size={24}/></Link>
            <Link href="https://www.linkedin.com/in/maysadpaulas/" target="_blank" className="p-4 bg-tayo-blue/10 rounded-full hover:bg-tayo-blue hover:text-white transition-all" title="LinkedIn"><Linkedin size={24}/></Link>
            <Link href="https://github.com/maysadepaula" target="_blank" className="p-4 bg-tayo-blue/10 rounded-full hover:bg-white hover:text-black transition-all" title="GitHub"><Github size={24}/></Link>
            <Link href="mailto:maysa.dpaulas@gmail.com" target="_blank" className="p-4 bg-tayo-blue/10 rounded-full hover:bg-purple-500 hover:text-white transition-all" title="Email"><Mail size={24}/></Link>
        </div>
        
        <p className="text-blue-200/40 text-sm relative z-10">© 2025 Maysa Design. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}