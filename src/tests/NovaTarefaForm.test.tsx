import { render, screen, fireEvent } from "@testing-library/react";
import { TarefasContext } from "@/context/TarefasContext";
import { Tarefa } from "@/types/Tarefa";
import NovaTarefaForm from "@/componentes/tarefaForm/TarefaForm";

describe("NovaTarefaForm", () => {
  const tarefas: Tarefa[] = [
    {
      id: 1,
      titulo: "Estudar Next",
      concluida: false,
    },
  ];

  it("deve renderizar o formulário corretamente", () => {
    render(
      <TarefasContext.Provider value={{ tarefas, setTarefas: jest.fn() }}>
        <NovaTarefaForm />
      </TarefasContext.Provider>
    );

    expect(screen.getByText(/atualmente existem 1 tarefas cadastradas/i)).toBeTruthy();
    expect(screen.getByText(/adicione uma nova tarefa/i)).toBeTruthy();
    expect(screen.getByPlaceholderText(/tarefa/i)).toBeTruthy();
    expect(screen.getByRole("button", { name: /enviar/i })).toBeTruthy();
  });

  it("deve adicionar uma nova tarefa ao enviar o formulário", () => {
    const setTarefas = jest.fn();

    render(
      <TarefasContext.Provider value={{ tarefas, setTarefas }}>
        <NovaTarefaForm />
      </TarefasContext.Provider>
    );

    const input = screen.getByPlaceholderText(/tarefa/i);
    const botao = screen.getByRole("button", { name: /enviar/i });

    fireEvent.change(input, {
      target: { value: "Fazer testes" },
    });

    fireEvent.click(botao);

    expect(setTarefas).toHaveBeenCalled();
  });

  it("não deve adicionar tarefa vazia", () => {
    const setTarefas = jest.fn();

    render(
      <TarefasContext.Provider value={{ tarefas, setTarefas }}>
        <NovaTarefaForm />
      </TarefasContext.Provider>
    );

    const botao = screen.getByRole("button", { name: /enviar/i });

    fireEvent.click(botao);

    expect(setTarefas).not.toHaveBeenCalled();
  });
});