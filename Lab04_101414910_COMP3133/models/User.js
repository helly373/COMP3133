const mongoose = require("mongoose");

const phoneValidator = (val) => /^1-\d{3}-\d{3}-\d{4}$/.test(val);

const zipValidator = (val) => /^\d{5}-\d{4}$/.test(val);

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    minlength: [4, "Username must be at least 4 characters long"]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"]
  },
  city: {
    type: String,
    required: [true, "City is required"],
    match: [/^[A-Za-z\s]+$/, "City must only contain alphabets and spaces"]
  },
  website: {
    type: String,
    required: [true, "Website is required"],
    match: [/^(http|https):\/\/[^\s$.?#].[^\s]*$/, "Invalid website URL"]
  },
  zip: {
    type: String,
    required: [true, "ZIP code is required"],
    validate: [zipValidator, "ZIP code must be in the format DDDDD-DDDD"]
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    validate: [phoneValidator, "Phone number must be in the format 1-DDD-DDD-DDDD"]
  }
});

module.exports = mongoose.model("User", userSchema);
