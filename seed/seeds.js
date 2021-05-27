const mongoose = require("mongoose");

const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/proj3db", {
     useNewUrlParser: true ,
     useUnifiedTopology: true
});

const seed = async ()=>{

    // Create some users
    const robert = await db.User.create({
        username:"Robert",
        password:"hellorobert"
    });
    const sung = await db.User.create({
        username:"Sung",
        password:"hellosung"
    });
    const aurora = await db.User.create({
        username:"Aurora",
        password:"helloaurora"
    });

    // Now make some walkthroughs and tie them to the users
    const rob_wt_1 = await db.Walkthrough.create({
        title:"Rob's 1st walkthrough on Metroid Prime",
        game_id: 56123,
        gameName: "Metroid Prime",
        Content:"any additional content goes here",
        link: "https://metroid.fandom.com/wiki/Metroid_Prime_Official_Perfect_Guide",
        user_id: robert._id
    });

    const sung_wt_1 = await db.Walkthrough.create({
        title:"All stars in Super Mario 64",
        game_id: 54528,
        gameName: "Super Mario 64",
        Content:"All stars walkthrough",
        link: "https://mariopartylegacy.com/guides/super-mario-64-walkthrough-and-stars/",
        user_id: sung._id
    });

    const sung_wt_2 = await db.Walkthrough.create({
        title:"Walkthrough #2 for Sung",
        game_id: 52371,
        gameName: "Super Mario Sunshine",
        Content:"Super Mario Sunshine (content body)",
        link: "https://www.mariowiki.com/Super_Mario_Sunshine",
        user_id: sung._id
    });

    const sung_wt_3 = await db.Walkthrough.create({
        title:"Sung - Walkthrough 3",
        game_id: 27024,
        gameName: "Super Mario Galaxy",
        Content:"Galaxy Guide!",
        link: "https://www.ign.com/wikis/super-mario-galaxy/Walkthrough",
        user_id: sung._id
    });

    const aurora_wt_1 = await db.Walkthrough.create({
        title:"How to get blue roses in new horizons",
        game_id: 421698,
        gameName: "Animal Crossing: New Horizons",
        Content:"A walkthrough on how to get blue roses",
        link: "https://www.reddit.com/r/ac_newhorizons/comments/ft4m94/ultimate_blue_rose_guide_in_comments/",
        user_id: aurora._id
    });

    const aurora_wt_2 = await db.Walkthrough.create({
        title:"All charms in Hollow Knight",
        game_id: 9767,
        gameName: "Hollow Knight",
        Content:"List of Charms",
        link: "https://hollowknight.fandom.com/wiki/Category:Charms",
        user_id: aurora._id
    });

    console.log('seeded!');
    mongoose.disconnect();
}

seed()
