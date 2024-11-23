// const express=require('express')
// const app=new express();
// require('./connection');
// const cors=require('cors')
// const movieModel=require('./models/MovieData')
// // app.use(cors());
// app.use(cors(
//   {
//     origin: ["https://book-my-show-frt.vercel.app"],
//     methods: ["POST", "GET"],
//     credentials: true
//   }
// ));
// app.use(express.json());

// app.get('/',(req,res)=>{
//   res.json("Backend working");
// })

// app.post('/addmovies',async(req,res)=>{
//     try {
//         var item=req.body;
//         const data_add=new movieModel(item);
//         const data=await data_add.save();
//         res.send('Post sucessful')
//     } catch (error) {
//         console.log(error)
//     }
// })
// app.get('/movie',async(req,res)=>{
//     try {
//         const data=await movieModel.find();
//         res.send(data);
//     } catch (error) {
//         console.log(error)
//     }
// })
// app.put('/editmovie/:id',async(req,res)=>{
//     try {
//         const data=await movieModel.findByIdAndUpdate(req.params.id,req.body)
//         res.send('Updated Sucessfully')
//     } catch (error) {
//         console.log(error)
//     }
// })
// app.delete('/deletemovie/:id',async(req,res)=>{
//     try {
//         const data=await movieModel.findByIdAndDelete(req.params.id)
//         res.send('Deleted sucessfully')
//     } catch (error) {
//         console.log(error)
//     }
// })


// app.listen(5000,()=>{
//     console.log('Server is running on PORT 5000')
// })


const express = require("express");
const cors = require("cors");
require("./connection");
const movieModel = require("./models/MovieData");

const app = express();
const PORT = process.env.PORT || 5000; // Use environment variable for port

// Middleware
app.use(cors({
    origin: ["https://book-my-show-frt.vercel.app","https://book-my-show-frt.vercel.app/add"], // Replace with your frontend URL
    methods: ["GET", "DELETE","POST", "PUT"],
    credentials: true
}));
// app.use(cors({
//     origin: ["https://book-my-show-frt.vercel.app/add"], // Replace with your frontend URL
//     methods: ["POST", "PUT"],
//     credentials: true
// }));
// app.use(express.json()); // Parse incoming JSON requests

// Default Route
app.get("/", (req, res) => {
    res.json({ message: "Backend is working" });
});

// Add Movie
// app.post("/addmovies", async (req, res) => {
//     try {
//         const item = req.body;
//         const data_add = new movieModel(item);
//         const data = await data_add.save();
//         res.status(201).json({ message: "Movie added successfully", data });
//     } catch (error) {
//         res.status(500).json({ error: "Error adding movie", details: error.message });
//     }
// });

// app.post('/addmovies', async (req, res) => {
//   try {
//     const item = req.body;
//     const data_add = new movieModel(item);
//     await data_add.save();
//     res.status(201).send('Post successful');
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server Error');
//   }
// });

app.use(express.json());
// app.post('/addmovies', async (req, res) => {
//   try {
//     const movie = new MovieModel(req.body); // Assuming a Mongoose model
//     await movie.save();
//     res.status(201).json({ message: 'Movie added successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error adding movie', error });
//   }
// });
// app.post('/addmovies', async (req, res) => {
//   try {
//     if (!req.body.movieName || !req.body.movieDirector) {
//       return res.status(400).json({ message: 'Missing required fields' });
//     }

//     // Assuming Mongoose model for movies
//     const movie = new MovieModel(req.body);
//     await movie.save();

//     res.status(201).json({ message: 'Movie added successfully' });
//   } catch (error) {
//     console.error('Error adding movie:', error.message || error);
//     res.status(500).json({ message: 'Internal server error', error });
//   }
// });

app.post('/addmovies',async(req,res)=>{
    try {
        var item=req.body;
        const data_add=new movieModel(item);
        const data=await data_add.save();
        res.send('Post sucessful')
    } catch (error) {
        console.log(error)
    }
})



// Get All Movies
app.get("/movie", async (req, res) => {
    try {
        const data = await movieModel.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Error fetching movies", details: error.message });
    }
});

// Edit Movie
// app.put("/editmovie/:id", async (req, res) => {
//     try {
//         const data = await movieModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         res.status(200).json({ message: "Movie updated successfully", data });
//     } catch (error) {
//         res.status(500).json({ error: "Error updating movie", details: error.message });
//     }
// });

app.put('/editmovie/:id', async (req, res) => {
  try {
    const data = await movieModel.findByIdAndUpdate(req.params.id, req.body);
    if (!data) return res.status(404).send('Movie not found');
    res.send('Updated Successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});


// Delete Movie
app.delete("/deletemovie/:id", async (req, res) => {
    try {
        await movieModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Movie deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting movie", details: error.message });
    }
});

// Handle Undefined Routes
app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
