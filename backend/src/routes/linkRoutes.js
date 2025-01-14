import express from "express";
import { ShortUrl, redirect, userLinksData } from "../controllers/linkController.js";
import useragent from "express-useragent";
import { auth } from "../middleware/authMiddleware.js";

const router = express.Router();

// Middleware to parse user-agent information
router.use(useragent.express());

// URL Shortening route
router.post("/shorten",auth, ShortUrl);

// Redirection route
router.get("/:shortID", redirect);

//Getting al links for logged in user
router.get("/links", auth, userLinksData);

export default router;
