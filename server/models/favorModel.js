const mongoose = require('mongoose');

const favorSchema = mongoose.Schema({
     title: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true
      },
      image: {
        type: String,
      },
      id: {
        type: String,
        required: true
      },
},
{
    timestamps : true
})

module.exports = mongoose.model('Favor', favorSchema);