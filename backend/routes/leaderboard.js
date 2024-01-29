const express = require('express');
const router = express.Router();

const PlayersInfo = require('../models/PlayersInfo');

router.get(
  '/getTopEightPlayers',
  async (req, res) => {
    PlayersInfo.find().sort({ netPayoutToken: -1 }).limit(8).then((result) => {
        const data = JSON.stringify(result);
        res.send(data);
    }).catch((err) => {
        console.log(err);
    })
  }
);

router.get(
  '/getAllPlayers',
  async (req, res) => {
    PlayersInfo.find().sort({ netPayoutToken: -1}).then((result) => {
        const data = JSON.stringify(result);
        res.send(data);
    }).catch((err) => {
        console.log(err);
    })
  }
);

router.get(
  '/getPlayerByWalletAddr',
  async (req, res) => {
    PlayersInfo.findOne({ address: req.query.address}).then((result) => {
        const data = JSON.stringify(result);
        res.send(data);
    }).catch ((err) => {
        console.log(err);
    })
  }
);

module.exports = router;