import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  const { token } = req.headers;
  
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Not Authorized, Login Again" });
  }

  try {
    const decoded_token = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = decoded_token.id;
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default authUser;
