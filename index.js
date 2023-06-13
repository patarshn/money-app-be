require('dotenv').config();
const express = require('express')
const mongoose =  require("mongoose");
const bodyParser =  require("body-parser");

const router = express.Router();

const app = express();
const port = 3000;

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true })
.then(res => console.log(`Connection Succesful ${res}`))
.catch(err => console.log(`Error in DB connection ${err}`));

//body-parser config;
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

//register the enpoints
const users = require("./routes/user.routes");
app.use("/api/v1/users", users);

app.listen(port, () => {
    console.log(`Application is listening at port ${port}`);
});
