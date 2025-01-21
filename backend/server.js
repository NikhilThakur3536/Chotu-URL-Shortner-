import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import useragent from "express-useragent";
import authRoutes from "./src/routes/authRoutes.js";
import linkRoutes from "./src/routes/linkRoutes.js";
import dotenv from "dotenv"; // Import dotenv

dotenv.config(); // Load .env file

const app = express();
const mongoUrl = process.env.MONGO_URL;

// Middleware
app.use(express.json());

// // CORS configuration
// const corsOptions = {
//   origin: "http://chotu-url-shortner-fuvd.vercel.app/", // Frontend URL
//   methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
//   allowedHeaders: ["Content-Type", "Authorization"],
//   credentials: true, // Allow cookies if needed
// };
app.use(cors());

// Handle preflight (OPTIONS) requests
// app.options("*", cors(corsOptions));

// User-agent middleware
app.use(useragent.express());

// Connect to MongoDB
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

// Routes
app.use("/auth", authRoutes);
app.use("/", linkRoutes);

// Server
const PORT = 3000;//hyyy
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
