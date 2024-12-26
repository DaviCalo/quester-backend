![Logo-Quester](https://github.com/user-attachments/assets/ca7f3b26-62f3-47ce-ac13-0838167d2d74)

<h4>
<p>Summary:</p>
 <a href="#about"><p>1. About</p></a> 
 <a href="#prerequisite"><p>2. Prerequisite</p></a>
 <a href="#how-to-run"><p>3. How to Run</p></a>
</h4>

<a name="about"></a>
## :computer: About

The backend of a web application called Quester, which allows users to create games by creating questions and answers to test the knowledge of other users. An intuitive, secure, fast system adapted to the needs of students and teachers, providing satisfactory learning and assessment experiences. Built using Node.js and MongoDB.

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

Current Status: 🟡 In Development

<a name="prerequisite"></a>
## 📋 Prerequisite

- Node.js
- MongoDB URI

<a name="how-to-run"></a>
## :grey_question: How to Run
### Cloning the Repository

```shell
git clone https://github.com/DaviCalo/quester-backend.git
```

### Starting the Backend Server

Create a `.env` file in the root directory and add the following environment variables:

```env
PORT=3000
MONGO_DB_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
```

Open the command line in the project root and enter the command:

```shell
npm install
npm run start
```
