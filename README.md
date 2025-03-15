# NeoTask - Gerenciador de Tarefas Avançado

Uma aplicação moderna para gerenciamento de tarefas, hábitos, objetivos e produtividade.

## Visão Geral

NeoTask é uma aplicação web completa construída com Next.js, React e Tailwind CSS que oferece funcionalidades avançadas de produtividade em uma interface elegante e moderna, com suporte a tema claro e escuro.

## Funcionalidades

- **Gerenciamento de Tarefas**
  - Criação, edição e exclusão de tarefas
  - Categorização por listas personalizadas
  - Priorização e definição de datas
  - Filtros e ordenação avançados
  - Tags para melhor organização

- **Visualização de Calendário**
  - Exibição de tarefas em formato de calendário
  - Navegação fácil entre dias, semanas e meses

- **Sistema de Pomodoro Avançado**
  - Timer configurável para técnica Pomodoro
  - Estatísticas de foco e produtividade
  - Rastreamento de interrupções
  - Configurações personalizáveis

- **Rastreador de Hábitos**
  - Criação e monitoramento de hábitos diários, semanais ou mensais
  - Visualização de progresso e estatísticas
  - Calendário de hábitos com histórico

- **Planejador de Objetivos**
  - Definição de metas com prazos e etapas
  - Visualização em formato Kanban
  - Priorização e acompanhamento de progresso

- **Automação de Fluxos de Trabalho**
  - Criação de regras para automatizar tarefas repetitivas
  - Gatilhos baseados em eventos, datas ou tags
  - Ações personalizáveis

- **Outros Recursos**
  - Pesquisa avançada
  - Gerenciamento de tags
  - Interface responsiva
  - Tema claro/escuro

## Visualizações de Tarefas

A aplicação oferece duas formas de visualizar suas tarefas:

1. **Visualização em Lista**: Exibe tarefas em formato de lista vertical, facilitando a visualização rápida e ordenação.
2. **Visualização Kanban**: Organiza tarefas em colunas baseadas em status, permitindo uma gestão visual do fluxo de trabalho.

É possível alternar entre essas visualizações usando os botões na parte superior da interface ou através dos atalhos de teclado:
- **Alt + L**: Alterna para a visualização em Lista
- **Alt + K**: Alterna para a visualização em Kanban

### Funcionalidades avançadas das visualizações:

- **Persistência de preferência**: O sistema lembra qual visualização você prefere usar
- **Filtros independentes**: Cada visualização mantém seus próprios filtros
- **Transições animadas**: Mudanças suaves entre visualizações com animações
- **Indicadores visuais**: Dicas informativas sobre quando usar cada visualização
- **Interface otimizada**: Cada visualização é projetada para seu caso de uso específico

## Tecnologias Utilizadas

- Next.js 14+
- React 18+
- TypeScript
- Tailwind CSS
- React Icons
- LocalStorage para persistência de dados

## Pré-requisitos

- Node.js 18.0 ou superior
- npm ou yarn

## Instalação

```bash
# Clonar o repositório
git clone https://github.com/guribeiroh/app-todo-nextjs.git
cd app-todo-nextjs

# Instalar dependências
npm install
# ou
yarn install

# Iniciar o servidor de desenvolvimento
npm run dev
# ou
yarn dev
```

A aplicação estará disponível em `http://localhost:3000`

## Estrutura do Projeto

```
app-todo-nextjs/
├── app/                  # Diretório principal da aplicação
│   ├── components/       # Componentes React
│   ├── context/          # Contextos React
│   ├── hooks/            # Hooks personalizados
│   ├── types/            # Definições de tipos TypeScript
│   ├── utils/            # Funções utilitárias
│   ├── page.tsx          # Página principal
│   └── layout.tsx        # Layout da aplicação
├── public/               # Arquivos estáticos
│   └── sounds/           # Sons para o timer Pomodoro
├── styles/               # Estilos globais
└── ...                   # Outros arquivos de configuração
```

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests com melhorias ou correções.

## Licença

Este projeto está licenciado sob a Licença MIT.