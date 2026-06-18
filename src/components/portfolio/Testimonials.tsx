import { motion } from "motion/react";
import { Section } from "./Section";
import { Quote } from "lucide-react";

const placeholders = [
  { role: "Tech Lead", company: "Empresa parceira" },
  { role: "Engineering Manager", company: "Cliente corporativo" },
  { role: "Product Manager", company: "Stakeholder direto" },
];

export function Testimonials() {
  return (
    <div className="hidden">
      <Section
        id="depoimentos"
        eyebrow="Depoimentos"
        title={<>O que dizem sobre <span className="text-gradient">o trabalho entregue</span>.</>}
        description="Espaço dedicado a recomendações de colegas, gestores e clientes — em breve com depoimentos reais do LinkedIn."
      >
        <div className="grid md:grid-cols-3 gap-4">
          {placeholders.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-elevated rounded-2xl p-6 border border-dashed border-border"
            >
              <Quote className="w-6 h-6 text-primary/60 mb-4" />
              <p className="text-sm text-muted-foreground leading-relaxed italic">
                "Em breve — depoimento de um {p.role.toLowerCase()} sobre liderança técnica, capacidade
                de entrega e colaboração em produto."
              </p>
              <div className="mt-5 pt-5 border-t border-border">
                <div className="text-sm font-semibold">{p.role}</div>
                <div className="text-xs text-muted-foreground">{p.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
