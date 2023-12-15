# @pedrovs3/react-router

Esta é uma biblioteca de roteamento simples, leve e flexível para aplicações React. Ela fornece um conjunto de componentes e hooks para lidar com o roteamento em sua aplicação, incluindo suporte para rotas dinâmicas com parâmetros de caminho.

## Recursos

- **API Simples**: Basta envolver sua aplicação com o componente `Router` e usar o componente `Route` para definir suas rotas.
- **Rotas Dinâmicas**: Defina facilmente rotas com parâmetros de caminho, como "/user/:id". O componente `Route` extrairá automaticamente esses parâmetros e os passará para o seu componente.
- **Query Params**: Acesse os query params de seus componentes com o hook `useRouterContext`.
- **Página 404**: Defina uma página 404 personalizada que será exibida quando nenhuma rota corresponder.
- **Suporte ao TypeScript**: Todos os componentes e hooks são totalmente tipados.

## Instalação

Você pode instalar esta biblioteca com npm:

```
npm install @pedrovs3/react-router
```

## Uso

Aqui está um exemplo básico de como usar esta biblioteca:

```typescriptreact
import { Router, Route } from '@pedrovs3/react-router';

const App = () => (
  <Router>
    <Route path="/home" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/user/:id" component={User} />
    <Route path="*" component={NotFound} />
  </Router>
);
```

Neste exemplo, `Home`, `About`, `User` e `NotFound` são seus componentes. O componente `User` receberá uma prop `pathParams` com o id da URL.
