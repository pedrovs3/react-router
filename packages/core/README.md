# @pedrovs3/react-router

![GitHub repo size](https://img.shields.io/github/repo-size/pedrovs3/react-router?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/pedrovs3/react-router?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/pedrovs3/react-router?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/pedrovs3/react-router?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/pedrovs3/react-router?style=for-the-badge)

<img src="banner_image.png" alt="Exemplo imagem">

> Esta é uma biblioteca de roteamento simples, leve e flexível para aplicações React. Ela fornece um conjunto de
componentes e hooks para lidar com o roteamento em sua aplicação, incluindo suporte para rotas dinâmicas com parâmetros
na URL.

## 📝 Índice

<!-- TOC -->
* [@pedrovs3/react-router](#pedrovs3react-router)
  * [📝 Índice](#-índice)
  * [Sobre o projeto](#sobre-o-projeto)
    * [Funcionalidades e recursos](#funcionalidades-e-recursos)
    * [Ajustes e melhorias](#ajustes-e-melhorias)
  * [💻 Pré-requisitos](#-pré-requisitos)
  * [🚀 Instalando @pedrovs3/react-router](#-instalando-pedrovs3react-router)
  * [☕ Usando @pedrovs3/react-router](#-usando-pedrovs3react-router)
  * [📫 Contribuindo](#-contribuindo)
  * [🤝 Colaboradores](#-colaboradores)
  * [😄 Seja um dos contribuidores](#-seja-um-dos-contribuidores)
  * [📝 Licença](#-licença)
<!-- TOC -->

## Sobre o projeto

Essa biblioteca foi criada para aprender mais sobre o funcionamento de um Router para React e como criar uma
biblioteca para React. Ela foi inspirada no React Router e no React Router Dom, porém, possui uma API mais simples e
flexível. Além disso, ela é mais leve e não possui dependencias externas.


### Funcionalidades e recursos

- [x] **API Simples**: Basta envolver a sua aplicação com o componente `Router` e usar o componente `Route` para definir as suas
  rotas.
- [x] **Rotas Dinâmicas**: Defina facilmente rotas com parâmetros de caminho, como "/user/:id". O componente `Route`
  extrairá automaticamente esses parâmetros e os passará para o seu componente.
- [x] **Query Params**: Acesse os query params de seus componentes com o hook `useRouterContext`.
- [x] **Página 404**: Defina uma página 404 personalizada que será exibida quando nenhuma rota corresponder.
- [x] **Guarded routes**: Defina rotas que só podem ser acessadas se o usuário estiver autenticado.
- [x] **Hooks**: Possui hooks para acessar o histórico de navegação e o contexto do roteador.
- [x] **Metadata**: Defina metadados para suas rotas, como, por exemplo, título da página e descrição para melhorar o `SEO`.
- [x] **Lazy loading**: Suporte para carregamento assíncrono de componentes.
- [x] **Suporte ao TypeScript**: Todos os componentes e hooks são totalmente tipados.
- [x] **Documentação**: Documentação completa com exemplos de uso.
- [x] **Testes**: Testes unitários e de integração.
- [x] **Tamanho**: Tamanho menor do que outras libs.
- [x] **Sem dependências**: Não possui dependências externas.
- [x] **Compatibilidade**: Compatível com React 16.8.0 ou superior.

### Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [x] Otimização do código
- [x] Melhorar a documentação
- [ ] Adicionar mais exemplos de uso
- [ ] Testar implementação com Next.js

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- Você instalou a versão mais recente de `<Node / npm / yarn>`
- Você tem uma máquina `<Windows / Linux / Mac>`.
- Você criou um projeto React com `<create-react-app / Vite>`.

## 🚀 Instalando @pedrovs3/react-router

Para instalar o react-router, siga estas etapas:

**NPM**:

```
npm i @pedrovs3/react-router
```

**YARN**:

```
yarn add @pedrovs3/react-router
```

**PNPM**:

```
pnpm add @pedrovs3/react-router
```

## ☕ Usando @pedrovs3/react-router

Para usar o router no seu projeto, siga estas etapas:

**1.** Importe o componente `Router` e o componente `Route`:

```typescriptreact
import { Router, Route } from '@pedrovs3/react-router';
```

**2.** Envolva a sua aplicação com o componente `Router`:

```typescriptreact
import { Router } from '@pedrovs3/react-router';

const App = () => (
  <div className="App">
    <Router>
      {/* Rotas */}
    </Router>
  </div>
);
```

**3.** Defina as suas rotas com o componente `Route`:

```typescriptreact
import { Router, Route } from '@pedrovs3/react-router';

const App = () => (
  <div className="App">
    <Router>
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/user/:id" component={User} />
    </Router>
  </div>
);
```

> Neste exemplo, `Home`, `About` e `User` são seus componentes. O componente `User` receberá uma prop `pathParams` com
o ‘id’ da URL.

**4.** Utilizando lazy loading:

**4.1** Importe `lazy` do React:

```typescriptreact
import { Router, Route } from '@pedrovs3/react-router';
import { lazy } from 'react';
```

**4.2** Importe o componente que você deseja carregar de forma assíncrona:

```typescriptreact
import { Router, Route } from '@pedrovs3/react-router';
import { lazy } from 'react';

// Example with lazy loading
const About = lazy(() => import('./About'));
```

**4.3** Por fim, passe o componente importado para o componente `Route`:

```typescriptreact
import { Router, Route } from '@pedrovs3/react-router';
import { lazy } from 'react';

// Example with lazy loading
const About = lazy(() => import('./About'));

const App = () => (
  <Router>
    <Route path="/home" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/user/:id" component={User} />
  </Router>
);
```
> O router cuida de todo o resto, como, por exemplo, carregar o componente de forma assíncrona e passar os parâmetros da
URL para o componente.

Adicione comandos de execução e exemplos que você acha que os usuários acharão úteis. Fornece uma referência de opções para pontos de bônus!

## 📫 Contribuindo

Para contribuir com o projeto, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça as suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin <nome_do_projeto> / <local>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="#" title="defina o titulo do link">
        <img src="https://avatars.githubusercontent.com/u/86010036" style="border-radius: 50%" width="100px;" alt="Foto do Pedro Vieira no GitHub"/><br>
        <sub>
          <b>Pedro Vieira</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## 😄 Seja um dos contribuidores

Quer fazer parte desse projeto? Clique [AQUI](https://github.com/pedrovs3/react-router/blob/main/CONTRIBUTING.md) e leia como contribuir.

## 📝 Licença

Esse projeto está sob licença MIT. Veja o arquivo [LICENÇA](https://github.com/pedrovs3/react-router/blob/main/LICENSE) para mais detalhes.

