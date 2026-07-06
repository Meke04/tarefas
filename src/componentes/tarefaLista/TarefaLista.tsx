"use client";

import { TarefasContext } from "@/context/TarefasContext";
import { useContext } from "react";

function ListaTarefas() {

    const context = useContext(TarefasContext);
    
        if(!context) return null;
    
        const { tarefas, setTarefas } = context;

    const removeTarefa = (id: number) => {
        setTarefas((prev) => prev.filter((tarefa) => tarefa.id !== id));
    }

    const alterarConcluida = (id: number, concluida: boolean) => {
        setTarefas((prev) => prev.map((tarefa) => tarefa.id === id ? { ...tarefa, concluida } : tarefa));
    };

    return (
        <section className="flex flex-col gap-3">
            {tarefas.map((tarefa) => (
                <article key={tarefa.id} className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 shadow-sm transition hover:bg-white hover:shadow-md">
                    <input
                        type="checkbox"
                        checked={tarefa.concluida}
                        onChange={(e) => alterarConcluida(tarefa.id, e.target.checked)}
                        className="h-5 w-5 cursor-pointer accent-black"
                    />
                    <h2 className={`flex-1 text-base font-medium ${tarefa.concluida ? "text-gray-400 line-through" : "text-gray-800"}`}
                    >
                        {tarefa.titulo}
                    </h2>
                    <button onClick={() => tarefa.id && removeTarefa(tarefa.id)} className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-black hover:text-white active:scale-95" >
                        Remover
                    </button>
                </article>
            ))}
        </section>
    );
}
export default ListaTarefas;