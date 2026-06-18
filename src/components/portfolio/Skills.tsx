import { motion } from "motion/react";
import { Section } from "./Section";
import { Server, Layout, Database, Cloud, Layers, TestTube, Users } from "lucide-react";

const groups = [
  {
    icon: Server,
    title: "Back-end",
    items: ["Java", "Jakarta EE", "Spring Boot", "Quarkus", "Node.js", "Express", "Python", "Django"],
  },
  {
    icon: Layout,
    title: "Front-end & Mobile",
    items: ["React", "Next.js", "TypeScript", "React Native", "Expo", "Tailwind CSS", "Bootstrap"],
  },
  {
    icon: Database,
    title: "Bancos de Dados",
    items: ["PostgreSQL", "SQL Server", "MongoDB", "Prisma ORM", "Modelagem Relacional"],
  },
  {
    icon: Layers,
    title: "Arquitetura",
    items: ["Clean Code", "Design Patterns", "Arquitetura em Camadas", "API Design", "Modelagem de Dados", "Distribuída"],
  },
  {
    icon: TestTube,
    title: "Qualidade & DevOps",
    items: ["Jest", "Mocha", "QA Automation", "Fastlane (CI/CD)", "Git"],
  },
  {
    icon: Users,
    title: "Produto & Gestão",
    items: ["Product Owner", "Metodologias Ágeis", "IFPUG / SISP", "Análise de Requisitos", "Stakeholders"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Competências técnicas"
      title={<>Stack completa, <span className="text-gradient">do back ao produto</span>.</>}
      description="Mais que linguagens — uma caixa de ferramentas para resolver problemas reais de engenharia e negócio."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="card-elevated rounded-2xl p-6 border border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <g.icon className="w-4.5 h-4.5 text-primary" />
              </div>
              <h3 className="font-display font-semibold">{g.title}</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {g.items.map((it) => (
                <span
                  key={it}
                  className="text-xs px-2.5 py-1 rounded-md bg-surface border border-border hover:border-primary/40 hover:text-primary transition-colors cursor-default"
                >
                  {it}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
