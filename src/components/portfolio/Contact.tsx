import { motion } from "motion/react";
import { Mail, Linkedin, Github, MessageCircle, ArrowUpRight, Phone } from "lucide-react";

const channels = [
  {
    icon: Mail,
    label: "E-mail",
    value: "daniel.arturjsb@gmail.com",
    href: "mailto:daniel.arturjsb@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/daniel-artur",
    href: "https://linkedin.com/in/daniel-artur",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/d.artur",
    href: "https://github.com/d.artur",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+55 (83) 99856-5702",
    href: "https://wa.me/5583998565702",
  },
];

export function Contact() {
  return (
    <section id="contato" className="relative py-24 scroll-mt-20 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-elevated rounded-3xl p-10 sm:p-14 border border-border text-center"
        >
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4">
            Vamos conversar
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight max-w-3xl mx-auto leading-tight">
            Vamos conversar sobre <span className="text-gradient">oportunidades, projetos ou inovação</span>{" "}
            tecnológica.
          </h2>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
            Aberto a posições em engenharia de software, liderança técnica e produto — remoto,
            híbrido ou presencial em João Pessoa.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto text-left">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl bg-surface/50 border border-border hover:border-primary/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <c.icon className="w-4.5 h-4.5 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs text-muted-foreground">{c.label}</div>
                  <div className="text-sm font-medium truncate">{c.value}</div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
              </a>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-2 text-xs text-muted-foreground hidden">
            <Phone className="w-3 h-3" />
            João Pessoa, PB · Brasil · Resposta em até 24h
          </div>
        </motion.div>
      </div>
    </section>
  );
}
