const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const itemSchema = new Schema({
  name: String,
  quantity: Number,
  quantityType: String,
  addedAt: {
    type: Date,
    default: new Date
  },
  urgent: {
    type: Boolean,
    default: false
  },
  addedBy: String
});

const Item = model("Item", itemSchema);

module.exports = Item;
