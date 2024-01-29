const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  id: { type: Schema.Types.ObjectId},
  address: { type: String, required: true },
  transaction_hash: { type: String, required: true },
  block_number: { type: Number, required: true },
  block_hash: { type: String, required: true },
  sender: { type: String, required: true },
  round: { type: Number, required: true },
  amount: { type: String, required: true },
  type: { type: String, required: true }
});

module.exports = mongoose.model('Event', EventSchema);
