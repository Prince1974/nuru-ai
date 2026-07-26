import { Globe } from "lucide-react";
import { agents } from "@nuru/ai-core";
import { AgentCard } from "@nuru/ui";


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100">

      <header className="flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-2 text-2xl font-bold text-gray-900">
          <Globe className="text-green-600" />
          Nuru AI
        </div>

        <button className="rounded-full bg-black px-5 py-2 text-white">
          Connexion
        </button>
      </header>


      <section className="mx-auto max-w-5xl px-8 py-20 text-center">

        <h1 className="text-5xl font-extrabold text-gray-900">
          L'intelligence artificielle
          <br />

          <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            africaine pour le monde 🌍
          </span>

        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-700">
          Créez, utilisez et partagez des agents IA spécialisés
          adaptés aux besoins des utilisateurs africains et internationaux.
        </p>


        <div className="mx-auto mt-10 max-w-3xl">
          <div className="rounded-2xl border bg-white p-4 shadow">
            <input
              className="
                w-full
                text-gray-900
                placeholder:text-gray-500
                outline-none
                bg-transparent
              "
              placeholder="Que voulez-vous accomplir aujourd'hui ?"
            />
          </div>
        </div>


        <h2 className="mt-20 mb-8 text-3xl font-bold text-gray-900">
          Nos agents IA
        </h2>


        <div className="grid gap-6 md:grid-cols-2">

          {agents.map((agent) => (

            <AgentCard
              key={agent.id}
              name={agent.name}
              description={agent.description}
              category={agent.category}
              capabilities={agent.capabilities}
            />

          ))}

        </div>

      </section>

    </main>
  );
}
