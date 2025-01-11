import shortid from "shortid";
import { Link } from "../../Db.js";
import geoip from 'geoip-lite';

//URL Shortening Function
export const ShortUrl = async (req, res) => {
  const { originalurl } = req.body;
  const shortID = shortid.generate(); // ShortId is generated
  
  try {
    if (!shortID) {
      return res.status(400).json({ error: 'Short ID could not be generated' });
    }

    const newLink = await Link.create({
      originalurl: originalurl,
      shortID: shortID,
    });

    res.json(`http://localhost:3000/${shortID}`);
  } catch (error) {
    console.error("Error creating short URL:", error);
    res.status(500).json({ error: "Failed to create shortened URL" });
  }
};

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
