const mongoose = require('mongoose');

const User = mongoose.model('User');


module.exports = {
    async register(req, res){
        await User.create(req.body);   
        
        console.log(req.body);
        
        const users = await User.find();
        res.status(201).json(users);
    }
}