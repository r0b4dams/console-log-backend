const mongoose = require("mongoose");

const db = require("../models");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/proj3db", {
     useNewUrlParser: true ,
     useUnifiedTopology: true
    });

// const seed = async ()=>{
//     const donut1 = await db.Donut.create({
//         name:"Boston Creme",
//         hasNuts:false,
//         price:2.99
//     })
//     const donut2 = await db.Donut.create({
//         name:"Maple Bar",
//         hasNuts:false,
//         price:3.99
//     })
//     const donut3 = await db.Donut.create({
//         name:"Peanut",
//         hasNuts:true,
//         price:2.99
//     })

//     const customer = await db.Order.create({
//         customerName:"Rick",
//         donuts:[donut1._id,donut2._id,donut3._id]
//     })
    // console.log('seeded')
// }

seed()