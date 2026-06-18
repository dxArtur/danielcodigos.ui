import { motion } from "motion/react";
import { Section } from "./Section";
import { Briefcase } from "lucide-react";

const jobs = [
  {
    company: "Minsait, an Indra Company",
    role: "Desenvolvedor Full-stack Sênior · Engenheiro de Sistemas Legados",
    period: "Mar 2025 — Presente",
    bullets: [
      "Modernizou regras de negócio em ecossistema Jakarta EE de missão crítica, garantindo conformidade regulatória.",
      "Otimizou consultas em bancos relacionais de grande porte, eliminando gargalos de concorrência e débitos técnicos severos.",
      "Aplicou metodologias IFPUG e diretrizes SISP em auditoria funcional de contratos públicos e corporativos.",
      "Liderou prototipagem e alinhamento técnico com stakeholders, traduzindo requisitos em arquiteturas escaláveis.",
    ],
    stack: ["Java EE", "Jakarta EE", "Servlets", "JSP", "SQL", "IFPUG"],
  },
  {
    company: "Projeto Is.sues — Sistema de Gestão Corporativa",
    role: "Product Owner & Engenheiro Full-stack Principal",
    period: "Out 2023 — Pausado",
    bullets: [
      "Orquestrou ciclo de vida completo do produto e coordenou time de desenvolvimento, estruturando roadmap técnico.",
      "Projetou API RESTful robusta em Node.js + Express + TypeScript com alta concorrência e segurança.",
      "Desenvolveu app multiplataforma em React Native + Expo com sincronização eficiente offline/online.",
      "Estruturou camada de persistência com PostgreSQL + Prisma ORM otimizando tempo de resposta corporativo.",
    ],
    stack: ["Node.js", "TypeScript", "React Native", "Expo", "PostgreSQL", "Prisma"],
  },
  {
    company: "Projeto Traça — Ecossistema de Leitura Móvel",
    role: "Engenheiro de Software Mobile & Back-end",
    period: "Fev 2024 — Presente",
    bullets: [
      "Desenvolveu do zero app cross-platform (Android/iOS) em React Native + TypeScript + Expo.",
      "Arquitetou software com Design Patterns avançados, elevando escalabilidade e manutenibilidade.",
      "Implementou persistência com PostgreSQL + Prisma, minimizando latência de consultas transacionais.",
    ],
    stack: ["React Native", "TypeScript", "Expo", "PostgreSQL", "Prisma"],
  },
  {
    company: "Jspreadsheet",
    role: "Desenvolvedor Back-end & QA Engineer",
    period: "Jun 2023 — Ago 2023",
    bullets: [
      "Implementou recursos avançados de manipulação de dados em produto SaaS de planilhas web.",
      "Garantiu cobertura de código e eliminou regressões críticas com Jest e Mocha.",
    ],
    stack: ["JavaScript", "Node.js", "Jest", "Mocha"],
  },
];

export function Experience() {
  return (
    <Section
      id="experiencia"
      eyebrow="Experiência"
      title={<>Uma trajetória de <span className="text-gradient">entregas consistentes</span>.</>}
    >
      <div className="relative">
        <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent" />
        <div className="space-y-12">
          {jobs.map((j, i) => (
            <motion.div
              key={j.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                i % 2 === 0 ? "" : "md:[direction:rtl]"
              }`}
            >
              <div className="absolute left-0 md:left-1/2 -translate-x-1/2 top-1 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10">
                <Briefcase className="w-3.5 h-3.5 text-primary" />
              </div>
              <div
                className={`pl-12 md:pl-0 ${
                  i % 2 === 0 ? "md:text-right md:pr-12" : "md:[direction:ltr] md:col-start-2 md:pl-12"
                }`}
              >
                <div className="font-mono text-xs text-primary mb-1">{j.period}</div>
                <h3 className="font-display text-xl font-bold">{j.company}</h3>
                <p className="text-sm text-muted-foreground mt-1">{j.role}</p>
              </div>
              <div
                className={`pl-12 md:pl-0 mt-4 md:mt-0 ${
                  i % 2 === 0 ? "md:col-start-2" : "md:[direction:ltr] md:col-start-1 md:row-start-1 md:pr-12"
                }`}
              >
                <div className="card-elevated rounded-xl p-5 border border-border">
                  <ul className="space-y-2.5 text-sm text-muted-foreground">
                    {j.bullets.map((b) => (
                      <li key={b} className="flex gap-2.5 leading-relaxed">
                        <span className="text-primary mt-1.5 flex-shrink-0">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-border">
                    {j.stack.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[10px] px-2 py-1 rounded-md bg-surface border border-border text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
