"use client";

import { Tarefa } from "@/types/Tarefa";
import { createContext, useEffect, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";

interface TarefasContextType {
    tarefas: Tarefa[];
    setTarefas: Dispatch<SetStateAction<Tarefa[]>>;
}

interface TarefasProviderProps {
    children: ReactNode;
}

export const TarefasContext = createContext<TarefasContextType | null>(null);

export function TarefasProvider({children}: TarefasProviderProps ){
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);

    useEffect(() => {
        const tarefasSalvas = localStorage.getItem("tarefas");

        if (tarefasSalvas) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setTarefas(JSON.parse(tarefasSalvas));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("tarefas", JSON.stringify(tarefas));
    }, [tarefas]);

    return (
        <TarefasContext.Provider value={{ tarefas, setTarefas }}>
            {children}
        </TarefasContext.Provider>
    );

}