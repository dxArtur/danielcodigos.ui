import { motion } from "motion/react";
import { Section } from "./Section";
import { GraduationCap, Award, Languages, Sparkles } from "lucide-react";

const education = [
  {
    school: "Instituto Federal da Paraíba (IFPB - CZ)",
    course: "Tecnologia em Análise e Desenvolvimento de Sistemas",
    period: "Jan 2021 — Out 2025",
    type: "Graduação Superior",
  },
  {
    school: "Instituto Federal da Paraíba (IFPB - CZ)",
    course: "Técnico em Informática",
    period: "Mai 2016 — Nov 2019",
    type: "Formação Integrada",
  },
];

const certs = [
  {
    title: "Bootcamp em Quality Assurance (QA)",
    issuer: "Instituto Atlântico Avanti",
    period: "Ago — Set 2023",
    status: "Concluído",
    icon: Award,
  },
  {
    title: "Desenvolvimento de Chatbots com IA em Python",
    issuer: "Capacitação interna",
    period: "Abr - Abr 2026",
    status: "Concluído",
    icon: Sparkles,
  },
  {
    title: "Front-end Patterns: Do Clone ao Código Limpo",
    issuer: "Capacitação interna",
    period: "Mai - Jun 2026",
    status: "Concluído",
    icon: Sparkles,
  },
];

export function EducationCerts() {
  return (
    <Section
      id="formacao"
      eyebrow="Formação & Certificações"
      title={<>Aprendizado <span className="text-gradient">contínuo e aplicado</span>.</>}
    >
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-5">
            <GraduationCap className="w-4 h-4 text-primary" />
            <h3 className="font-display font-semibold">Formação Acadêmica</h3>
          </div>
          <div className="space-y-3">
            {education.map((e, i) => (
              <motion.div
                key={e.course}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card-elevated rounded-xl p-5 border border-border"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="font-semibold leading-snug">{e.course}</div>
                    <div className="text-sm text-muted-foreground mt-1">{e.school}</div>
                  </div>
                  <span className="font-mono text-[10px] px-2 py-1 rounded-md bg-surface border border-border text-muted-foreground shrink-0">
                    {e.type}
                  </span>
                </div>
                <div className="font-mono text-xs text-primary mt-3">{e.period}</div>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-2 mt-10 mb-3">
            <Languages className="w-4 h-4 text-primary" />
            <h3 className="font-display font-semibold">Idiomas</h3>
          </div>
          <div className="card-elevated rounded-xl p-5 border border-border">
            <div className="flex items-center justify-between">
              <span className="font-medium">Inglês</span>
              <span className="text-sm text-muted-foreground">Profissional · Leitura, Escrita, Documentação</span>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-5">
            <Award className="w-4 h-4 text-primary" />
            <h3 className="font-display font-semibold">Certificações & Desenvolvimento</h3>
          </div>
          <div className="space-y-3">
            {certs.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card-elevated rounded-xl p-5 border border-border flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <c.icon className="w-4.5 h-4.5 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div className="font-semibold leading-snug">{c.title}</div>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded-full border border-primary/30 text-primary shrink-0">
                      {c.status}
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{c.issuer}</div>
                  <div className="font-mono text-[11px] text-primary/80 mt-2">{c.period}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
