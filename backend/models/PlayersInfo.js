const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayersInfochema = new Schema({
  id: { type: Schema.Types.ObjectId},
  address: { type: String, required: true },
  roundsInvolved: { type: Number, required: true },
  winningRounds: { type: Number, required: true },
  winningRate: { type: String, required: true },
  netPayout: { type: String, required: true },
  totalReward: { type: String, required: true },
  netPayoutToken: { type: Number, required: true },
  totalRewardToken: { type: Number, required: true }
});

module.exports = mongoose.model('PlayersInfo', PlayersInfochema);
