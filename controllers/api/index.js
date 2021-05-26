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

module.exports = router;