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

// create a walkthrough; it works!
// follow this shape:
/*{
	"title":"sajdf",
	"gameID": 1,
	"gameName": "link to the future",
	"Content":"dis iz da best wokfru",
	"link": "https://strategywiki.org/wiki/Main_Page",
	"rating":50,
	"user_id": "60aee44cc39ab56bc0abee0b"
}*/
// localhost:3001/api/create
router.post("/create", async ({body}, res) => {
    try {
        const newWalkthrough = await db.Walkthrough.create(body);
        res.status(200).json(newWalkthrough);
    } catch (err) {
        res.status(500).json(err);
    }
});

// updates walkthrough by id with new exercise
// localhost:3001/api/workouts/:id
router.put("/update/:id", async (req, res) => {
    try {
        console.log(req.params.id);
        // const updatedWalkthrough = await db.Walkthrough.findOneAndUpdate({_id: req.params.id}, {$set:{read:false}}, { new: true });
        res.status(200).json(updatedWorkout)
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;