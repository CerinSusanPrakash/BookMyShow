const express = require("express");
const cors = require("cors");
require("./connection"); // Ensure this file connects to the database correctly
const movieModel = require("./models/MovieData");

const app = express();
const PORT = process.env.PORT || 5000; // Use environment variable for the port

// Middleware
app.use(cors({
    origin: ["https://book-my-show-frt.vercel.app", "https://book-my-show-frt.vercel.app/add"], // Add all allowed origins
    methods: ["GET", "DELETE", "POST", "PUT"],
    credentials: true,
}));
app.use(express.json()); // Parse incoming JSON requests

// Default Route
app.get("/", (req, res) => {
    res.json({ message: "Backend is working" });
});

// Add Movie
app.post("/addmovies", async (req, res) => {
    try {
        const { movieName, movieDirector } = req.body;

        // Validate input
        if (!movieName || !movieDirector) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const movie = new movieModel(req.body); // Create new movie document
        const savedMovie = await movie.save(); // Save to database
        res.status(201).json({ message: "Movie added successfully", data: savedMovie });
    } catch (error) {
        console.error("Error adding movie:", error.message || error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
});

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
