const User = require('../models/User')
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');

module.exports = {
    login : async ({email, password}) => {
        try{
            const users = await User.findOne({email: email}).select('+password');
            if(!users) return users
            const passwordCompare = await bcrypt.compare(password, users.password);
            if(!passwordCompare) return passwordCompare
            const data = {
                id: users._id,
                name: users.name,
                email: users.email
            }
            const token = jwt.sign(data, process.env.JWT_SECRET);
            return token
        }catch(err){
            console.log(`Could not fetch users ${err}`)
            throw err;
        }
    },
    

    profile : async (userId) => {
        try{
            const users = await User.findById(userId);
            return users
        }catch(err){
            console.log(`Could not fetch users ${err}`)
        }
    },

}