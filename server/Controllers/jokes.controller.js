// import Joke from '../Models/jokes.model'
const Joke = require('../Models/jokes.model');


module.exports.createJoke = (request, response) => {
    Joke.create(request.body)
        .then(joke => response.json(joke))
        .catch(err => response.json(err));
}

module.exports.getAllJokes = (request, response) =>{
    Joke.find()
    .then(allTheJokes => response.json({ jokes: allTheJokes }))
    .catch(err => response.json({ message: "Something went wrong", error: err }));
    
}
module.exports.getOneJoke = (req, res) => {
	Joke.findOne({ _id: req.params.id })
		.then(oneJoke => res.json({ joke: oneJoke }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.randomJoke = (req, res) => {
    Joke.aggregate([{$sample: {size:1}}])
    .then(randJoke => res.json({joke: randJoke}))
    .catch(err => res.json({ message: "Something went wrong", error: err }));

};

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedJoke => res.json({ joke: updatedJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
.then(result => res.json({ result: result }))
.catch(err => res.json({ message: "Something went wrong", error: err }));
};