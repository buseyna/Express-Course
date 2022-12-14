const jwt = require("jsonwebtoken");
const models = require("../models/index");
const bcrypt = require("bcryptjs");

var authService = {
    //generate a new token for the user
 signUser: (user) => {
  const token = jwt.sign(
   {
    // this object will be saved in the token payload
    id: user.id,
    email: user.email,
   },
   process.env.JWT_SECRET, // this will read from the .env file a key named JWT_SECRET and will take the value
   {
    expiresIn: "1h",
   }
  );
  return token;
 },
 verifyUser: (req, res, next) => {
  try {
   // take out the jwt we've set in the cookie set
   const token = req?.cookies?.jwt;
   // return error if token is undefined
   if (!token)
    return res
     .status(401)
     .send({ auth: false, message: "No token provided." });
   // verify the token
   jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    // return an error if there was an issue verifying the token
    if (err) {
     return res.status(401).send({ auth: false, message: "unauthorized" });
    } else {
     // set the user data to the req obj using the decoded token payload
     req.user = {
      id: decoded.id,
      email: decoded.email,
      token: token,
     };
     // call the next middleware
     next();
    }
   });
  } catch (err) {
   console.log(err);
   return null;
  }
 },
 hashPassword: function (plainTextPassword) {
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(plainTextPassword, salt);
  return hash;
 },
 comparePasswords: function (plainTextPassword, hashedPassword) {
  return bcrypt.compareSync(plainTextPassword, hashedPassword);
 },
};

module.exports = authService;