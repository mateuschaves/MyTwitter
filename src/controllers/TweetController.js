const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports = {

    async tweet(req, res){
        const id = req.userId;
        const user = await User.findById(id);
        user.tweets.push(req.body);
        await user.save();
        return res.status(201).json(user.tweets);
    },

    async like(req, res){
        const id = req.userId;
        const user = await User.findById(id);

        user.tweets.map( tweet => {
            if( req.params.id == tweet._id )
                tweet.likes++;
        });

        await user.save();

        return res.status(200).json(user.tweets);
    },

    async like(req, res){
        const id = req.userId;

        const user = await User.findById(id);
        user.tweets.id(req.params.id).likes++;

        await user.save();
        
        return res.status(200).json(user.tweets.id(req.params.id));
    },

    async retweet(req, res){
        const id = req.userId;
        const user = await User.findById(id);

        user.tweets.id(req.params.id).retweets++;

        await user.save();

        return res.status(200).json(user.tweets.id(req.params.id));

    }

}