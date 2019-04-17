const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = mongoose.model('User');


module.exports = {
    async register(req, res){
        await User.create(req.body);   
        
        console.log(req.body);
        
        const users = await User.find();
        res.status(201).json(users);
    },

    async auth(req, res){
        const { email, password } = req.body;
        
        const user = await User.findOne({ email });

        if(user){
            const isValid = await bcrypt.compare(password, user.password);
            
            if( isValid ){
                const token = jwt.sign({ id: user.id }, 'MYHASH', {
                    expiresIn: 86400
                });

                return res.status(200).json({
                    token: token,
                    expiresIn: 86400
                });
            }else{
                return res.status(401).json({
                    message: 'Email ou senha errada !'
                });
            }

        }else{

        }
    },

    async me(req, res){
        const user = User.findById(req.params.id);
        console.log(user);
    }
}