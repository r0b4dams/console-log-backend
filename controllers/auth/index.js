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

// LOGIN

// LOGOUT





module.exports = router;