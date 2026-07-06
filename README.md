# Lista de Tarefas - Next.js

## Descrição

Este projeto consiste em uma aplicação simples de gerenciamento de tarefas desenvolvida com **Next.js**, **TypeScript** e **React**. A aplicação permite visualizar uma lista de tarefas, adicionar novas tarefas, marcar tarefas como concluídas e removê-las da lista.

Além das funcionalidades da aplicação, foram desenvolvidos testes unitários utilizando **Jest** e **Testing Library**, garantindo o funcionamento dos principais componentes e do hook personalizado.

---

## Funcionalidades

* Exibição de uma lista de tarefas.
* Adição de novas tarefas através de um formulário controlado.
* Marcação de tarefas como concluídas.
* Remoção de tarefas da lista.
* Contador de tarefas utilizando um hook personalizado.
* Testes unitários dos principais componentes e funcionalidades.

---

## Tecnologias Utilizadas

* Next.js
* React
* TypeScript
* Context API
* Tailwind CSS
* Jest
* React Testing Library

---

## Estrutura do Projeto

```text
src/
├── app/
├── components/
├── context/
├── hooks/
├── tests/
├── types/
```

---

## Instalação

Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

Entre na pasta do projeto:

```bash
cd tarefas
```

Instale as dependências:

```bash
npm install
```

---

## Executando o Projeto

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em:

```text
http://localhost:3000
```

---

## Executando os Testes

Para executar todos os testes:

```bash
npm test
```

---

## Testes Implementados

Foram desenvolvidos testes para:

* Hook `useContadorDeTarefas`.
* Componente `NovaTarefaForm`.
* Componente `ListaTarefas`.

Os testes verificam:

* Renderização correta dos componentes.
* Funcionamento do hook personalizado.
* Adição de novas tarefas.
* Validação de formulário.
* Remoção de tarefas.
* Alteração do estado de conclusão das tarefas.

---

