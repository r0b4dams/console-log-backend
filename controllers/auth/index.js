const router = require('express').Router();
const db = require("../../models");

// localhost:3001/auth/
router.get("/", async (req, res) => {
    try {
        res.json("auth routes linked!")
    } catch (err) {
        res.status(500).json(err);
    }
});

// SIGNUP
// Create a new user
// send the following format
// need to figure out how to hash (bcrypt?)
/*
res.body should mimic the following format:
{
	"username":"Tiki",
	"password":"kitteh"
}
*/
// this works; need to hash pw
// // localhost:3001/auth/signup
router.post("/signup", async ({body}, res) => {
    try {
        newUser = await db.User.create(body);
        console.log(newUser);
      }
      catch(err) {
        res.json(err);
      }
  });

// LOGIN
// a user logs in
// localhost:3001/auth/login
router.post("/login", (req,res)=>{
    res.json("logIN route");
});

// a user logs out
// localhost:3001/auth/logout
router.post("/logout", (req,res) => {
    res.json("logOUT route");
});

module.exports = router;