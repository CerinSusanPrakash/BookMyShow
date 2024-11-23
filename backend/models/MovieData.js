const mongoose=require('mongoose')
const movieSchema=mongoose.Schema({
    movieName:String,
    movieDirector:String,
    movieDescription:String,
    movieURL:String
})
const MovieData=mongoose.model('movie',movieSchema)
module.exports=MovieData;

// const mongoose = require("mongoose");

// const movieSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true,
//     },
//     director: {
//         type: String,
//         required: true,
//     },
//     releaseYear: {
//         type: Number,
//         required: true,
//     },
//     genre: {
//         type: String,
//         required: true,
//     },
//     rating: {
//         type: Number,
//         required: true,
//         min: 0,
//         max: 10,
//     }
// }, { timestamps: true });

// module.exports = mongoose.model("movie", movieSchema);
