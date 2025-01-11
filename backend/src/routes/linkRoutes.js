import express from "express";
import { ShortUrl, redirect } from "../controllers/linkController.js";
import useragent from "express-useragent";
import { auth } from "../middleware/authMiddleware.js";

const router = express.Router();

// Middleware to parse user-agent information
router.use(useragent.express());

// URL Shortening route
router.post("/shorten",auth, ShortUrl);

// Redirection route
router.get("/:shortID", redirect);

export default router;
