import { motion } from "motion/react";
import { Section } from "./Section";
import { TrendingUp, Shield, Database, GitBranch, Smartphone, FileCheck } from "lucide-react";

const items = [
  {
    icon: Shield,
    metric: "Missão crítica",
    title: "Modernização de sistema legado corporativo",
    text: "Refinou regras de negócio em ecossistema Jakarta EE de alta complexidade, garantindo estabilidade operacional e conformidade regulatória.",
  },
  {
    icon: Database,
    metric: "Alta concorrência",
    title: "Otimização de bases relacionais de grande porte",
    text: "Corrigiu gargalos de concorrência e mitigou débitos técnicos severos em queries de bancos relacionais críticos.",
  },
  {
    icon: GitBranch,
    metric: "Product Owner",
    title: "Liderança técnica do projeto Is.sues",
    text: "Orquestrou ciclo de vida completo, time de desenvolvimento, roadmap e versionamento de um sistema de gestão corporativa do zero.",
  },
  {
    icon: Smartphone,
    metric: "Cross-platform",
    title: "App Traça lançado para iOS e Android",
    text: "Arquitetou e desenvolveu app móvel performático com React Native + Expo, consumindo APIs RESTful em larga escala.",
  },
  {
    icon: FileCheck,
    metric: "IFPUG / SISP",
    title: "Auditoria funcional de software",
    text: "Aplicou métricas funcionais em contratos públicos, assegurando precisão em produtividade e conformidade contratual.",
  },
  {
    icon: TrendingUp,
    metric: "Zero regressões",
    title: "QA automatizado em produto SaaS",
    text: "Cobertura crítica com Jest e Mocha em planilhas web corporativas, eliminando regressões em deploys frequentes.",
  },
];

export function Achievements() {
  return (
    <Section
      id="conquistas"
      eyebrow="Principais conquistas"
      title={<>Resultados que <span className="text-gradient">moveram o ponteiro</span>.</>}
      description="Entregas reais em ambientes de produção com restrições severas de qualidade, conformidade e escala."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((it, i) => (
          <motion.article
            key={it.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="card-elevated rounded-2xl p-6 border border-border hover:border-primary/40 transition-colors group"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <it.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-primary/80 px-2 py-1 rounded-full border border-primary/30">
                {it.metric}
              </span>
            </div>
            <h3 className="font-display font-semibold text-lg leading-snug mb-2">{it.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{it.text}</p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
