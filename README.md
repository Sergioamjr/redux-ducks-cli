# React Redux Ducks CLI

[EM CONSTRUÇÃO]

## Motivo
Redux é simples, fácil e prático, mas muito trabalhoso de configurar; criar a Store, Reducer e Actions, etc. Para resolver isso, foi criado o Redux Ducks CLI, que te permite criar estados e Actions, podendo alterar seu valor padrão e comportamento que altera o estado, através de alguns comandos no terminal.

## Como funciona
O Redux-Ducks-CLI cria uma estrutura pronta pra você usar o redux, apenas tendo o trabalho de importar a store, adicionar no provider da sua aplicação e conectar o estado no seu componente.

## Requisitos
Por enquanto o Redux-Ducks-CLI deve ser usado com o React, levando em conta que você tenha as dependências.

```bash
react, redux e react-redux
```


## Get Starter
Instale globalmente:

```bash
npm install -g redux-ducks-cli
```

Para iniciar a configuração inicial do Redux:

```bash
redux-ducks --init
```
Isso irá criar a estrutura do redux.
```sh
└── redux/
    ├── index.js
    ├── reduxConfig.json
    ├── reducers/
    ├── store/
        ├── index.js
        ├── storeDefault.json
```

Para criar um estado na Store:

```bash
redux-ducks --state=User
```
Isso irá definir uma propriedade chamada User na Store como um Objeto. 

```js
{ User: {} }
```

Caso você queira alterar o valor padrão do estado:

```bash
redux-ducks --state=User --valueDefault=1
```

Para remover a configuração do estado e seu valor na Store:

```bash
redux-ducks --removeState=User
```

Para criar uma Action em um estado:

```bash
redux-ducks --state=User --action=SetUser
```
Isso irá criar a configuração do Ducks

```js
import Store from './../storeDefault.json';
const { Header } = Store;

const SETHEADER = 'SETHEADER';

export default function reducer(state = Header, action) {
    const { type, payload } = action
    switch (type) {
    case SETHEADER:
        return { ...state, ...payload };
        break;
    default:
    return state;
        break;
    }
}
export function actionsetHeader(payload) {
  return {
    type: SETHEADER,
    payload
  }
}
```

Para remover a Action de um estado:

```bash
redux-ducks --state=User --removeAction=SetUser
```


Para alterar o comportamento padrão da action:

```bash
redux-ducks --state=User --action=SetUser --change=state.concat[payload]
```
