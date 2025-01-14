import shortid from "shortid";
import { Link } from "../../Db.js";
import geoip from 'geoip-lite';

//URL Shortening Function
export const ShortUrl = async (req, res) => {
  const userId=req.userId;
  const { originalurl } = req.body;
  const shortID = shortid.generate(); // ShortId is generated
  
  try {
    if (!shortID) {
      return res.status(400).json({ error: 'Short ID could not be generated' });
    }
    console.log(userId);
    const newLink = await Link.create({
      userId:userId,
      originalurl: originalurl,
      shortID: shortID,
    });
    console.log(newLink);
    res.json(`http://localhost:3000/${shortID}`);
  } catch (error) {
    console.error("Error creating short URL:", error);
    res.status(500).json({ error: "Failed to create shortened URL" });
  }
};

//Shortened Url redirect and analytics logging function
export const redirect = async (req, res) => {  
  const { shortID } = req.params;

  try {
    const link = await Link.findOne({ shortID });
    if (!link) {
      return res.status(400).json({ error: "Link not found" });
    }

    const device = req.useragent.platform || "Unknown";
    const browser = req.useragent.browser || "Unknown";
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress || "Unknown";
    const location = geoip.lookup(ip) || { country: "Unknown" };
    
    console.log({ device, browser, ip, location });

    // Increment the clicks for the existing analytics entry or create a new one
    const analyticsIndex = link.analytics.findIndex(
      (entry) =>
        entry.deviceType === device &&
        entry.browser === browser &&
        entry.country === location.country
    );
    
    if (analyticsIndex !== -1) {
      // Increment the clicks for the existing analytics entry
      link.analytics[analyticsIndex].clicks += 1;
      link.analytics[analyticsIndex].timestamp = new Date();
      console.log(link.analytics)
    } else {
      // Push new analytics entry if no matching entry is found
      const analytics = {
        deviceType: device,
        browser,
        clicks: 1,
        country: location.country,
        timestamp: new Date(),
      };
      console.log(analytics)
      link.analytics.push(analytics);
    }

    await link.save();

    res.redirect(link.originalurl);
  } catch (error) {
    console.error("Error in redirect function:", error);
    res.status(500).json({ error: "Error processing request" });
  }
};

//Getting all the links and its data for a particular logged in user
export const userLinksData = async (req, res) => {
  try {
    const userId = req.userId;

    // Check if userId exists
    if (!userId) {
      return res.status(401).json({ error: "User not authorized" });
    }

    // Fetch user link data
    const userLinkData = await Link.find({ userId });

    // Check if data exists
    if (!userLinkData || userLinkData.length === 0) {
      return res.status(404).json({ error: "Nothing to show for the user" });
    }

    // Format the data
    // const formattedData = userLinkData.map((link, index) => {
    //   const totalClicks = link.analytics.reduce((sum, item) => sum + item.clicks, 0);
    //   return {
    //     serialNumber: index + 1,
    //     originalUrl: link.originalurl,
    //     shortUrl: link.shortID,
    //     totalClicks,
    //   };
    
     

    // Send the response
    res.status(200).json({ data: userLinkData });
  } catch (error) {
    // Catch and handle errors
    console.error("Error fetching user links:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

