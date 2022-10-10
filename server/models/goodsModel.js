const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GoodsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  image2: {
    type: String,
  },
  image3: {
    type: String,
  },
  name:{
    type: String
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },

});

module.exports = mongoose.model("Goods", GoodsSchema);