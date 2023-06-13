const UserService = require('../services/UserService');

module.exports = {
    getUsers : async (req, res) => {
        try{
            const response = await UserService.getUsers();
            if(!response) return res.status(400).json({success: false, message: "There are no user create yet!", data: null})
            return res.json({success: true, message: "Success get users", data: response})
        }catch(err){
            return res.status(500).json({success: false, message: err, data: null});
        }
    },

    getUser : async (req, res) => {
        try{
            let id = req.params.userId || {};
            const response = await UserService.getUser(id);
            if(!response) return res.status(404).json({success: false, message: "User not found!", data: null})
            return res.json({success: true, message: "Success get user", data: response})
        }catch(err){
            return res.status(500).json({success: false, message: err, data: null});
        }
    },

    addUser : async (req, res) => {
        try{
            const response = await UserService.addUser(req.body);
            if(!response) return res.status(400).json({success: false, message: "Failed add user", data: null});
            return res.status(201).json({success: true, message: "Success add user", data: null});
        }catch(err){
            return res.status(500).json({success: false, message: err, data: null});
        }
    },

    updateUser : async (req, res) => {
        try{
            let id = req.params.userId || {};
            const response = await UserService.updateUser(id, req.body);
            if(!response) return res.status(404).json({success: false, message: "User not found!", data: null});
            return res.status(200).json({success: true, message: "Success update user", data: null});
        }catch(err){
            return res.status(500).json({success: false, message: err, data: null});
        }
    },

    deleteUser : async (req, res) => {
        try{
            let id = req.params.userId || {};
            const response = await UserService.deleteUser(id);
            if(!response) return res.status(404).json({success: false, message: "User not found!", data: null})
            return res.json({success: true, message: "Success delete user", data: response})
        }catch(err){
            return res.status(500).json({success: false, message: err, data: null});
        }
    }
}