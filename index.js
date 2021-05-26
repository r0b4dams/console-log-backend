const mongoose = require("mongoose");          // db and schema based models
const express = require("express");            // server functions
const cors = require("cors")                   // lets anyone query db
const controllers = require("./controllers");  // require controllers for routing

const logger = require("morgan");              // see http reqs

const PORT = process.env.PORT || 3001;
const db = require("./models");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors()); 
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
