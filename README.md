# React Redux Ducks CLI

[EM CONSTRUÇÃO]

##Motivo
    Redux é maravilhoso. Mas é muito chato configurar; criar a store, reducer, actions, etc, é necessário uma volta enorme até ver o valor na tela. Pensando nisso, foi criado o Redux Ducks CLI. Como está no nome, é usado o pattern Ducks, caso você não conheça, veja um pouco sobre ele, https://github.com/erikras/ducks-modular-redux, mas resumindo, você define os types, reducers e actions em um único arquivo por State, evitando criar 3 arquivos para atingir o mesmo fim.

##Como funciona
O Redux-Ducks-CLI cria a estrutura pronta pra você usar o redux, apenas tendo o trabalho de importar a store e adicionar no provider da sua aplicação. Ele cria um diretório chamado Redux com os arquivos necessários, caso você queira alterar a ação de uma action, faça a alteração e adicione essa store na white list, para ela não ser alterada depois.

##Requisitos
Por enquanto o Redux-Ducks-CLI deve ser usado com o React, levando em conta que você tenha as dependências
`redux` e `react-redux`.

##Get Starter
Instale globalmente com
`npm install -g redux-ducks-cli`

Para iniciar a configuração inicial do Redux, execute no terminal
`redux-ducks init`

Para criar uma Store, execute
`redux-ducks <store> <default_value>`

Para criar um Action Creator:
`redux-ducks add <store> <action_creator_name> <change>`
change = concat/spread, decrement, increment
Estamos declarando para adicionar na Store a Action Creator. Caso essa Store não exista, ela será criada.

Para remover um Action Creator:
`redux-ducks remove <store> <action_creator_name>`

Para renomear uma Action Creator:
`redux-ducks rename <store> <action_creator_old_name> <action_creator_new_name>`
