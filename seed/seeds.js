const mongoose = require("mongoose"); // use mongoose
const db = require("../models");      // import models

// connect to mongo atlas if deployed or local db
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/consolelogdb", {
     useNewUrlParser: true ,
     useUnifiedTopology: true
});

const seed = async ()=>{

//////////////////////////////////////////////////////////////////////////////////
    const robert = await db.User.create({
        username:"Robert",
        password:"hellorobert"
    });
    const robWalkthroughs = [
        // Metroid Prime
        {
            // user enters this info
            title: "Metroid Prime Walkthrough",
            content: "Check out this walkthrough on Metroid Prime!",
            link: "https://strategywiki.org/wiki/Metroid_Prime",
            ratings: [1,2,4,3,3,4,1,5],
    
            user_id: robert._id, // this data passed from token
    
            // this info pulled from RAWG API
            // can perform RAWG API search by game ID using the following endpoint:
            // `https://api.rawg.io/api/games/${game_id}?key=${APIKEY}`
            game_id: 56123,
            gameName: "Metroid Prime",
            gameImgLink: "https://media.rawg.io/media/games/221/2213b2c9aa37d87bbb0dc4f7b0e6c3e5.jpg"
        },
    
        // Super Mario World
        {
            title:"Super Mario World speedrun guide!",
            content:"Akisto's 96 Exit Tutorial",
            link: "https://www.speedrun.com/smw/guide/9ziku",
            ratings: [3,4,4,5,3],
            user_id: robert._id,
            
            game_id: 24899,
            gameName: "Super Mario World",
            gameImgLink: "https://media.rawg.io/media/games/3bb/3bb2c8d774c3a83eb2c17d0d3d51f020.jpg"
        },
    
        // Total War: Warhammer
        {
            title:"Total Warhammer Faction Guide",
            content:"Orkz iz da best",
            link: "https://www.pcgamesn.com/total-war-warhammer-ii/total-war-warhammer-best-factions",
            ratings: [2,3,2,1,1,3],
            user_id: robert._id,
            game_id: 9981,
            gameName: "Total War: WARHAMMER II",
            gameImgLink: "https://media.rawg.io/media/games/599/599b2d9bf7815fe2615d9527cccf7725.jpg"
        },
    
        // Fallout: New Vegas
        {
            title:"New Vegas Gameplay Guide",
            content:"War. War Never Changes",
            link: "https://guides.gamepressure.com/falloutnewvegas",
            ratings: [2,3],
            user_id: robert._id,
            game_id: 5563,
            gameName: "Fallout: New Vegas",
            gameImgLink: "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg"
        },
    
        // Witcher 3: Wild Hunt
        {
            title:"Witcher 3 beginner's guide",
            content:"New to the witcher? Check out this guide on rock paper shotgun",
            link: "https://www.rockpapershotgun.com/the-witcher-3-tips-2020-the-essential-guide-for-beginners",
            ratings: [],
            user_id: robert._id,
            game_id: 3328,
            gameName: "The Witcher 3: Wild Hunt",
            gameImgLink: ""
        }
    ];
    await db.Walkthrough.create(robWalkthroughs);
///////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////
    const sung = await db.User.create({
        username:"Sung",
        password:"hellosung"
    });
    const sungWalkthroughs = [
        // Final Fantasy VII
        {
            title:"Final Fantasy VII Wiki Guide",
            content:"FF7 walkthrough",
            link: "https://www.ign.com/wikis/final-fantasy-vii/Walkthrough",
            ratings: [5,4,4],
            user_id: sung._id,
            game_id: 52939,
            gameName: "Final Fantasy VII",
            gameImgLink: "https://media.rawg.io/media/games/6c0/6c00ee85d1344f58c469e8e47fd8ae7c.jpg"
        },
    
        // Fire Emblem: Path of Radiance
        {
            title:"Classes in Path of Radiance",
            content:"Check out this overview of classes on IGN",
            link: "https://www.ign.com/wikis/fire-emblem-path-of-radiance/Classes",
            ratings: [1,2,1,1],
            user_id: sung._id,
            game_id: 56053,
            gameName: "Fire Emblem: Path of Radiance",
            gameImgLink: "https://media.rawg.io/media/screenshots/8f8/8f84d86684aa6e4cfe2c647386159d00.jpg"
        },
    
        // Chrono Trigger
        {
            title:"Chrono Trigger walkthrough",
            content:"Find out how to get all endings!",
            link: "https://strategywiki.org/wiki/Chrono_Trigger/Walkthrough",
            ratings: [5,5,3,5,4,4,3,5],
            user_id: sung._id,
            game_id: 52800,
            gameName: "Chrono Trigger",
            gameImgLink: "https://media.rawg.io/media/games/ae4/ae404f4e0f504131199703c09111bb78.jpg"
        },
    
        // EarthBound
        {
            title:"Starmen.Net EarthBound Walkthrough",
            content:"Cool independent walkthrough",
            link: "http://walkthrough.starmen.net/earthbound/",
            ratings: [5,4,3,3,4,4,1],
            user_id: sung._id,
            game_id: 24079,
            gameName: "EarthBound",
            gameImgLink: "https://media.rawg.io/media/screenshots/8db/8dbfbaf477c8985e5f19c3e3ced79a65.jpg"
        },
    
        // Monster Hunter Rise
        {
            title:"Monster Hunter Rise Wiki Guide on IGN",
            content:"Some helpful advice on Monster Hunter Rise",
            link: "https://www.ign.com/wikis/monster-hunter-rise/52_Essential_Tips_and_Tricks",
            ratings: [1,2,3,4,5,4,3,2,1],
            user_id: sung._id,
            game_id: 494393,
            gameName: "Monster Hunter Rise",
            gameImgLink: "https://media.rawg.io/media/games/dbb/dbba6100aae179b5f24052c9141d426d.jpg"
        }
    ];
    await db.Walkthrough.create(sungWalkthroughs);
///////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////
    const aurora = await db.User.create({
        username:"Aurora",
        password:"helloaurora"
    });
    const auroraWalkthroughs = [
        // Portal 2
        {
            title:"Popular Steam Guides for Portal 2",
            content:"Good info on Portal 2",
            link: "https://steamcommunity.com/app/620/guides/",
            ratings: [1,2],
            user_id: aurora._id,
            game_id: 4200,
            gameName: "Portal 2",
            gameImgLink: "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
        },
    
        // Undertale
        {
            title:"Undertale Pacifist Walkthrough",
            content:"Play the whole game without killing anyone",
            link: "https://www.ign.com/wikis/undertale/Pacifist_Walkthrough",
            ratings: [4],
            user_id: aurora._id,
            game_id: 13627,
            gameName: "Undertale",
            gameImgLink: "https://media.rawg.io/media/games/ffe/ffed87105b14f5beff72ff44a7793fd5.jpg"
        },
    
        // Animal Crossing: New Horizons
        {
            title:"How to get blue roses in new horizons",
            content:"A walkthrough on how to get blue roses",
            link: "https://www.reddit.com/r/ac_newhorizons/comments/ft4m94/ultimate_blue_rose_guide_in_comments/",
            ratings: [2,1,1],
            user_id: aurora._id,
            game_id: 421698,
            gameName: "Animal Crossing: New Horizons",
            gameImgLink: "https://media.rawg.io/media/games/42f/42fe1abd4d7c11ca92d93a0fb0f8662b.jpg"
        },

        // Hollow Knight
        {
            title:"All charms in Hollow Knight",
            content:"List of Charms",
            link: "https://hollowknight.fandom.com/wiki/Category:Charms",
            ratings: [5,4,5,5,4,3],
            user_id: aurora._id,
            game_id: 9767,
            gameName: "Hollow Knight",
            gameImgLink: "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg"
        },
    
        // The Legend of Zelda: Breath of the Wild
        {
            title:"Korok Seed Locations",
            content:"locations of all 900 Korok Seeds",
            link: "https://www.zeldadungeon.net/breath-of-the-wild-walkthrough/korok-seed-locations/",
            ratings: [4,3,4],
            user_id: aurora._id,
            game_id: 22511,
            gameName: "The Legend of Zelda: Breath of the Wild",
            gameImgLink: "https://media.rawg.io/media/games/cc1/cc196a5ad763955d6532cdba236f730c.jpg"
        }
    ];
    await db.Walkthrough.create(auroraWalkthroughs);
///////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////
    const joe = await db.User.create({
        username:"Joe",
        password:"hellojoe"
    });
    const joeWalkthroughs = [
        {
            title:"All stars in Super Mario 64",
            content:"All stars walkthrough",
            link: "https://mariopartylegacy.com/guides/super-mario-64-walkthrough-and-stars/",
            ratings: [],
            user_id: joe._id,
            game_id: 54528,
            gameName: "Super Mario 64",
            gameImgLink: "https://media.rawg.io/media/games/1d5/1d565b99cad46c44b534d9803e27bd49.jpg"
        },
        {
            title:"Every Star in Super Mario Galaxy",
            content:"How to find every secret Power Star",
            link: "https://www.polygon.com/guides/21428902/super-mario-galaxy-hidden-star-luigi-green-trial",
            ratings: [4],
            user_id: joe._id,
            game_id: 27024,
            gameName: "Super Mario Galaxy",
            gameImgLink: "https://media.rawg.io/media/games/608/60842173a8a397892dc995cbf3cf8609.jpg",
        },
        {
            title:"Super Mario Odyssey - Full Game 100% Walkthrough",
            content:"100% Gameplay Walkthrough with no commentary",
            link: "https://www.youtube.com/watch?v=-2pm9yPCiRg",
            ratings: [2,3,1],
            user_id: joe._id,
            game_id: 28026,
            gameName: "Super Mario Odyssey",
            gameImgLink: "https://media.rawg.io/media/games/267/267bd0dbc496f52692487d07d014c061.jpg"
        }
    ];
    await db.Walkthrough.create(joeWalkthroughs);
///////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////
    const louis = await db.User.create({
        username:"Louis",
        password:"hellolouis"
    });
    const louisWalkthroughs = [
        {
            title:"Shaq Fu guide",
            content:"Learn to master Shaqido with this guide!",
            link: "https://www.giantbomb.com/shaq-fu/3030-4855/guide/",
            ratings: [5,5,5,5,5],
            user_id: louis._id,
            game_id: 55296,
            gameName: "Shaq Fu",
            gameImgLink: "https://media.rawg.io/media/screenshots/e3e/e3e763e5b442333c542d0c866ba2529d.jpg"
        },
    
        {
            title:"Street Fighter II Advanced Fighting Guide",
            content:"Helpful info on fighting terminology and combos",
            link: "https://srk.shib.live/w/Street_Fighter_2:_The_World_Warrior",
            ratings: [4,2,1],
            user_id: louis._id,
            game_id: 55132,
            gameName: "Street Fighter II: The World Warrior (1991)",
            gameImgLink: "https://media.rawg.io/media/screenshots/40b/40b529990743d2515760b1909eb61020.jpg"
        }
    ];
    await db.Walkthrough.create(louisWalkthroughs);
///////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////
    const demo = await db.User.create({
        username:"Demo",
        password:"hellodemo"
    });
    const demoWalkthroughs = [
        {
            title:"Ocarina of Time songs cheatsheet",
            content:"list of songs in Ocarina of Time",
            link: "https://www.zeldadungeon.net/wiki/Ocarina_of_Time_Songs",
            ratings: [4,4,4,1,2,2,5],
            user_id: demo._id,
            game_id: 25097,
            gameName: "The Legend of Zelda: Ocarina of Time",
            gameImgLink: "https://media.rawg.io/media/games/3a0/3a0c8e9ed3a711c542218831b893a0fa.jpg"
        },
    
        {
            title:"Endings in Mass Effect 3",
            content:"Mass Effect 3 Ending choices: all endings & how to get the best ending",
            link: "https://www.rpgsite.net/feature/11186-mass-effect-3-ending-choices-all-endings-how-to-get-the-best-ending",
            ratings: [1,1,1],
            user_id: demo._id,
            game_id: 4439,
            gameName: "Mass Effect 3",
            gameImgLink: "https://media.rawg.io/media/games/315/3156817d3ac1f341da73de6495fb28f5.jpg"
        },

        {
            title:"Guide to Half-Life 2",
            content:"From StrategyWiki, the video game walkthrough and strategy guide wiki",
            link: "https://strategywiki.org/wiki/Half-Life_2",
            ratings: [],
            user_id: demo._id,
            game_id: 13537,
            gameName: "Half-Life 2",
            gameImgLink: "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
        }
    ];
    await db.Walkthrough.create(demoWalkthroughs);
///////////////////////////////////////////////////////////////////////////////////

    // add some walkthroughs to user favorites

    // give robert some favorites
    // await db.User.findOneAndUpdate({ _id: robert._id }, { $push: { favs: aurora_wt_1._id } });

    // give sung some favorites
    // await db.User.findOneAndUpdate({ _id: sung._id }, { $push: { favs: sung_wt_3._id } });
    // await db.User.findOneAndUpdate({ _id: sung._id }, { $push: { favs: rob_wt_1._id } });

    // give aurora some favorites

    // give demo some favorites

    console.log('seeded!');

    mongoose.disconnect();

}

seed();
