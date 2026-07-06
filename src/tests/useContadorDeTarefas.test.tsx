import { renderHook } from "@testing-library/react";
import { useContadorDeTarefas } from "@/hooks/useContadorDeTarefas";

describe("useContadorDeTarefas", () => {
  it("deve retornar a quantidade de tarefas", () => {

    const tarefas = [
      {
        id: 1,
        titulo: "Estudar Next",
        concluida: false,
      },
      {
        id: 2,
        titulo: "Fazer testes",
        concluida: true,
      },
    ];

    const { result } = renderHook(() => useContadorDeTarefas(tarefas));

    expect(result.current).toBe(2);
  });
});