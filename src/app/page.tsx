import NovaTarefaForm from "@/componentes/tarefaForm/TarefaForm";
import ListaTarefas from "@/componentes/tarefaLista/TarefaLista";

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen items-center justify-center bg-gray-200 px-4">
      <section className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="mb-8 text-center text-4xl font-bold text-gray-800">Sua Lista de tarefas</h1>
        <NovaTarefaForm/>
        <ListaTarefas/>
      </section>
    </main>
    </>
  );
}

