require("dotenv").config();
const mongoose = require("mongoose");
const Movie = require("./models/Movie"); // Import your Movie model
const fs = require("fs");
const path = require("path");


// MongoDB Connection
const MONGODB_URI = process.env.MONGO_URI
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

// Load JSON Data
const movies = JSON.parse(fs.readFileSync(path.join(__dirname, "Sample_Movies_Records.json"), "utf-8"));

// Insert Data into MongoDB
async function seedDatabase() {
  try {
    await Movie.deleteMany(); // Optional: Clear existing data
    await Movie.insertMany(movies);
    console.log("✅ Movies imported successfully!");
    mongoose.connection.close();
  } catch (err) {
    console.error("❌ Error importing movies:", err);
  }
}

seedDatabase();
