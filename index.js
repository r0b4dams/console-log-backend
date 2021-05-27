require("dotenv").config();
const mongoose = require("mongoose");          // db and schema based models
const express = require("express");            // server functions
const cors = require("cors")                   // lets anyone query db
const logger = require("morgan");              // see http reqs
const controllers = require("./controllers");  // require controllers for routing

const PORT = process.env.PORT || 3001;

// const db = require("./models");

const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//LOCAL
app.use(cors());

//DEPLOYED
// app.use(cors({
//   origin:["https://{TBD}.herokuapp.com"]
// }));

app.use(controllers); // tells express to use routing

// connect to database
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/proj3db", 
    { 
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

app.listen(PORT, () => {
    console.log("listening on port " + PORT);
});