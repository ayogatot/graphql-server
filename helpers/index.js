const jwt = require("jsonwebtoken");

module.exports = {
  checkAuth: context => {
    const authHeader = context.req.headers.authorization;

    if (authHeader) {
      const token = authHeader.split(" ")[1];
      if (token) {
        try {
          const user = jwt.verify(token, process.env.SECRET_KEY);
          return user;
        } catch (err) {
          return new Error("Invalid or Expired Token !");
        }
      }
      return new Error("Authentication token is wrong format");
    }
    return new Error("Authentication Headers is needed ");
  }
};
