require('dotenv').config();
const { Router } = require('express');
const verifyToken = require('./middleware/verifyToken');
const controllers = require('./controllers/Controllers');
const userController = require('./controllers/UserController');
const questionController = require('./controllers/QuestionController');
const matchConController = require('./controllers/MatchCotroller');
const waitingMatchController = require('./controllers/WaitingMatchController');

const routes = new Router();
const upload = require('./middleware/upload');

routes.get('/', (req, res) => {
    var status = {
        status: "Bem-vindo ao servidor Quester! 🚀"
    }
    res.send(JSON.stringify(status));
});

//User
routes.post('/signup', userController.createUser);
routes.post('/login', userController.findUser);
routes.post('/user', verifyToken, userController.getUser);
routes.put('/user', verifyToken, userController.chargeUser);
routes.put('/change-profile-photo/:id', verifyToken, upload.single('profilePhoto'), userController.changeProfilePhoto);
routes.get('/profile-photo/:id', verifyToken, userController.profilePhoto);
routes.delete('/user/:id', verifyToken, userController.deleteUser);

//Question
routes.post('/question', verifyToken, questionController.createQuestion);
routes.get('/question/:id', verifyToken, questionController.findQuestions);
routes.put('/question/', verifyToken, questionController.updateQuestion);
routes.post('/duplicate-question', verifyToken, questionController.duplicateQuestion);
routes.get('/question/find/:idquestion', verifyToken, questionController.getQuestionByID);
routes.delete('/question/:iduser/:idquestion', verifyToken, questionController.deleteQuestion);

//Match
routes.post('/match', verifyToken, matchConController.createMatch);
routes.put('/match/status', verifyToken, matchConController.changeStatus);
routes.put('/match/finished', verifyToken, matchConController.finishedMatch);
routes.get('/match/history/:id', verifyToken, matchConController.findMatchesHistory);
routes.get('/match/:idMatch', verifyToken, matchConController.findMatch);
routes.get('/match/enter/:pin', verifyToken, matchConController.enterMatch);
routes.get('/match/rank/:id', verifyToken, matchConController.getRank);

//Waiting Match
routes.post('/waiting-match', verifyToken, waitingMatchController.createWaitingMatch);
routes.get('/waiting-match/:id', verifyToken, waitingMatchController.getWaitingMatch);
routes.get('/waiting-match/history/:id', verifyToken, waitingMatchController.getAllWaitingMatches);
routes.post('/waiting-match/duplicate', verifyToken, waitingMatchController.duplicateWaitingMatch);
routes.put('/waiting-match/update', verifyToken, waitingMatchController.updateWaitingMatch); 
routes.delete('/waiting-match/:id/:idwaiting', verifyToken, waitingMatchController.deleteWaitingMatch);

//Default
routes.get('/findbyID/:id', verifyToken, controllers.findbyID);
routes.delete('/deletebyID/:id', verifyToken, controllers.deletebyID);
routes.delete('/delete-all-user', verifyToken, controllers.deleteAllUsers);
routes.delete('/delete-all-question', verifyToken, controllers.deleteAllQuestions);
routes.delete('/delete-all-match', verifyToken, controllers.deleteAllMatches);
routes.get('/find-all', verifyToken, controllers.findAllUser);
routes.get('/find-all-waiting-match', verifyToken, controllers.getAllWaitingMatches);
routes.get('/find-all-question', verifyToken, controllers.findAllQuestions);
routes.get('/find-all-match', verifyToken, controllers.findAllMatches);
routes.delete('/deletebyIDCreatedMatches/:iduser/:idmach', verifyToken, controllers.deleteCreatedMatch);

module.exports = routes;
