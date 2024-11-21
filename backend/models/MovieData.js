const mongoose=require('mongoose')
const movieSchema=mongoose.Schema({
    movieName:String,
    movieDirector:String,
    movieDescription:String,
    movieURL:String
})
const MovieData=mongoose.model('movie',movieSchema)
module.exports=MovieData;