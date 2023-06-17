const FinanceService = require('../services/FinanceService');

module.exports = {
    getFinances : async (req, res) => {
        try{
            const response = await FinanceService.getFinances();
            if(!response) return res.status(400).json({success: false, message: "There are no finance create yet!", data: null})
            return res.json({success: true, message: "Success get finances", data: response})
        }catch(err){
            console.log(err)
            return res.status(500).json({success: false, message: err, data: null});
        }
    },

    getFinance : async (req, res) => {
        try{
            let id = req.params.financeId || {};
            const response = await FinanceService.getFinance(id);
            if(!response) return res.status(404).json({success: false, message: "Finance not found!", data: null})
            return res.json({success: true, message: "Success get finance", data: response})
        }catch(err){
            return res.status(500).json({success: false, message: err, data: null});
        }
    },

    getFinanceSum : async (req, res) => {
        try{
            const response = await FinanceService.getFinanceSum();
            if(!response) return res.status(400).json({success: false, message: "There are no finance create yet!", data: null})
            return res.json({success: true, message: "Success get finance summary", data: response})
        }catch(err){
            return res.status(500).json({success: false, message: err, data: null});
        }
    },

    addFinance : async (req, res) => {
        try{
            const created_by = res.locals.userId
            const response = await FinanceService.addFinance({...req.body, created_by});
            if(!response) return res.status(400).json({success: false, message: "Failed add finance", data: null});
            return res.status(201).json({success: true, message: "Success add finance", data: null});
        }catch(err){
            return res.status(500).json({success: false, message: err, data: null});
        }
    },

    updateFinance : async (req, res) => {
        try{
            let id = req.params.financeId || {};
            const response = await FinanceService.updateFinance({id, ...req.body});
            if(!response) return res.status(404).json({success: false, message: "Finance not found!", data: null});
            return res.status(200).json({success: true, message: "Success update finance", data: null});
        }catch(err){
            return res.status(500).json({success: false, message: err, data: null});
        }
    },

    deleteFinance : async (req, res) => {
        try{
            let id = req.params.financeId || {};
            const response = await FinanceService.deleteFinance(id);
            if(!response) return res.status(404).json({success: false, message: "Finance not found!", data: null})
            return res.json({success: true, message: "Success delete finance", data: response})
        }catch(err){
            return res.status(500).json({success: false, message: err, data: null});
        }
    }
}