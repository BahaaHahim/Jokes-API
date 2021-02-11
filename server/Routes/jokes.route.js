const JokesController = require('../controllers/jokes.controller');

module.exports = app => {
    app.post('/api/addNewJoke', JokesController.createJoke);
    app.get('/api/getAllJokes', JokesController.getAllJokes);
    app.get("/api/jokes/:id", JokesController.getOneJoke);
    app.get("api/jokes/random", JokesController.randomJoke);
    app.put('/api/updateJoke/:id' ,JokesController.updateJoke );
    app.delete('/api/deleteJoke/:id' ,JokesController.deleteJoke );


}   