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
/*
{
	"title":"Rob's 2nd walkthrough",
	"game_id": 27571,
	"gameName": "Donkey Kong Country",
	"Content":"D.K.! Donkey Kong!",
	"link": "https://donkeykong.fandom.com/wiki/Donkey_Kong_Country",
	"user_id": "60afb6e3336f6d41c43895b6"
}
*/
// **NEED TO AUTH USER
// localhost:3001/api/create
router.post("/create", async ({body}, res) => {
    body.rating = 0;
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
// **NEED TO AUTH USER
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
// localhost:3001/api/findall
router.get("/findall", async (req, res) => {
    try { 
        const allWalkthroughs = await db.Walkthrough.find({});
        res.status(200).json(allWalkthroughs);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET A WALKTHROUGH BY ID
// localhost:3001/api/find/:id
router.get("/find/:walkthroughid", async (req, res) => {
    // console.log(req.params.id);
    try { 
        const getWalkthrough = await db.Walkthrough.findById(req.params.walkthroughid);
        res.status(200).json(getWalkthrough);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET ALL WALKTHROUGHS ASSOCIATED TO A USER
// localhost:3001/api/userwalkthroughs/:userid
router.get("/userwalkthroughs/:userid", async (req, res) => {
    try { 
        const userWalkthroughs = await db.Walkthrough.find({ user_id: req.params.userid });
        res.status(200).json(userWalkthroughs);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET ALL WALKTHROUGHS ASSOCIATED TO A GAME
// localhost:3001/api/gamewalkthroughs/:gameid
router.get("/gamewalkthroughs/:gameid", async (req, res) => {
    try { 
        const gameWalkthroughs = await db.Walkthrough.find({ game_id: req.params.gameid });
        res.status(200).json(gameWalkthroughs);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET ALL WALKTHROUGHS ASSOCIATED TO A GAME
// localhost:3001/api/delete/:walkthroughid
router.delete("/delete/:walkthroughid", async (req, res) => {
    try { 
        const deletedWalkthrough = await db.Walkthrough.findByIdAndDelete(req.params.walkthroughid);
        res.status(200).json(deletedWalkthrough);
    } catch (err) {
        res.status(500).json(err);
    }
});

// ADD A GAME TO FAVORITES

module.exports = router;