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
            const token = jwt.sign(data, );
            return token
        }catch(err){
            console.log(`Could not fetch users ${err}`)
        }
    },

    validate : async (req, res, done) => {
        try{
            const bearer = req.headers.authorization
            const token = bearer.split(" ")[1]
            var decoded = jwt.verify(token, process.env.JWT_SECRET);
            if(decoded) return done(null, decoded);
        }catch(err){
            return done(res.status(401).json({success: false, message: "Unauthorize", data: null}));
        }
    },

    profile : async () => {
        try{
            const users = await User.find();
            return users
        }catch(err){
            console.log(`Could not fetch users ${err}`)
        }
    },

}