const mongoose = require("mongoose");

// Define the User Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: {
    type: [String],
    default: ["user"], // Default role as 'user'
  },
  profile: {
    firstName: String,
    lastName: String,
    age: {
      type: Number,
      min: 0, // Age should be a positive number
    },
  },
  lastLogin: {
    type: Date,
    default: null, // Null until the user logs in
  },
});

// Export the model
const User = mongoose.model("User", userSchema);
module.exports = User;