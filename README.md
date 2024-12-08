![Logo-Quester](https://github.com/user-attachments/assets/ca7f3b26-62f3-47ce-ac13-0838167d2d74)

<h4>
<p>Sumário:</p>
 <a href="#sobre"><p>1. Sobre</p></a> 
 <a href="#pre-requisito"><p>2. Pré-requisito</p></a>
 <a href="#como-rodar"><p>3. Como rodar</p></a>
</h4>

<a name="sobre"></a>
## :computer: Sobre

O backend de uma aplicação web chamada Quester, que permite que usuários criem partidas, criando perguntas e respostas para testar os conhecimentos de outros usuários. Um sistema intuitivo, seguro, rápido e adaptado às necessidades dos alunos e professores, proporcionando experiências de aprendizado e avaliação satisfatórias. Utilizando Node.js e mongoDB.

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

<a name="como-rodar"></a>
## :grey_question: Como rodar
### Clonando o repositório

```shell
git clone https://github.com/DaviCalo/quester-backend.git
```

<a name="pre-requisito"></a>
### Pré-requisito

- Node.js

### Ligando o servidor Backend

Crie um arquivo .env no diretório raiz e adicione as seguintes variáveis ​​de ambiente:

```env
PORT=3000
MONGO_DB_URI=your-mongodb-uri
```

Abra a linha de comando na raiz do projeto e digite o comando.

```shell
npm install
npm run start
```