import jwt from "jsonwebtoken";
import config from "config";

const auth = function (req, res, next) {
  //get token from header
  const token = req.header("x-auth-token");
  //check if not token
  if (!token) {
    return res.status(401).json({
      msg: "no token , authorization denied",
    });
  }

  try {
    const decoded = jwt.verify(token, config.get("JWTsecret"));
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({
      msg: "token not valid",
    });
  }
};

export { auth };
