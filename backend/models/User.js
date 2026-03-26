// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   role: { type: String, enum: ['student', 'alumni'], required: true },
//   verified: { type: Boolean, default: false },

//   // 🧾 Alumni Profile Fields
//   fullName: { type: String },
//   phone: { type: String },
//   yearOfPassing: { type: Number },
//   company: { type: String },
//   designation: { type: String },
//   location: { type: String },
//   linkedIn: { type: String },

//   // 🖼️ Add this field to store image URL
//   imageUrl: { type: String }
// });

// module.exports = mongoose.model('User', userSchema);




// ---------------------------------------------------------------------



const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String }, // optional for CSV users
    role: { type: String, enum: ['student', 'alumni'], required: true },
    is_verified: { type: Boolean, default: true },

    // 🧾 Alumni Profile Fields (PRIMARY)
    fullName: { type: String },
    yearOfPassing: { type: String },

    // 🧾 CSV COMPATIBILITY FIELDS (SECONDARY)
    name: { type: String },          // CSV: name
    year: { type: String },          // CSV: year
    branch: { type: String },        // CSV: branch

    phone: { type: String },
    company: { type: String },
    designation: { type: String },
    location: { type: String },
    linkedIn: { type: String },

    imageUrl: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
