import { motion } from "motion/react";
import { Section } from "./Section";
import { Code2, Target, Users, Zap } from "lucide-react";

const pillars = [
  {
    icon: Code2,
    title: "Excelência Técnica",
    text: "Clean Code, Design Patterns e arquiteturas em camadas aplicados em sistemas de missão crítica.",
  },
  {
    icon: Target,
    title: "Orientado a Resultados",
    text: "Tradução de regras de negócio complexas em soluções escaláveis com impacto mensurável.",
  },
  {
    icon: Users,
    title: "Liderança & Produto",
    text: "Atuação como Product Owner, conduzindo roadmap, time e alinhamento com stakeholders.",
  },
  {
    icon: Zap,
    title: "Modernização & Performance",
    text: "Refatoração de legados, otimização de queries e mitigação de débitos técnicos severos.",
  },
];

export function About() {
  return (
    <Section
      id="sobre"
      eyebrow="Sobre mim"
      title={
        <>
          Construo software que <span className="text-gradient">escala com o negócio</span>.
        </>
      }
    >
      <div className="grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3 space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            Sou <span className="text-foreground font-medium">Engenheiro de Software Full-stack</span> com
            mais de 4 anos de experiência sólida no desenvolvimento, modernização e manutenção de
            ecossistemas digitais complexos — de aplicações móveis e web a arquiteturas corporativas
            robustas em setores público e privado.
          </p>
          <p>
            Tenho histórico comprovado em <span className="text-foreground font-medium">mitigação de riscos</span>{" "}
            e <span className="text-foreground font-medium">redução de débitos técnicos</span> em sistemas
            legados críticos, aplicando padrões rigorosos de qualidade, governança de dados e otimização
            de performance.
          </p>
          <p>
            Domino stacks modernas (Java/Jakarta EE, TypeScript, React, React Native, Node.js) e atuo
            também como <span className="text-foreground font-medium">Product Owner</span>, conduzindo
            ciclo de vida de produto, roadmap técnico e alinhamento direto com stakeholders.
          </p>
        </div>
        <div className="lg:col-span-2 grid grid-cols-2 gap-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-elevated rounded-xl p-5 border border-border"
            >
              <p.icon className="w-5 h-5 text-primary mb-3" />
              <div className="font-semibold text-sm mb-1">{p.title}</div>
              <div className="text-xs text-muted-foreground leading-relaxed">{p.text}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
