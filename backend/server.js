  import express from "express";
  import mongoose from "mongoose";
  import cors from "cors";
  import useragent from "express-useragent";
  import authRoutes from "./src/routes/authRoutes.js";
  import linkRoutes from "./src/routes/linkRoutes.js";

  const app = express();

  // Middleware
  app.use(express.json());
  app.use(cors({
      origin: "http://localhost:5173", // Frontend URL
      methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
      credentials: true, // Allow cookies if needed
    }));
  app.use(useragent.express());

  // Connect to MongoDB
  mongoose.connect("mongodb+srv://new:RH0yK5z8c1NpE7b7@cluster0.x0drt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

  // Routes
  app.use("/auth", authRoutes);
  app.use("/", linkRoutes);

  // Server
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
