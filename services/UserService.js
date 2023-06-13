const User = require('../models/User')

module.exports = {
    getUsers : async () => {
        try{
            const users = await User.find();
            return users
        }catch(err){
            console.log(`Could not fetch users ${err}`)
        }
    },

    getUser : async (id) => {
        try{
            const user = await User.findById(id);
            return user
        }catch(err){
            console.log(`User not found. ${err}`)
        }
    },

    addUser : async ({name, email ,password}) => {
        try{
            let created_at = Date.now();
            const user = new User({
                name: name, 
                email: email, 
                password: password, 
                created_at: created_at
            });
            const addUser = await user.save();
            return addUser
        }catch(err){
            console.log(`Failed add user. ${err}`)
        }
    },

    updateUser : async (id,{name, email ,password}) => {
        try{
            
            const updateUser = await User.findOneAndUpdate({_id : id}, {
                name: name, 
                email: email, 
                password: password
            }, {new : true});
            return updateUser
        }catch(err){
            console.log(`Failed update user. ${err}`)
        }
    },

    deleteUser : async (id) => {
        try{
            const deleteUser = await User.findByIdAndDelete(id);
            return deleteUser
        }catch(err){
            console.log(`Failed delete user. ${err}`)
        }
    }

}