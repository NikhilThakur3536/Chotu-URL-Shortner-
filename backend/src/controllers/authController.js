import jwt from "jsonwebtoken";
import { User } from "../../Db.js";

const JWTSecret = "nikhilthakur3536123@";

// Signup function
export const signup = async (req, res) => {
  const { email, password, username } = req.body;

  await User.create({ email, password, username });

  res.json({ message: "You are logged in",});
};

// Signin function
export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });

  if (user) {
    const token = jwt.sign({ id: user._id.toString() }, JWTSecret);
    res.json({ token });
  } else {
    res.status(403).json({ message: "Incorrect ID and password" });
  }
};
