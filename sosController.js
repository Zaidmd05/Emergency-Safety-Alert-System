const SosRequest = require('../models/SosRequest');

exports.sendSOS = async (req, res) => {
  try {
    const sos = await SosRequest.create(req.body);
    res.json({ success: true, sos });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSOSList = async (req, res) => {
  const list = await SosRequest.find().sort({ timestamp: -1 });
  res.json(list);
};
