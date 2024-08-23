Exercício: Criando um Contador

- Objetivo
    Criar um pequeno projeto Next.js onde você implementará um contador que permite incrementar e decrementar o valor. O estado do contador será gerenciado via Context API, e o valor será compartilhado entre diferentes componentes.

Requisitos
- Crie um contexto (CounterContext) que irá armazenar o valor atual do contador e as funções de incrementar e decrementar.

- Utilize o CounterContext.Provider para envolver componentes na árvore de componentes que precisam acessar o valor do contador.

- Crie três componentes:
    DisplayCounter.tsx: Mostra o valor atual do contador.
    IncrementButton.tsx: Botão que incrementa o valor.
    DecrementButton.tsx: Botão que decrementa o valor.
- Na página principal (page.tsx), exiba os três componentes e permita que o usuário interaja com o contador.

Dicas e Estrutura do Projeto
    Criando o Contexto (CounterContext.tsx):
    O contexto deve armazenar o valor do contador e as funções para incrementar e decrementar.

Criando os Componentes:
    DisplayCounter.tsx: Mostra o valor atual.
    IncrementButton.tsx: Botão que incrementa o valor.
    DecrementButton.tsx: Botão que decrementa o valor.

Utilizando o Contexto em page.tsx:
    Envolva os componentes com o CounterContext.Provider.