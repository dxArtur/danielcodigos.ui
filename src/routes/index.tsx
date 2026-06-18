import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Achievements } from "@/components/portfolio/Achievements";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { EducationCerts } from "@/components/portfolio/EducationCerts";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const TITLE = "Daniel Artur — Engenheiro de Software Full-stack & Product Owner";
const DESC =
  "Engenheiro Full-stack Sênior com 4+ anos modernizando ecossistemas legados de missão crítica. Especialista em Java/Jakarta EE, TypeScript, React e arquitetura de sistemas.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "Engenheiro de Software, Full-stack, Java, Jakarta EE, TypeScript, React, Node.js, Product Owner, Daniel Artur" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Daniel Artur Jacobino Sales Bezerra",
          jobTitle: "Engenheiro de Software Full-stack",
          email: "mailto:daniel.arturjsb@gmail.com",
          telephone: "+55-83-99856-5702",
          address: {
            "@type": "PostalAddress",
            addressLocality: "João Pessoa",
            addressRegion: "PB",
            addressCountry: "BR",
          },
          sameAs: [
            "https://linkedin.com/in/daniel-artur",
            "https://github.com/d.artur",
          ],
          knowsAbout: [
            "Java",
            "Jakarta EE",
            "TypeScript",
            "React",
            "React Native",
            "Node.js",
            "Spring Boot",
            "Quarkus",
            "PostgreSQL",
            "Software Architecture",
            "Product Ownership",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Achievements />
      <Experience />
      <Skills />
      <Projects />
      <EducationCerts />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
