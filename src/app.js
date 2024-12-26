require('dotenv').config();
const express = require('express');
const connectToDatabase = require('./config/db.js');
const cors = require('cors');

connectToDatabase();
const app = express();
const routes = require('./routes.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization']
}));

app.use(routes);

app.listen(process.env.PORT, () => {
    console.log(`Servidor na porta ${process.env.PORT}`);
});
