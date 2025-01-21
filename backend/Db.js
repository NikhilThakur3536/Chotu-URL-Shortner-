import mongoose from "mongoose";
const Schema= mongoose.Schema;

const UsersSchema= new Schema({
    email: String,
    password: String,
    username: String
})
const LinkSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    originalurl: { type: String, required: true },
    shortID: {type:String, required: true},
    qrCode: { type: String },
    analytics: [{
      deviceType: String,
      browser: String,
      clicks: { type: Number, default: 1 },
      country: String,
      timestamp: { type: Date, default: Date.now },
    }],
  });
const User = mongoose.model("User", UsersSchema);  // Model for Users
const Link = mongoose.model("Link", LinkSchema);  // Model for Link
// Export the Models
export{User,Link};