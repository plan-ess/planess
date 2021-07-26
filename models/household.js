const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const householdSchema = new Schema({
  username: String,
  name: String,
  pin: Number,
  checked: Boolean,
  basket: [{
    type: Schema.Types.ObjectId,
    ref: "Item"
  }],
  members: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }],

});

const Household = model("Household", householdSchema);

module.exports = Household;
