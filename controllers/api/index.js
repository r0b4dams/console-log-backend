const router = require('express').Router();
const db = require("../../models");

// localhost:3001/api/
router.get("/", async (req, res) => {
    try {
        res.json("api routes linked!")
    } catch (err) {
        res.status(500).json(err);
    }
});

// get ALL walkthroughs

// get walkthroughs associated to a specific user

// get walkthroughs associated to a specific game

// get the favorite walkthroughs of a specific user

module.exports = router;