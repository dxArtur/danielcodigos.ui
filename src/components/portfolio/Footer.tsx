export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <div>
          © {new Date().getFullYear()} Daniel Artur Jacobino Sales Bezerra. Todos os direitos reservados.
        </div>
        <div className="font-mono">
          Construído com React · TypeScript · Tailwind · Motion
        </div>
      </div>
    </footer>
  );
}
