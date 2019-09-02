const brcyptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../../models/User");

const generateToken = payload => {
  return jwt.sign(
    {
      id: payload.id,
      email: payload.email,
      username: payload.username
    },
    process.env.SECRET_KEY,
    { expiresIn: "3h" }
  );
};

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

      const token = generateToken(saveUser);

      return {
        ...saveUser._doc,
        id: saveUser.id,
        token
      };
    },
    login: async (_, { username, password }) => {
      try {
        if (username === "" || password === "") {
          return new Error("Username or Password can't to be empty");
        }
        const user = await User.findOne({ username });
        if (!user) {
          return new Error("User is not found");
        }

        const isMatch = await brcyptjs.compare(password, user.password);
        if (!isMatch) {
          return new Error("Wrong password");
        }

        const token = generateToken(user);
        return {
          ...user._doc,
          id: user.id,
          token
        };
      } catch (err) {
        return new Error(err);
      }
    }
  }
};
