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
        content:"Check out the metroid wiki prime guide!",
        link: "https://metroid.fandom.com/wiki/Metroid_Prime_Official_Perfect_Guide",
        user_id: robert._id,
        game_id: 56123,
        gameName: "Metroid Prime",
        gameImgLink: "https://media.rawg.io/media/games/221/2213b2c9aa37d87bbb0dc4f7b0e6c3e5.jpg"
    });

    const sung_wt_1 = await db.Walkthrough.create({
        title:"All stars in Super Mario 64",
        content:"All stars walkthrough",
        link: "https://mariopartylegacy.com/guides/super-mario-64-walkthrough-and-stars/",
        user_id: sung._id,
        game_id: 54528,
        gameName: "Super Mario 64",
        gameImgLink: "https://media.rawg.io/media/games/1d5/1d565b99cad46c44b534d9803e27bd49.jpg"
    });

    const sung_wt_2 = await db.Walkthrough.create({
        title:"Walkthrough #2 for Sung",
        content:"Super Mario Sunshine (content body)",
        link: "https://www.mariowiki.com/Super_Mario_Sunshine",
        user_id: sung._id,
        game_id: 52371,
        gameName: "Super Mario Sunshine",
        gameImgLink: "https://media.rawg.io/media/games/0b7/0b746092287560e4ff5a6ceb5faaed8e.jpg"
    });

    const sung_wt_3 = await db.Walkthrough.create({
        title:"Sung - Walkthrough 3",
        content:"Galaxy Guide!",
        link: "https://www.ign.com/wikis/super-mario-galaxy/Walkthrough",
        user_id: sung._id,
        game_id: 27024,
        gameName: "Super Mario Galaxy",
        gameImgLink: "https://media.rawg.io/media/games/0b7/0b746092287560e4ff5a6ceb5faaed8e.jpg"
    });

    const aurora_wt_1 = await db.Walkthrough.create({
        title:"How to get blue roses in new horizons",
        content:"A walkthrough on how to get blue roses",
        link: "https://www.reddit.com/r/ac_newhorizons/comments/ft4m94/ultimate_blue_rose_guide_in_comments/",
        user_id: aurora._id,
        game_id: 421698,
        gameName: "Animal Crossing: New Horizons",
        gameImgLink: "https://media.rawg.io/media/games/42f/42fe1abd4d7c11ca92d93a0fb0f8662b.jpg"
    });

    const aurora_wt_2 = await db.Walkthrough.create({
        title:"All charms in Hollow Knight",
        content:"List of Charms",
        link: "https://hollowknight.fandom.com/wiki/Category:Charms",
        user_id: aurora._id,
        game_id: 9767,
        gameName: "Hollow Knight",
        gameImgLink: "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg"
    });

    await db.User.findOneAndUpdate({ _id: robert._id }, { $push: { favs: aurora_wt_1._id } });
    await db.User.findOneAndUpdate({ _id: sung._id }, { $push: { favs: sung_wt_3._id } });
    await db.User.findOneAndUpdate({ _id: sung._id }, { $push: { favs: rob_wt_1._id } });

    console.log('seeded!');
    mongoose.disconnect();
}

seed();
