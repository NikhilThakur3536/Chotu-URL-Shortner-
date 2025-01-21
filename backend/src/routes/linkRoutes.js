import express from "express";
import { ShortUrl, redirect, userLinkArray } from "../controllers/linkController.js";
import useragent from "express-useragent";
import { auth } from "../middleware/authMiddleware.js";

const router = express.Router();


// Middleware to parse user-agent information
router.use(useragent.express());


router.get("/links", auth, userLinkArray);
// URL Shortening route
router.post("/shorten",auth, ShortUrl);


// Redirection route
router.get("/:shortID", redirect);

//Getting al links for logged in user


export default router;
