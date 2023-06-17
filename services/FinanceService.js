const Finance = require('../models/Finance')
module.exports = {
    getFinances : async () => {
        try{
            const finances = await Finance.find().populate('created_by');
            return finances
        }catch(err){
            console.log(`Could not fetch finances ${err}`)
        }
    },

    getFinance : async (id) => {
        try{
            const finance = await Finance.findById(id).populate('created_by');
            return finance
        }catch(err){
            console.log(`Finance not found. ${err}`)
        }
    },

    getFinanceSum : async () => {
        try{
            const finances = await Finance.aggregate([{
                $group: {
                    _id: {type: "$type"},
                    sum: {$sum:"$nominal"}
                }
            }]);
            return finances;
        }catch(err){
            console.log(err);
            console.log(`Could not fetch finances ${err}`)
        }
    },

    addFinance : async ({name, date, nominal, description, source, category, type, created_by}) => {
        try{
            let created_at = Date.now();
            const finance = new Finance({
                name: name, 
                date: date, 
                nominal: nominal, 
                description: description, 
                source: source, 
                category: category, 
                type: type, 
                created_at: created_at,
                created_by: created_by
            });
            const addFinance = await finance.save();
            return addFinance
        }catch(err){
            console.log(`Failed add finance. ${err}`)
        }
    },

    updateFinance : async ({id, name, date, nominal, description, source, category, type, created_by}) => {
        try{
            const updateFinance = await Finance.findOneAndUpdate({_id : id}, {
                name: name, 
                date: date, 
                nominal: nominal, 
                description: description, 
                source: source, 
                category: category, 
                type: type, 
                created_by: created_by
            }, {new : true});
            return updateFinance
        }catch(err){
            console.log(`Failed update finance. ${err}`)
        }
    },

    deleteFinance : async (id) => {
        try{
            const deleteFinance = await Finance.findByIdAndDelete(id);
            return deleteFinance
        }catch(err){
            console.log(`Failed delete finance. ${err}`)
        }
    }

}