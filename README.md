<div align="center">
  <img width="200" height="200" src="https://avatars.githubusercontent.com/u/117131140?s=400&u=b19290c748027d2dfd622fe0287c5956683e587a&v=4" alt="logo" />
</div>

<div align="center">
<h1>
[ Orange Evolution ]
</h1>
<p>
Aplicação desenvolvida durante o Hackathon do <a href="https://digital.fcamara.com.br/programadeformacao">programa de formação</a> da <a href="https://fcamara.com.br/">FCamara</a> pelo Squad 2.
</p>
</div>

## Tabela de conteúdos
1. [Informações Gerais](#informações-gerais)
1. [Tecnologias](#tecnologias)
1. [Requisitos](#requisitos)
1. [Instalação](#instalação)
1. [Requisições](#requisições)
1. [Documentação](#documentação)
1. [Como Contribuir](#como-contribuir)
1. [Licença](#licença)

## Informações Gerais
O objetivo desse projeto é criar o back-end da plataforma do [Orange Evolution](https://digital.fcamara.com.br/orange-evolution) onde o front-end se encontra nesse [repositório](https://github.com/Hackathon-Squad-2/front-end), com o objetivo de que as pessoas possam ter acesso de forma mais organizada a trilhas disponibilizadas, e que possam visualizar melhor sua evolução conforme consomem os conteúdos.

## Tecnologias
* [Express (NodeJS)](https://github.com/expressjs/express)
* [TypeScrypt](https://github.com/Microsoft/TypeScript)
* [Prisma](https://www.prisma.io/)
* [PostgreSQL](https://www.postgresql.org/docs/)
* [Docker](https://www.docker.com/)

> **Tests**: [Jest](https://jestjs.io/docs/en/getting-started) | [Supertest](https://github.com/visionmedia/supertest)

## Requisitos
* [NodeJS](https://nodejs.org/en/): Version 16.16.0
* [Yarn](https://classic.yarnpkg.com/lang/en/docs/install): Version 1.22.19

<br>

* Opcional:
  - [Docker](https://www.docker.com/): Version 20.10.17
  - [docker-compose](https://docs.docker.com/compose/)

## Instalação
Verifique que o seu sistema tenha as dependências listadas em [Requisitos](#requisitos), antes de iniciar a aplicação.

<br>

> Essa documentação assume que você está usando **yarn**, caso prefira usar npm, pnpm e afins ajuste os comandos.

> **Nota**: A aplicação foi desenvolvida com yarn, por isso recomendamos fortemente o uso do mesmo, os scripts listados no package.json todos assumem que você possui yarn instalado em sua máquina.

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

1. Copie o arquivo `.env.example` remova a extensão `.example` e preencha as seguintes informações:
   ```sh
   JWT_PASS=
   ```

  - `JWT_PASS` - É responsável pela criptografia do token de autenticação, é recomendado o uso de uma senha forte de preferencia transforme essa senha em algo como um sha1 ou md5 ou melhor.  
    
    > **Nota**: O valor abaixo é apenas um exemplo.
    ```
    JWT_PASS=d19acb5a620f18edb2aa65a780c645d632e29df4
    ```
- Caso **não** esteja usando **Docker**:

- ` DATABASE_URL=` - É responsável pela conexão com o banco de dados. 
    
    > **Nota**: O valor abaixo é apenas um exemplo.
    ```
    DATABASE_URL="postgres://usuario:senha@localhost/hackathon"
    ```
    > **Nota**: Como nesse exemplo não estamos utilizando o docker, não esqueça de comentar a linha que utiliza o docker, adicionando uma `#` ao inicio dela, dessa forma:
    ```
    #DATABASE_URL="postgres://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}"
    ```

- Caso esteja usando **Docker**:
    ```
    DB_HOST=
    DB_PORT=
    DB_USER=
    DB_PASS=
    DB_NAME=

    DATABASE_URL="postgres://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}"
    ```
    > **Nota**: O valor abaixo é apenas um exemplo.
    ```
    DB_HOST=localhost
    DB_PORT=5432
    DB_USER=usuario
    DB_PASS=senha
    DB_NAME=hackathon

    DATABASE_URL="postgres://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}"
    ```
    
* Após alterar os campos que iniciam com **DB** para os valores desejados, rode o comando:
	```sh
	docker-compose up -d
	```
  
* Não se esqueça de verificar se o container subiu corretamente.
  ```sh
  docker ps
  ```
  
  ```sh
  docker log -f <DB_NAME> 
  ```
* **Exemplo**:
  ```sh 
  docker logs -f backend_api
  ```

- Rode as migrations para atualizar o DB:
	```sh
	npx prisma migrate dev
	```
  > **Nota**: Como estamos utilizando o docker, pule para o passo **6**.

5. Crie a conexão com o DB:
	```sh
	npx prisma db push
	```

6. Inicie a aplicação:
    > **Nota**: Por padrão a aplicação roda na porta `3000`, caso queira altear adicionar ao `.env` o campo `PORT` com o valor desejado.
	```sh
	yarn dev
	```

## Requisições
Algumas requisições necessitam de permissão de administrador, para isso, certifique-se de rodar o comando:
  ```
  npx prisma db seed
  ```
  > **Nota**: O comando acima cria uma conta de administrador e adiciona a mesma ao seu DB.

Para usar a conta de administrador nas requisições, faça o login usando os seguintes dados:
  ```json
  {
    "email": "admin@squad2.com",
    "password": "squad2admin"
  }
  ```

## Documentação
Para acessar a documentação, após rodar a aplicão com `yarn dev` acesse: 
```
http://localhost:3000/api/docs
```

> **Nota**: O link acima considera que aplicação está rodando na porta padrão, caso tenha alterado mude na url.

Para testar as rotas que precisam de autenticação, faça o login e adicione o token ao `Authorize`, o botão se encontra no canto superior direito logo acima da documentação das rotas. 

> **Nota**: Em rotas que necessitam de permissão de administrador, faça o login com os dados fornecidos no tópico acima.

## Como Contribuir
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

## Licença
Esse projeto está sob licença **MIT**. Veja o arquivo [LICENÇA](LICENSE.md) para mais detalhes.
