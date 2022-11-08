<div align="center">
  <img width="200" height="200" src="https://avatars.githubusercontent.com/u/117131140?s=400&u=b19290c748027d2dfd622fe0287c5956683e587a&v=4" alt="logo" />
</div>

<div align="center">
<h1>
[ Orange Evolution ]
</h1>
<p>
Aplicação foi desenvolvida durante o Hackathon do <a href="https://digital.fcamara.com.br/programadeformacao">programa de formação</a> da <a href="https://fcamara.com.br/">FCamara</a> pelo Squad 2.
</p>
</div>

## Table of Contents
1. [General Info](#general-info)
1. [Technologies](#technologies)
1. [Prerequisites](#prerequisites)
1. [Installation](#installation)
1. [Collaboration](#collaboration)
1. [License](#license)

## General info
O objetivo desse projeto é criar o back-end da plataforma do [Orange Evolution](https://digital.fcamara.com.br/orange-evolution) onde o front-end se encontra nesse [repositório](https://github.com/Hackathon-Squad-2/front-end), com o objetivo de que as pessoas possam ter acesso de forma mais organizada a trilhas disponibilizadas, e que possam visualizar melhor sua evolução conforme consomem os conteúdos.

## Technologies
* [Express (NodeJS)](https://github.com/expressjs/express)
* [TypeScrypt](https://github.com/Microsoft/TypeScript)
* [Prisma](https://www.prisma.io/)
* [PostgreSQL](https://www.postgresql.org/docs/)
* [Docker](https://www.docker.com/)

> **Tests**: [Jest](https://jestjs.io/docs/en/getting-started) [Supertest](https://github.com/visionmedia/supertest)

## Prerequisites
* [NodeJS](https://nodejs.org/en/): Version 16.16.0
* [Yarn](https://classic.yarnpkg.com/lang/en/docs/install): Version 1.22.19

<br>

* Opcional:
  - [Docker](https://www.docker.com/): Version 20.10.17
  - [docker-compose](https://docs.docker.com/compose/)

## Installation
Verifique que o seu sistema tenha as dependencias listadas em [Prerequisites](#prerequisites), antes de iniciar a aplicação.

<br>

> Essa documentação assume que você está usando **yarn**, caso prefira usar npm, pnpm e afins ajuste os comandos.

**Nota**: A aplicação foi desenvolvida com yarn, por isso recomendamos fortemente o uso do mesmo, os scripts listados no package.json todos assumem que você está possui yarn instalado em sua maquina.

<br>

1. Clone o projeto:
   ```sh
   git clone https://github.com/Hackathon-Squad-2/back-end.git
   ```
1. Acesse a pasta do projeto:
	```sh
	cd back-end
	```
1. Instale as dependências:
   ```sh
   yarn
   ```
1. Crie um arquivo **.env** na raiz do projeto e preencha as seguintes informações:
   ```
   JWT_PASS=
   DATABASE_URL=
   ```

> **JWT_PASS** É resposavel pela criptografia do token de autenticação, é recomendado o uso de uma senha forte de preferencia transforme essa senha em algo como um sha1 ou md5 ou melhor.
>
> **DATABASE_URL** É responsavel pela conexão com o banco de dados, a string tem o seguinte formato:
>
> "postgres://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}"
>
> Preencha com os respectivos valores da sua conexão com o banco de dados.

**Nota**: os campos com **${}** devem ser substituidos pelo respectivo valor, como por exemplo:
```
"postgres://usuario:senha@localhost/hackathon"
```

- Caso prefira usar **Docker** para o banco de dados, preencha o **.env** da seguinte forma:
   ```
   DB_HOST=
   DB_PORT=
   DB_USER=
   DB_PASS=
   DB_NAME=

   DATABASE_URL="postgres://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}"
   ```
Alterando os campos que iniciam com **DB** para os valores desejados, e depois rode:
	```sh
	docker-compose up -d
	```
Não se esqueça de verificar se o container subiu corretamente para isso usar os comandos 
	```sh
	docker ps
	docker logs -f <DB_NAME>
	```
> O comando **docker ps** mostra todos os container rodando no momento, certifique-se que o nome escolhido em ${DB_NAME} está presente e rodando
>
> O comando **docker logs -f <DB_NAME>** mostra os logs de um certo container, não se esqueça de substituir o <DB_NAME> pelo nome escolhido no **.env**
> 
> **Exemplo**:
> 	docker logs -f hackathon

- Rode as migrations:
	```sh
	yarn prisma migrate dev
	```

5. Inicie a aplicação:
	```sh
	yarn dev
	```

Nota: Por padrão a aplicação roda na porta **3000**, caso prefira outra porta adicione uma linha no **.env** passando **PORT**, exemplo: **PORT=3001**.

## Collaboration
Para contribuir com o projeto, siga estas etapas:

1. Faça um **fork** deste repositório.
2. Crie um branch: `git checkout -b <feature/<nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m 'feat(scope): <mensagem_commit>'`
4. Envie para o branch original: `git push origin feature/<nome_branch>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

> Neste projeto nos seguidos o padrão de **git flow** e usamos commits semanticos, caso tenha duvidas sobre esses tópicos leia os links abaixo.

<br>

<div align="center">
[
<span>
<a href="https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow">Git Flow</a>
</span>
|
<span>
<a href="https://sparkbox.com/foundry/semantic_commit_messages">Commit Semantico</a>
</span>
]
</div>

## License
Esse projeto está sob licença **MIT**. Veja o arquivo [LICENÇA](LICENSE.md) para mais detalhes.
