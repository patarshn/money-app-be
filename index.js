require('dotenv').config();
const express = require('express')
const mongoose =  require("mongoose");
const bodyParser =  require("body-parser");
const cors = require("cors")
const router = express.Router();

const app = express();
const port = 3000;
const options = {
    origin: '*',
}
app.use(cors(options))

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true })
.then(res => console.log(`Connection Succesful ${res}`))
.catch(err => console.log(`Error in DB connection ${err}`));

//body-parser config;
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

//register the enpoints
const auth = require("./routes/auth.routes");
const users = require("./routes/user.routes");
const finances = require("./routes/finance.routes");
app.use("/api/v1/users", users);
app.use("/api/v1/finances", finances);
app.use("/api/v1/", auth);

app.listen(port, () => {
    console.log(`Application is listening at port ${port}`);
});
