const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://tulasikatukoju811:oUz7EAD30HDiGXVR@cluster-tulasi.heieaix.mongodb.net/DevTinder"
  );
};

module.exports = connectDB;
