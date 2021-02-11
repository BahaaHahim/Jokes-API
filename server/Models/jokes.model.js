const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema(
    {
    
        setup: { 
            type: String,
            required: [true, "Setup is required"],
            minlength: [3, "setup should be at least 10 characters long "]
        },
    
        punchline: { 
            type: String,
            required: [true, "punchline is required"],
            minlength: [3, "punchline should be at least 3 characters long"]
        }
    }, 
    { timestamps: true }
);
        
    


const Joke = mongoose.model('joke', JokeSchema);

module.exports = Joke;