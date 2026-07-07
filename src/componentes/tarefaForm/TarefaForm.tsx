"use client";

import { TarefasContext } from "@/context/TarefasContext";
import { useContadorDeTarefas } from "@/hooks/useContadorDeTarefas";
import { useContext, useState } from "react";

function NovaTarefaForm() {

    const context = useContext(TarefasContext);
    const [titulo, setTitulo] = useState("");

    const tarefas = context?.tarefas ?? [];
    const totalDeTarefas = useContadorDeTarefas(tarefas)

    if(!context) return null;

    const { setTarefas } = context;


    const adicionarTarefa: React.SubmitEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        if (titulo.trim() === "") return;

        const novo = {
            id: Date.now(),
            titulo: titulo,
            concluida: false,
        }
        setTarefas((prev) => [...prev, novo])
        setTitulo("");
    };



    return (
    <form onSubmit={ adicionarTarefa } className="mb-8 flex flex-col gap-5 rounded-2xl p-6">
        <p className="text-sm text-gray-500"> Atualmente existem{" "}
            <span className="font-bold text-black">
                {totalDeTarefas}
            </span>{" "}
            tarefas cadastradas
        </p>
        <h2 className="text-2xl font-bold text-gray-800">
            Adicione uma nova tarefa
        </h2>
        <div className="flex flex-col gap-3 sm:flex-row">
        <input
            type="text"
            placeholder="Digite uma tarefa..."
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className="flex-1 rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-800 outline-none transition focus:border-black"
        />

        <button
            type="submit"
            className="w-full rounded-xl bg-black px-5 py-3 font-semibold text-white transition hover:bg-gray-800 active:scale-95 sm:w-auto"
        >
            Enviar
        </button>
        </div>
    </form>
    );
}
export default NovaTarefaForm;