# @pedrovs3/react-router


<details>
    <summary>View in another language:</summary>

[![pt-BR](https://img.shields.io/badge/lang-pt--br-blue.svg)](https://github.com/pedrovs3/react-router/blob/main/README-PT.md)
</details>


![GitHub repo size](https://img.shields.io/github/repo-size/pedrovs3/react-router?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/pedrovs3/react-router?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/pedrovs3/react-router?style=for-the-badge)
![Github open issues](https://img.shields.io/github/issues/pedrovs3/react-router?style=for-the-badge)
![Github open pull requests](https://img.shields.io/github/issues-pr-raw/pedrovs3/react-router?style=for-the-badge)

<img src="https://logos-world.net/wp-content/uploads/2023/08/React-Symbol.png" alt="Exemplo imagem">

> This is a simple, lightweight, and flexible routing library for React applications. It provides a set of components and hooks to handle routing in your application, including support for dynamic routes with parameters in the URL.

## 📝 Summary

<!-- TOC -->
* [@pedrovs3/react-router](#pedrovs3react-router)
  * [📝 Summary](#-summary)
  * [About the project](#about-the-project)
    * [Features and resources](#features-and-resources)
    * [Adjustments and improvements](#adjustments-and-improvements)
  * [💻 Prerequisites](#-prerequisites)
  * [🚀 Installing @pedrovs3/react-router](#-installing-pedrovs3react-router)
  * [☕ Using @pedrovs3/react-router](#-using-pedrovs3react-router)
  * [📫 Contributing](#-contributing)
  * [🤝 Collaborators](#-collaborators)
  * [😄 Be one of the contributors](#-be-one-of-the-contributors)
  * [📝 License](#-license)
<!-- TOC -->

## About the project

This library was created to learn more about how a Router for React works and how to create a library for React. It was
inspired by React Router and React Router Dom, however, it has a simpler and more flexible API. In addition, it is
lighter and has no external dependencies.

### Features and resources

- [x] **Simple API**: Just wrap your application with the `Router` component and use the `Route` component to define your
  routes.
- [x] **Dynamic routes**: Easily define routes with path parameters, such as "/user/:id". The `Route` component will
  automatically extract these parameters and pass them to your component.
- [x] **Query Params**: Access the query params of your components with the `useRouterContext` hook.
- [x] **404 page**: Define a custom 404 page that will be displayed when no route matches.
- [x] **Guarded routes**: Define routes that can only be accessed if the user is authenticated.
- [x] **Hooks**: It has hooks to access the navigation history and the router context.
- [x] **Metadata**: Define metadata for your routes, such as page title and description to improve `SEO`.
- [x] **Lazy loading**: Support for asynchronous loading of components.
- [x] **TypeScript support**: All components and hooks are fully typed.
- [x] **Documentation**: Complete documentation with usage examples.
- [x] **Lightweight**: No external dependencies.
- [x] **Flexible**: You can use it with any React project, such as Next.js, Gatsby, etc.
- [x] **Tested**: All components and hooks are tested with Jest and React Testing Library.
- [x] **No external dependencies**: No external dependencies.

### Adjustments and improvements

The project is still under development and future updates will focus on the following tasks:

- [x] Add support for nested routes.
- [x] Add support for guarded routes.
- [ ] Add support for route transitions.
- [ ] Add support for route prefetching.
- [ ] Add support for route preloading.

## 💻 Prerequisites

Before starting, make sure you have met the following requirements:

- You have installed the latest version of `Node.js` and `npm` or `yarn` or `pnpm`.
- You have a `<Windows / Linux / Mac>` machine.
- You have created a React project with `<create-react-app / Vite>`.

## 🚀 Installing @pedrovs3/react-router

To install @pedrovs3/react-router, follow these steps:

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

## ☕ Using @pedrovs3/react-router

To use the router in your project, follow these steps:

**1.** Import the `Router` component and the `Route` component:

```typescriptreact
import { Router, Route } from '@pedrovs3/react-router';
```

**2.** Wrap your application with the `Router` component:

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

**3.** Define your routes with the `Route` component:

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

> In the example above, the `Home` component will be rendered when the user accesses the `/home` route, the `About`

**4.** Using lazy loading:

**4.1** Import the `lazy` function from React:

```typescriptreact
import { Router, Route } from '@pedrovs3/react-router';
import { lazy } from 'react';
```

**4.2** Import the component you want to load asynchronously:

```typescriptreact
import { Router, Route } from '@pedrovs3/react-router';
import { lazy } from 'react';

// Example with lazy loading
const About = lazy(() => import('./About'));
```

**4.3** Finally, pass the imported component to the `Route` component:

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
> Router takes care of loading the component asynchronously and rendering it when the user accesses the route.

## 📫 Contributing

To contribute to @pedrovs3/react-router, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and confirm them: `git commit -m '<commit_message>'`
4. Send to the original branch: `git push origin <project_name> / <local>`

Alternatively, consult the GitHub documentation on [how to create a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## 🤝 Collaborators

We thank the following developers who contributed:

<table>
  <tr>
    <td>
      <a href="https://github.com/pedrovs3" title="Perfil do colaborador">
        <img src="https://avatars.githubusercontent.com/u/86010036" style="border-radius: 50%" width="100px;" alt="Foto do Pedro Vieira no GitHub"/><br>
        <sub>
          <b>Pedro Vieira</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## 😄 Be one of the contributors

Want to be part of this project? Click [HERE](CONTRIBUTING.md) and read how to contribute.

## 📝 License

This project is under license. See the [LICENSE](LICENSE) file for more details.

[⬆ Back to top](#pedrovs3react-router)<br>
