const router = require('express').Router();
const db = require("../../models");

const jwt = require("jsonwebtoken");
const tokenAuth = require("../../middleware/tokenAuth");

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
router.post("/login", async (req,res)=>{

    console.log(req.body);

    // res.json("logIN route");

    // find a user by username
        // if no user, => user not found
        // else if user found, but (!bcrypt.compareSync(req.body.password, user.password)) => auth failed
        // else create a token and send it to client

    try { 

        // const loginUser = await db.User.findOne({ username: req.body.username });
        // console.log(loginUser);

        // if (!loginUser) {
        //     console.log('user not found')
        //     return res.status(403).json({ message: "auth failed" });
        // }

        // res.status(200).json(loginUser);
        res.json(req.body);

    } catch (err) {
        res.status(500).json(err);
    }

    // User.findOne({
    //     where: {
    //         email: req.body.email
    //     }
    // }).then(user => {
    //     if (!user) {
    //         console.log('user not found')
    //         return res.status(403).json({ message: "auth failed" })
    //     } else if (!bcrypt.compareSync(req.body.password, user.password)) {
    //         console.log(req.body.password);
    //         console.log("passwords dont match")
    //         return res.status(403).json({ message: "auth failed" })
    //     } else {
    //         const token = jwt.sign({
    //             name:user.name,
    //             email:user.email,
    //             id:user.id
    //         },
    //         process.env.JWT_SECRET,
    //         {
    //             expiresIn:"2h"
    //         })
    //         res.json({token, user })
    //     }
    // })

});

// a user logs out
// localhost:3001/auth/logout
router.post("/logout", (req,res) => {

    res.json("logOUT route");

});

module.exports = router;