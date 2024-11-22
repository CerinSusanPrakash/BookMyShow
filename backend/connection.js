// const mongoose=require('mongoose');
// mongoose.connect('mongodb+srv://cerin-susan:cerinsusan@clusternew.aalc9so.mongodb.net/bookmyshowDB?retryWrites=true&w=majority&appName=ClusterNew').then(()=>{
//     console.log('DB is connected')
// }).catch((error)=>{
//     console.log('Error in connection')
// })
const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://cerin-susan:cerinsusan@clusternew.aalc9so.mongodb.net/bookmyshowDB?retryWrites=true&w=majority&appName=ClusterNew";

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Database connected successfully");
}).catch((error) => {
    console.error("Database connection failed:", error.message);
});

module.exports = mongoose;
