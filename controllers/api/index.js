const router = require('express').Router();
const db = require("../../models");

// test linked files
// localhost:3001/api/
router.get("/", async (req, res) => {
    try {
        res.json("api routes linked!")
    } catch (err) {
        res.status(500).json(err);
    }
});

// CREATE WALKTHROUGH:
// follow this shape:
// note: game ID and name will be pulled from rawg API, user ID from token?
/*{
	"title":"sajdf",
	"gameID": 1,
	"gameName": "link to the future",
	"Content":"dis iz da best wokfru",
	"link": "https://strategywiki.org/wiki/Main_Page",
	"rating":50,
	"user_id": "60aee44cc39ab56bc0abee0b"
}*/
// NEED TO AUTH USER
// localhost:3001/api/create
router.post("/create", async ({body}, res) => {
    try {
        const newWalkthrough = await db.Walkthrough.create(body);
        res.status(200).json(newWalkthrough);
    } catch (err) {
        res.status(500).json(err);
    }
});

// UPDATE WALKTHROUGH
// follow this shape:
/*{
	"title":"A most excellent update!",
	"Content":"I really hope this works!",
	"link": "https://strategywiki.org/wiki/Main_Page"
}*/
// NEED TO AUTH USER
// localhost:3001/api/update/:id
router.put("/update/:id", async (req, res) => {
    const filter = {_id: req.params.id};
    const update = req.body;

    try {
        const updatedWalkthrough = await db.Walkthrough.findOneAndUpdate(filter, update, { new: true });
        res.status(200).json(updatedWalkthrough);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET ALL WALKTHROUGHS

// GET A WALKTHROUGH BY ID
// localhost:3001/api/find/:id
router.get("/find/:id", async (req, res) => {

    // console.log(req.params.id);

    try { 
        const getWalkthrough = await db.Walkthrough.findById(req.params.id);
        res.status(200).json(getWalkthrough);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;