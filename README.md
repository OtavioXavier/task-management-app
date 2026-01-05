# 📋 Task Management App

Um aplicativo moderno de gerenciamento de tarefas construído com Angular 21, permitindo que usuários organizem e acompanhem suas tarefas de forma intuitiva.

## 📖 Sobre o Projeto

Task Management App é uma aplicação web desenvolvida com Angular que oferece uma interface simples e eficiente para gerenciar tarefas pessoais. O sistema permite que múltiplos usuários organizem suas tarefas, definam prazos e acompanhem o progresso de seus afazeres.

### 🎯 Funcionalidades

- **👥 Gestão de Usuários**: Sistema de seleção de usuários com avatares personalizados
- **✅ Criação de Tarefas**: Adicione novas tarefas com título, descrição e data de vencimento
- **📝 Visualização de Tarefas**: Visualize todas as tarefas do usuário selecionado
- **🗑️ Exclusão de Tarefas**: Complete e remova tarefas concluídas
- **💾 Persistência Local**: As tarefas são salvas automaticamente no localStorage do navegador
- **🎨 Interface Moderna**: Design limpo e responsivo com componentes reutilizáveis

## 🚀 Tecnologias Utilizadas

- **Angular 21** - Framework front-end
- **TypeScript** - Linguagem de programação
- **RxJS** - Programação reativa
- **Angular Forms** - Gerenciamento de formulários
- **LocalStorage API** - Persistência de dados local

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior)
- **npm** (versão 9 ou superior) ou **yarn**

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd task-management-app
```

2. Instale as dependências:
```bash
npm install
```

## 💻 Executando o Projeto

### Servidor de Desenvolvimento

Para iniciar o servidor de desenvolvimento, execute:

```bash
npm start
```

ou

```bash
ng serve
```

A aplicação estará disponível em `http://localhost:4200/`. A aplicação recarregará automaticamente sempre que você modificar os arquivos de origem.

### Build para Produção

Para gerar uma build de produção otimizada, execute:

```bash
npm run build
```

Os arquivos compilados serão armazenados no diretório `dist/`.

### Modo Watch

Para compilar o projeto em modo watch durante o desenvolvimento:

```bash
npm run watch
```

## 🧪 Testes

Para executar os testes unitários:

```bash
npm test
```

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── header/              # Componente de cabeçalho
│   ├── user/                # Componente de usuário
│   ├── tasks/               # Módulo de tarefas
│   │   ├── task/           # Componente de tarefa individual
│   │   ├── new-task/       # Componente de criação de tarefa
│   │   └── tasks.service.ts # Serviço de gerenciamento de tarefas
│   ├── shared/              # Componentes compartilhados
│   │   └── card/           # Componente de card reutilizável
│   ├── dummy-users.ts      # Dados mockados de usuários
│   └── app.ts              # Componente raiz
├── index.html
└── main.ts
```

## 🎨 Componentes Principais

### TasksComponent
Componente principal que gerencia a lista de tarefas do usuário selecionado.

### Task
Componente que exibe uma tarefa individual com opção de exclusão.

### NewTaskComponent
Componente de formulário para criação de novas tarefas.

### UserComponent
Componente que exibe informações do usuário e permite seleção.

### TasksService
Serviço que gerencia a lógica de negócio das tarefas, incluindo persistência no localStorage.

## 💾 Armazenamento de Dados

O aplicativo utiliza o **localStorage** do navegador para persistir as tarefas. Os dados são salvos automaticamente sempre que uma tarefa é adicionada ou removida.

⚠️ **Nota**: Os dados são armazenados localmente no navegador e não são sincronizados entre dispositivos.

## 🔄 Fluxo de Dados

1. Usuário seleciona um usuário da lista
2. As tarefas do usuário selecionado são exibidas
3. Usuário pode criar novas tarefas ou excluir tarefas existentes
4. Alterações são salvas automaticamente no localStorage

## 🛠️ Desenvolvimento

### Gerando Novos Componentes

Para gerar um novo componente usando Angular CLI:

```bash
ng generate component nome-do-componente
```

Para ver uma lista completa de schematics disponíveis:

```bash
ng generate --help
```

## 📚 Recursos Adicionais

- [Documentação do Angular](https://angular.dev)
- [Angular CLI Overview](https://angular.dev/tools/cli)
- [Guia de TypeScript](https://www.typescriptlang.org/docs/)

## 👤 Autor

Desenvolvido como projeto de aprendizado e demonstração das funcionalidades do Angular, por **Otavio Xavier**

---

**Versão**: 0.0.0  
**Última atualização**: 2025
