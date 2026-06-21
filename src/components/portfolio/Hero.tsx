import { motion } from "motion/react";
import { Download, Github, Linkedin, Mail, ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface/50 text-xs text-muted-foreground mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          Disponível para novas oportunidades
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
        >
          Daniel Artur
          <br />
          <span className="text-gradient">Engenheiro de Software</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
        >
          Full-stack Software Engeneer · Product Owner · Especialista em{" "}
          <span className="text-foreground font-medium">Java/Jakarta EE</span>,{" "}
          <span className="text-foreground font-medium">TypeScript</span> e arquitetura de sistemas. 4+ anos
          modernizando ecossistemas legados de missão crítica e entregando produtos
          que escalam.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="/curriculo_daniel_artur.pdf"
            download="curriculo_daniel_artur.pdf"
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:shadow-[var(--shadow-glow)] transition-all"
          >
            <Download className="w-4 h-4" />
            Baixar CV
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="https://linkedin.com/in/daniel-artur"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border bg-surface/50 hover:bg-surface transition-colors font-medium"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
          <a
            href="https://github.com/d.artur"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border bg-surface/50 hover:bg-surface transition-colors font-medium"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border bg-surface/50 hover:bg-surface transition-colors font-medium"
          >
            <Mail className="w-4 h-4" /> Contato
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden mt-16 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-border bg-border"
        >
          {[
            { v: "4+", l: "Anos de experiência" },
            { v: "10+", l: "Projetos entregues" },
            { v: "1M+", l: "Transações processadas" },
            { v: "100%", l: "Foco em qualidade" },
          ].map((s) => (
            <div key={s.l} className="bg-background p-6">
              <div className="font-display text-3xl font-bold text-gradient">{s.v}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-10 inline-flex items-center gap-2 text-xs text-muted-foreground"
        >
          <Sparkles className="w-3 h-3 text-primary" />
          João Pessoa, PB · Inglês profissional · Remoto / Híbrido
        </motion.div>
      </div>
    </section>
  );
}
