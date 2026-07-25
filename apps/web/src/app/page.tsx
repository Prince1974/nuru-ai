import { Button } from "@nuru/ui";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">

      <h1 className="text-5xl font-bold">
        🌍 Nuru AI
      </h1>

      <p className="text-xl text-center max-w-xl">
        La plateforme d'agents IA conçue en Afrique
        pour connecter les talents, entreprises et
        développeurs au monde de l'intelligence artificielle.
      </p>

      <Button>
        Créer mon premier agent IA
      </Button>

    </main>
  );
}