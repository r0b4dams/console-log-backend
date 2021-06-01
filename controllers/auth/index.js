const router = require('express').Router();
const db = require("../../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const tokenAuth = require("../../middleware/tokenAuth");

// SIGNUP
// create a new user
// localhost:3001/auth/signup
router.post("/signup", async ({body}, res) => {
    try {
        // create a new user
        newUser = await db.User.create(body);
        
        // login user after signup
        // create an auth token to send to client containing username and user id, set to expire in 2 hrs
        const token = jwt.sign( {username: newUser.username, id: newUser._id }, process.env.JWT_SECRET, { expiresIn:"2h" });
        res.json({token, user:newUser });
      }
      catch(err) {
        res.status(500).json({ message: "signup failed" });
      }
  });

// LOGIN
// a user logs in
// localhost:3001/auth/login
router.post("/login", async (req, res)=>{
    try {
        // find user by username
        const loginUser = await db.User.findOne({ username: req.body.username });

        // if the user cannot be found, return failure message
        if (!loginUser) {
            return res.status(403).json({ message: "auth failed" });

        // if user found but pw do not match, return failure message
        } else if (!bcrypt.compareSync(req.body.password, loginUser.password)) {
            return res.status(403).json({ message: "auth failed" });

        // else username/pw verified
        // create an auth token to send to client containing username and user id, set to expire in 2 hrs
        } else {const token = jwt.sign( {username: loginUser.username, id: loginUser._id }, process.env.JWT_SECRET, { expiresIn:"2h" });
            return res.json({token, user: loginUser });
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/profile", tokenAuth, async (req,res)=>{
    console.log(req.body);

    try {
        const profileUser = await db.User.findOne({ _id: req.user.id });
        return res.json(profileUser);

    } catch (err) {
        console.log(err);
        return res.status(500).json({message:"error",err})
    }
});


module.exports = router;