const express = require("express");
const cors = require("cors");
require("./connection"); // Ensure this file connects to the database correctly
const movieModel = require("./models/MovieData");

const app = express();
// const appb = express();
// appb.use(express.json());
// app.use(cors({
//     origin: ["https://book-my-show-frt.vercel.app/add"], // Add all allowed origins
//     methods: ["GET", "DELETE", "POST", "PUT"],
//     credentials: true,
// }));
const PORT = process.env.PORT || 5000; // Use environment variable for the port

// Middleware
app.use(cors({
    origin: ["https://book-my-show-frt.vercel.app/add","https://book-my-show-frt.vercel.app"], // Add all allowed origins
    methods: ["GET", "DELETE", "POST", "PUT"],
    credentials: true,
}));
app.use(express.json()); // Parse incoming JSON requests

// Default Route
app.get("/", (req, res) => {
    res.json({ message: "Backend is working" });
});

// Add Movie
app.post('/addmovies', async (req, res) => {
  const startTime = Date.now(); // Start timer
  try {
    const movie = new movieModel(req.body);
    await movie.save();
    const endTime = Date.now(); // End timer
    console.log(`Request processed in ${endTime - startTime}ms`);
    res.status(201).json({ message: 'Movie added successfully' });
  } catch (error) {
    const endTime = Date.now(); // End timer
    console.error(`Request failed after ${endTime - startTime}ms`);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
});


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
// app.post("/addmovies", async (req, res) => {
//     try {
//         const { movieName, movieDirector } = req.body;

//         // Validate input
//         if (!movieName || !movieDirector) {
//             return res.status(400).json({ message: "Missing required fields" });
//         }

//         const movie = new movieModel(req.body); // Create new movie document
//         const savedMovie = await movie.save(); // Save to database
//         res.status(201).json({ message: "Movie added successfully", data: savedMovie });
//     } catch (error) {
//         console.error("Error adding movie:", error.message || error);
//         res.status(500).json({ message: "Internal server error", error: error.message });
//     }
// });


// app.post('/addmovies', async (req, res) => {
//   try {
//     console.log("Received data:", req.body); // Log incoming data
//     if (!req.body.movieName || !req.body.movieDirector) {
//       console.log("Missing required fields");
//       return res.status(400).json({ message: 'Missing required fields' });
//     }

//     const movie = new movieModel(req.body); // Save incoming data
//     const savedMovie = await movie.save();
//     console.log("Movie saved successfully:", savedMovie);
//     res.status(201).json({ message: 'Movie added successfully', data: savedMovie });
//   } catch (error) {
//     console.error("Error in /addmovies:", error.message || error);
//     res.status(500).json({ message: 'Internal server error', error: error.message });
//   }
// });


// Get All Movies
app.get("/movie", async (req, res) => {
    try {
        const movies = await movieModel.find();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ error: "Error fetching movies", details: error.message });
    }
});

// Edit Movie
app.put("/editmovie/:id", async (req, res) => {
    try {
        const updatedMovie = await movieModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedMovie) return res.status(404).json({ message: "Movie not found" });

        res.status(200).json({ message: "Movie updated successfully", data: updatedMovie });
    } catch (error) {
        console.error("Error updating movie:", error.message || error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
});

// Delete Movie
app.delete("/deletemovie/:id", async (req, res) => {
    try {
        const deletedMovie = await movieModel.findByIdAndDelete(req.params.id);
        if (!deletedMovie) return res.status(404).json({ message: "Movie not found" });

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
