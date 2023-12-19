# @pedrovs3/react-router

Esta é uma biblioteca de roteamento simples, leve e flexível para aplicações React. Ela fornece um conjunto de
componentes e hooks para lidar com o roteamento em sua aplicação, incluindo suporte para rotas dinâmicas com parâmetros
na URL.

## Recursos

- **API Simples**: Basta envolver sua aplicação com o componente `Router` e usar o componente `Route` para definir suas
  rotas.
- **Rotas Dinâmicas**: Defina facilmente rotas com parâmetros de URL, como "/user/:id". O componente `Route`
  extrairá automaticamente esses parâmetros e os passará para o seu componente.
- **Query Params**: Acesse os query params de seus componentes com o hook `useRouterContext`.
- **Página 404**: Defina uma página 404 personalizada que será exibida quando nenhuma rota corresponder.
- **Guarded routes**: Defina rotas que só podem ser acessadas se o usuário estiver autenticado.
- **Hooks**: Possui hooks para acessar o histórico de navegação e o contexto do roteador.
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

Neste exemplo, `Home`, `About`, `User` e `NotFound` são seus componentes. O componente `User` receberá uma
prop `pathParams` com o id da URL.

## Por que usar esta biblioteca?

Esta biblioteca foi criada para ser uma alternativa simples e leve ao React Router. Ela não possui muitos recursos,
mas é fácil de usar e tem um tamanho menor do que o React Router.

---

## Autor

[Pedro Vieira](https://github.com/pedrovs3)

## Contribuindo

Se você quiser contribuir com este projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

MIT

