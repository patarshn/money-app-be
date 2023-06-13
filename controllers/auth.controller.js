const AuthService = require('../services/AuthService');

module.exports = {
    login : async (req, res) => {
        try{
            const response = await AuthService.login(req.body);
            if(!response) return res.status(400).json({success: false, message: "Wrong email or password!", data: null})
            return res.json({success: true, message: "Success login", data: response})
        }catch(err){
            return res.status(500).json({success: false, message: err, data: null});
        }
    },

    profile : async (req, res) => {
        try{
            const response = await AuthService.profile();
            if(!response) return res.status(400).json({success: false, message: "Wrong email or password!", data: null})
            return res.json({success: true, message: "Success login", data: response})
        }catch(err){
            return res.status(500).json({success: false, message: err, data: null});
        }
    }

    
}