# CRUD JS

Projeto simples em Node.js e Express criado para ensinar os primeiros conceitos de APIs HTTP.

A API usa um banco de dados em memoria, ou seja, os dados ficam salvos apenas enquanto o servidor esta rodando. Ao reiniciar o servidor, tudo volta para o estado inicial definido em `src/database/db.js`.

## Objetivo

Este repositorio serve como exercicio pratico para entender:

- Como criar uma API com Express
- Como receber dados pelo corpo da requisicao
- Como retornar respostas em JSON
- Como usar codigos HTTP como `200`, `201` e `400`
- Como simular um banco de dados usando um objeto JavaScript

## Como rodar

Instale as dependencias:

```bash
npm install
```

Inicie o servidor:

```bash
node src/index.js
```

Por padrao, a API roda em:

```text
http://localhost:3000
```

## Rotas atuais

### Verificar se a API esta rodando

```http
GET /
```

Resposta:

```text
API rodando
```

### Listar usuarios

```http
GET /usuarios
```

Retorna todos os usuarios cadastrados no banco em memoria.

### Criar usuario

```http
POST /usuarios
```

Body em JSON:

```json
{
  "nome": "Maria",
  "nascimento": "2007/03/20",
  "sexo": "F"
}
```

O campo `sexo` deve receber apenas `M` ou `F`.

## Estrutura do usuario

Cada usuario deve seguir este formato:

```json
{
  "id": 1,
  "nome": "Paulo",
  "nascimento": "2002/06/03",
  "sexo": "M"
}
```

## Desafios para o aluno

Agora que a API ja consegue listar e criar usuarios, implemente os proximos passos.

### Desafio 1: Buscar um usuario por ID

Crie uma rota para buscar apenas um usuario:

```http
GET /usuarios/:id
```

Exemplo:

```http
GET /usuarios/1
```

Se o usuario existir, retorne os dados dele. Se nao existir, retorne status `404`.

### Desafio 2: Atualizar um usuario

Crie uma rota para atualizar um usuario existente:

```http
PUT /usuarios/:id
```

Exemplo de body:

```json
{
  "nome": "Paulo Matos",
  "nascimento": "2002/06/03",
  "sexo": "M"
}
```

Regras sugeridas:

- Se o usuario nao existir, retorne `404`
- Se `sexo` for enviado, aceite apenas `M` ou `F`
- Retorne o usuario atualizado

### Desafio 3: Deletar um usuario

Crie uma rota para remover um usuario:

```http
DELETE /usuarios/:id
```

Regras sugeridas:

- Se o usuario nao existir, retorne `404`
- Se deletar com sucesso, retorne status `204`

### Desafio 4: Filtrar usuarios por maioridade

Adicione filtros na rota de listagem usando query params.

Exemplo:

```http
GET /usuarios?maiorDeIdade=true
```

Quando `maiorDeIdade=true`, a API deve retornar apenas usuarios com 18 anos ou mais.

Quando `maiorDeIdade=false`, a API deve retornar apenas usuarios menores de 18 anos.

Dica: como o banco esta em formato de objeto, talvez seja util transformar os usuarios em array antes de filtrar:

```js
const usuarios = Object.values(database)
```

Depois disso, calcule a idade a partir do campo `nascimento`.

## Ideias extras

- Validar se `nascimento` esta em um formato valido
- Criar filtros por `sexo`
- Criar uma rota para contar quantos usuarios existem
- Separar as rotas em outro arquivo
- Adicionar um script `npm start`
