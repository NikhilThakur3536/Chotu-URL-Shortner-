import jwt from "jsonwebtoken";

const JWTSecret = "nikhilthakur3536123@";

export const auth = (req, res, next) => {
  const token = req.headers.token;
  try {
    const decodedData = jwt.verify(token, JWTSecret);
    req.userId = decodedData.id;
    next();
  } catch (error) {
    res.status(403).json({ message: "Incorrect credentials" });
  }
};
