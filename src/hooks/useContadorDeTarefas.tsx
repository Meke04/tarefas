import { Tarefa } from "@/types/Tarefa";

export function useContadorDeTarefas(tarefas: Tarefa[]) {
    return tarefas.length;
}
