  import express from "express";
  import mongoose, { mongo } from "mongoose";
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
  app.use(cors({
      origin: "https://chotu-url-shortner-fuvd.vercel.app", // Frontend URL
      methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
      credentials: true, // Allow cookies if needed
    }));
  app.use(useragent.express());

  // Connect to MongoDB
  mongoose.connect(mongoUrl)
  // Routes
  app.use("/auth", authRoutes);
  app.use("/", linkRoutes);

  // Server
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
