# GameRank

Aplicativo mobile desenvolvido com React Native, Expo e JavaScript para listagem de jogos a partir da RAWG API, com busca, filtro por genero e um sistema simples de recomendacao baseado em score.

## Objetivo

O projeto foi construído com foco academico para demonstrar:

- consumo de API publica em aplicativo mobile
- componentizacao em React Native
- separacao de responsabilidades
- processamento de dados alem da simples exibicao da API

O diferencial do app e a secao de recomendacao, que calcula um score para ranquear os jogos retornados.

## Tema do Aplicativo

O `GameRank` apresenta jogos populares e permite ao usuario:

- buscar jogos por nome
- filtrar jogos por genero
- visualizar nota e imagem de cada jogo
- consultar um Top 5 recomendado com base em calculo proprio

## Tecnologias Utilizadas

- React Native
- Expo
- JavaScript
- Axios
- RAWG API

## Arquitetura do Projeto

O projeto segue uma arquitetura simples, inspirada em um modelo academico enxuto, com separacao entre interface, logica e acesso a dados.

### Estrutura de pastas

```text
GameRank/
├── App.js
├── index.js
├── app.json
├── package.json
├── README.md
├── services/
│   └── Api.js
└── src/
    └── components/
        ├── Title/
        │   ├── index.js
        │   └── style.js
        ├── Filter/
        │   ├── index.js
        │   └── style.js
        ├── GameList/
        │   ├── index.js
        │   └── style.js
        ├── GameCard/
        │   ├── index.js
        │   └── style.js
        └── Recommendation/
            ├── index.js
            └── style.js
```

### Organizacao das responsabilidades

- `App.js`
  Monta apenas os componentes principais da tela.

- `services/Api.js`
  Centraliza todas as chamadas da RAWG API.

- `Title`
  Exibe o nome e o subtitulo do aplicativo.

- `Filter`
  Contem o campo de busca e os botoes de genero.

- `GameList`
  Controla o estado principal da tela, carrega os dados e renderiza a lista.

- `GameCard`
  Mostra os dados visuais de cada jogo.

- `Recommendation`
  Processa os jogos recebidos e monta o Top 5 recomendado.

## Consumo de API

O aplicativo utiliza a [RAWG API](https://rawg.io/apidocs) para obter os dados dos jogos.

As funcoes implementadas em `services/Api.js` sao:

- `getPopularGames()`
- `searchGames(name)`
- `getGamesByGenre(genre)`

Todas utilizam `axios`, `try/catch` e retornam apenas os dados necessarios para a interface:

- `id`
- `name`
- `image`
- `rating`
- `ratingsCount`
- `genres`

## Logica de Recomendacao

O projeto nao apenas exibe dados da API. Existe uma etapa de processamento para gerar recomendacoes.

### Formula de score

```js
score = (rating * 0.7) + (ratingsCount * 0.3)
```

### Como funciona

1. Os jogos retornados pela API sao recebidos pelo componente `Recommendation`.
2. Cada jogo recebe um score calculado.
3. A lista e ordenada do maior para o menor score.
4. Apenas os 5 melhores jogos sao exibidos.

Esse processamento cria um pequeno sistema de ranking proprio, atendendo ao requisito de recomendacao do projeto.

## Fluxo de Funcionamento

1. O aplicativo inicia.
2. A funcao `getPopularGames()` busca os jogos populares.
3. A lista principal e exibida.
4. O usuario pode buscar por nome.
5. O usuario pode filtrar por genero.
6. A lista de jogos e atualizada.
7. A secao `Recommendation` recalcula o Top 5 com base nos jogos atuais.

## Interface

A interface foi mantida propositalmente simples e clara, seguindo o padrao do projeto-base analisado.

Elementos utilizados:

- `View`
- `Text`
- `TextInput`
- `TouchableOpacity`
- `FlatList`
- `Image`

Caracteristicas visuais:

- tela unica
- layout centralizado
- secoes separadas por blocos
- visual limpo e objetivo

## Funcionalidades Implementadas

- listagem de jogos populares
- busca por nome
- filtro por genero
- exibicao de imagem, nome e nota
- recomendacao com calculo de score
- arquitetura componentizada
- separacao entre interface e servico de API

## Como Executar o Projeto

### Requisitos

- Node.js instalado
- npm instalado
- Expo Go no celular ou emulador Android

### Passo a passo

1. Acesse a pasta do projeto:

```cmd
cd "...\GameRank"
```

2. Instale as dependencias:

```cmd
npm install
```

3. Inicie o projeto:

```cmd
npx expo start --clear
```

4. Execute no dispositivo:

- escaneie o QR Code com o `Expo Go`
- ou pressione `a` no terminal para abrir no Android

## Chave da API

A chave da RAWG esta configurada no arquivo:

`services/Api.js`

Observacao:
para projetos reais, o ideal seria proteger essa chave com variaveis de ambiente. Neste caso, ela foi mantida diretamente no codigo por simplicidade academica.

## Pontos Fortes do Projeto

- arquitetura simples e facil de entender
- boa separacao de responsabilidades
- uso real de API externa
- processamento proprio dos dados
- aplicacao coerente com proposta academica de desenvolvimento mobile

## Possiveis Melhorias Futuras

- adicionar indicador visual de carregamento
- melhorar tratamento de erros na interface
- incluir mais filtros
- mostrar detalhes adicionais dos jogos
- mover configuracoes sensiveis para ambiente seguro

## Conclusao

O `GameRank` e um aplicativo mobile simples, funcional e bem estruturado, desenvolvido para demonstrar conceitos essenciais de React Native com Expo, consumo de API e processamento de dados. O projeto atende ao objetivo academico ao combinar listagem, filtro, busca e um sistema proprio de recomendacao baseado em score.
