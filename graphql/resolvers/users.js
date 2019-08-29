const brcyptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../../models/User");

module.exports = {
  Mutation: {
    register: async (
      _,
      { registerInput: { username, password, confirmPassword, email } },
      context,
      info
    ) => {
      // Check the password is same or not
      // if same then encrypt that password
      if (!(password === confirmPassword)) {
        return new Error("Your Password is Not Same");
      } else {
        password = await brcyptjs.hash(password, 5);
      }

      const newUser = new User({
        email,
        password,
        username,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
      const saveUser = await newUser.save();

      const token = jwt.sign(
        {
          id: saveUser.id,
          email: saveUser.email,
          username: saveUser.username
        },
        process.env.SECRET_KEY,
        { expiresIn: "3h" }
      );

      return {
        ...saveUser._doc,
        id: saveUser.id,
        token
      };
    }
  }
};
