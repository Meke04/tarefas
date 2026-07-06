import { render, screen, fireEvent } from "@testing-library/react";
import { TarefasContext } from "@/context/TarefasContext";
import { Tarefa } from "@/types/Tarefa";
import ListaTarefas from "@/componentes/tarefaLista/TarefaLista";

describe("ListaTarefas", () => {
  const tarefas: Tarefa[] = [
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

  it("deve renderizar as tarefas", () => {
    render(
      <TarefasContext.Provider value={{ tarefas, setTarefas: jest.fn() }}>
        <ListaTarefas />
      </TarefasContext.Provider>
    );

    expect(screen.getByText("Estudar Next")).toBeTruthy();
    expect(screen.getByText("Fazer testes")).toBeTruthy();
  });

  it("deve remover uma tarefa ao clicar no botão remover", () => {
    const setTarefas = jest.fn();

    render(
      <TarefasContext.Provider value={{ tarefas, setTarefas }}>
        <ListaTarefas />
      </TarefasContext.Provider>
    );

    const botoesRemover = screen.getAllByText("Remover");

    fireEvent.click(botoesRemover[0]);

    expect(setTarefas).toHaveBeenCalled();
  });

  it("deve alterar o estado concluida ao clicar no checkbox", () => {
    const setTarefas = jest.fn();

    render(
      <TarefasContext.Provider value={{ tarefas, setTarefas }}>
        <ListaTarefas />
      </TarefasContext.Provider>
    );

    const checkboxes = screen.getAllByRole("checkbox");

    fireEvent.click(checkboxes[0]);

    expect(setTarefas).toHaveBeenCalled();
  });
});