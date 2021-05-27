const router = require('express').Router();
const db = require("../../models");

const jwt = require("jsonwebtoken");
const tokenAuth = require("../../middleware/tokenAuth");
const bcrypt = require("bcrypt");


// localhost:3001/auth/
router.get("/", tokenAuth, async (req, res) => {
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
// localhost:3001/auth/signup
router.post("/signup", async ({body}, res) => {
    try {

        newUser = await db.User.create(body);

        const token = jwt.sign({
            username: newUser.username,
            id: newUser._id
        },
        process.env.JWT_SECRET,
        {
            expiresIn:"2h"
        })
        res.json({token, user:newUser })
      }
      catch(err) {
        res.json(err);
      }
  });

// LOGIN
// a user logs in
// localhost:3001/auth/login
router.post("/login", async (req, res)=>{
    try {
        // find user by username
        const loginUser = await db.User.findOne({ username: req.body.username });
        console.log(loginUser);

        if (!loginUser) {

            console.log('user not found')
            return res.status(403).json({ message: "auth failed" });

        } else if (!bcrypt.compareSync(req.body.password, loginUser.password)) {

            return res.status(403).json({ message: "auth failed" })

        } else {
            const token = jwt.sign({
                username: loginUser.username,
                id: loginUser._id
            },
            process.env.JWT_SECRET,
            {
                expiresIn:"2h"
            })
            res.json({token, user: loginUser })
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;