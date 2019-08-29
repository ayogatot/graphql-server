const { model, Schema } = require("mongoose");

const orderSchema = new Schema({
  isDelivered: {
    type: Boolean,
    default: false
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  bookId: {
    type: Schema.Types.ObjectId,
    ref: "books"
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updateddAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = model("orders", orderSchema);
