const mongoose = require('mongoose');

const TweetSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true
    },
    retweets: {
        type: Number,
        default: 0 
    },
    likes: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose('Tweet', TweetSchema);