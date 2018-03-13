# React Redux Ducks CLI

[EM CONSTRUÇÃO]

## Motivo
Redux é maravilhoso, fácil e prático. Mas muito chato de configurar; criar a Store, Reducer e Actions, etc, em cada arquivo separado, pra conseguir usar ele. Pensando nisso, foi criado o Redux Ducks CLI. Como está no nome, é usado o pattern Ducks, caso você não conheça, veja um pouco sobre ele, https://github.com/erikras/ducks-modular-redux, mas resumindo, você define os types, reducers e actions em um único arquivo por State, evitando criar 3 arquivos para atingir o mesmo fim.

## Como funciona
O Redux-Ducks-CLI cria a estrutura pronta pra você usar o redux, apenas tendo o trabalho de importar a store e adicionar no provider da sua aplicação. Ele cria um diretório chamado Redux com os arquivos necessários, caso você queira alterar a ação de uma action, faça a alteração e adicione essa store na white list, para ela não ser alterada depois.

## Requisitos
Por enquanto o Redux-Ducks-CLI deve ser usado com o React, levando em conta que você tenha as dependências.

```bash
redux e react-redux
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

Para criar um estado na Store:

```bash
redux-ducks  --state=<string> //ex. --state=User
```

Para remover um estado na Store:

```bash
redux-ducks --removeState=<string> //ex. --removeState=User
```

Para criar uma Action:

```bash
redux-ducks add --state=<string> --action=<string> //ex. --state=User --action=SetUser
```

Para remover a Action de um estado:

```bash
redux-ducks add --state=<string> --removeAction=<string> //ex. --state=User --removeAction=SetUser
```

Para definir o valor padrão do estado:

```bash
redux-ducks add --state=<string> --valueDefault=<string> //ex. --state=User --valueDefault=1
```

Para alterar o comportamento padrão da action:

```js
redux-ducks add --state=<string> --action=<string> --change=<string> //ex. --state=User --action=SetUser --change=state.concat[payload]
```
