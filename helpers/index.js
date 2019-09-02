const jwt = require("jsonwebtoken");

module.exports = {
  checkAuth: context => {
    const authHeader = context.req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split("Bearer ")[1];
      if (token) {
        try {
          const user = jwt.verify(token, process.env.SECRET_KEY);
          return user;
        } catch (err) {
          throw new Error("Invalid or Expired Token !");
        }
      }
      throw new Error("Authentication token is wrong format");
    }
    throw new Error("Authentication Headers is needed ");
  }
};
