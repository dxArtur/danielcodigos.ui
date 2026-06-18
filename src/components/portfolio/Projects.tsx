import { motion } from "motion/react";
import { Section } from "./Section";
import { ExternalLink, Layers, Smartphone, Building2, FileSpreadsheet } from "lucide-react";

const projects = [
  {
    icon: Building2,
    name: "Is.sues",
    role: "Product Owner & Engenheiro Principal",
    description:
      "Sistema de gestão corporativa concebido do zero para coordenar fluxos departamentais, com app mobile e API robusta.",
    challenge:
      "Modelar regras de negócio departamentais complexas e entregar app multiplataforma com sincronização confiável.",
    solution:
      "Arquitetura RESTful em Node.js + TypeScript, app React Native com Expo e persistência PostgreSQL via Prisma ORM.",
    impact: "Redução do retrabalho operacional e centralização de fluxos antes manuais.",
    tech: ["Node.js", "TypeScript", "React Native", "PostgreSQL", "Prisma"],
    highlight: true,
  },
  {
    icon: Smartphone,
    name: "Traça — Leitura Móvel",
    role: "Engenheiro Mobile & Back-end",
    description:
      "Ecossistema cross-platform de leitura, focado em consumo performático de APIs RESTful em larga escala.",
    challenge:
      "Garantir performance e manutenibilidade em uma base que precisa servir conteúdo de forma fluida em iOS e Android.",
    solution:
      "Arquitetura baseada em múltiplos Design Patterns avançados, isolando responsabilidades e elevando escalabilidade.",
    impact: "Latência mínima em consultas e código preparado para evoluir sem retrabalho.",
    tech: ["React Native", "Expo", "TypeScript", "PostgreSQL", "Prisma"],
  },
  {
    icon: Layers,
    name: "Modernização Legada — Minsait",
    role: "Engenheiro de Sistemas Legados",
    description:
      "Modernização e refinamento de regras críticas em ecossistema administrativo Jakarta EE de alta complexidade.",
    challenge:
      "Reduzir débitos técnicos severos sem comprometer estabilidade ou conformidade regulatória.",
    solution:
      "Refatoração incremental, otimização de queries e auditoria funcional via IFPUG/SISP.",
    impact: "Mais estabilidade, conformidade contratual e fundação preparada para evolução.",
    tech: ["Jakarta EE", "Servlets", "JSP", "SQL", "IFPUG"],
  },
  {
    icon: FileSpreadsheet,
    name: "Jspreadsheet",
    role: "Back-end & QA Engineer",
    description:
      "Recursos avançados de manipulação de dados em produto SaaS de planilhas web corporativas de alta performance.",
    challenge:
      "Sustentar deploys frequentes em uma base com regressões custosas para usuários corporativos.",
    solution:
      "Cobertura rigorosa de testes unitários com Jest e Mocha, ampliando confiança no pipeline.",
    impact: "Eliminação de regressões críticas e aceleração da entrega.",
    tech: ["JavaScript", "Node.js", "Jest", "Mocha"],
  },
];

export function Projects() {
  return (
    <Section
      id="projetos"
      eyebrow="Projetos em destaque"
      title={<>Soluções reais com <span className="text-gradient">impacto comprovado</span>.</>}
    >
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className={`card-elevated rounded-2xl p-7 border border-border hover:border-primary/40 transition-all relative overflow-hidden group ${
              p.highlight ? "md:col-span-2" : ""
            }`}
          >
            {p.highlight && (
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
            )}
            <div className="relative">
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                    <p.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold">{p.name}</h3>
                    <p className="text-xs text-muted-foreground">{p.role}</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.description}</p>

              <dl className="grid sm:grid-cols-3 gap-4 mb-5">
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-wider text-primary mb-1.5">
                    Desafio
                  </dt>
                  <dd className="text-xs text-muted-foreground leading-relaxed">{p.challenge}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-wider text-primary mb-1.5">
                    Solução
                  </dt>
                  <dd className="text-xs text-muted-foreground leading-relaxed">{p.solution}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-wider text-primary mb-1.5">
                    Impacto
                  </dt>
                  <dd className="text-xs text-muted-foreground leading-relaxed">{p.impact}</dd>
                </div>
              </dl>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] px-2 py-1 rounded-md bg-surface border border-border text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
