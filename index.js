require("dotenv").config();
const mongoose = require("mongoose");          // db and schema based models
const express = require("express");            // server functions
const cors = require("cors")                   // lets anyone query db
const logger = require("morgan");              // see http reqs
const controllers = require("./controllers");  // require controllers for routing

const PORT = process.env.PORT || 3001;

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

// connect to database
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/proj3db", 
    { 
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

app.use(controllers); // tells express to use routing

app.listen(PORT, () => {
    console.log("listening on port " + PORT);
});