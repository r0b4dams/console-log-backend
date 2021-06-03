const router = require('express').Router();
const db = require("../../models");
const tokenAuth = require("../../middleware/tokenAuth");

// GET A SINGLE USER WITH THEIR FAVORITE WALKTHROUGHS
// localhost:3001/api/user/:userid
router.get("/user/:userid", async (req, res) => {
    try { 
        const OneUserPopFavs = await db.User.findById(req.params.userid).populate("favs"); // favs references walkthrough IDs
        res.status(200).json(OneUserPopFavs);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET ALL USERS
// localhost:3001/api/users/all
router.get("/users/all", async (req, res) => {
    try { 
        const AllUsersPopFavs = await db.User.find({}).populate("favs"); // favs references walkthrough IDs
        res.status(200).json(AllUsersPopFavs);
    } catch (err) {
        res.status(500).json(err);
    }
});

// CREATE WALKTHROUGH:
// note: game_id, gameName, and gameImgLink will be pulled from rawg API, user ID from token
// follow this shape: (rating defaults to empty array, mongoose middleware will handle timestamps)
/*
{
    title:"All charms in Hollow Knight",
    content:"List of Charms",
    link: "https://hollowknight.fandom.com/wiki/Category:Charms",

    user_id: aurora._id,

    game_id: 9767,
    gameName: "Hollow Knight",
    gameImgLink: "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg",
}
*/
// localhost:3001/api/create
router.post("/create", tokenAuth, async ({body}, res) => {
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
/*
{
	"title":"A most excellent update!",
	"Content":"I really hope this works!",
	"link": "https://strategywiki.org/wiki/Main_Page"
}
*/
// localhost:3001/api/update/:id
router.put("/update/:id", tokenAuth, async (req, res) => {
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
    try { 
        const getWalkthrough = await db.Walkthrough.findById(req.params.walkthroughid);
        res.status(200).json(getWalkthrough);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET ALL WALKTHROUGHS ASSOCIATED WITH A USER
// localhost:3001/api/userwalkthroughs/:userid
router.get("/userwalkthroughs/:userid", async (req, res) => {
    try { 
        const userWalkthroughs = await db.Walkthrough.find({ user_id: req.params.userid });
        res.status(200).json(userWalkthroughs);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET ALL WALKTHROUGHS ASSOCIATED WITH A GAME
// localhost:3001/api/gamewalkthroughs/:gameid
router.get("/gamewalkthroughs/:gameid", async (req, res) => {
    try { 
        const gameWalkthroughs = await db.Walkthrough.find({ game_id: req.params.gameid });
        res.status(200).json(gameWalkthroughs);
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE WALKTHROUGH BY ID
// localhost:3001/api/deletewalkthrough/:walkthroughid
router.delete("/deletewalkthrough/:walkthroughid", tokenAuth, async (req, res) => {
    try { 
        const deletedWalkthrough = await db.Walkthrough.findByIdAndDelete(req.params.walkthroughid);
        res.status(200).json(deletedWalkthrough);
    } catch (err) {
        res.status(500).json(err);
    }
});

// ADD A GAME TO USER FAVORITES
// localhost:3001/api/addfavorite/:walkthroughid/:userid
router.put("/addfavorite/:walkthroughid/:userid", tokenAuth, async (req, res) => {
    try {
        const addedFav = await db.User.findOneAndUpdate({ _id: req.params.userid }, { $push: { favs: req.params.walkthroughid } }, { new: true })
        console.log(addedFav);
        res.status(200).json(addedFav);
    } catch (err) {
        res.status(500).json(err);
    }
});

// REMOVE A GAME FROM USER FAVORITES
// localhost:3001/api/addfavorite/:walkthroughid/:userid
router.put("/removefavorite/:walkthroughid/:userid", tokenAuth, async (req, res) => {
    try {
        const removedFav = await db.User.findOneAndUpdate({ _id: req.params.userid }, { $pull: {favs: req.params.walkthroughid} }, { new: true })
        console.log(removedFav);
        res.status(200).json(removedFav);
    } catch (err) {
        res.status(500).json(err);
    }
});

// RATE A GAME
// localhost:3001/api/ratewalkthrough/:walkthroughid
router.put("/ratewalkthrough/:walkthroughid/:rating", tokenAuth, async (req, res) => {
    try {
        const ratedWalkthrough = await db.Walkthrough.findOneAndUpdate({ _id: req.params.walkthroughid }, { $push: {ratings: req.params.rating} }, { new: true });
        res.status(200).json(ratedWalkthrough);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;