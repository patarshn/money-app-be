const mongoose = require("mongoose");
const FinanceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  nominal: {
    type: Number,
    required: true,
  },
  description: {
    type: String, //ngegrill
  },
  source: {
    type: String, //ex: BNI, CASH, BCA, UTANG
  },
  category: {
    type: String, //ex: makan, minum
  },
  type: {
    type: String, //pengeluaran/ pemasukan (D/K)[Debit/Kredit]
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

const Finance = mongoose.model("Finance", FinanceSchema);
module.exports = Finance;
