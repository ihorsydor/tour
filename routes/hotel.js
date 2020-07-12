const express = require('express');
const router = express.Router();
const Hotel = require('../models/hotel');

/* GET home page. */
router.get('/', (req, res) => {
  const search = req.query.search || '';

  const findHotel = Hotel
    .find({ title: new RegExp(search.trim(), 'i') })
    .sort({ created: -1 });

  findHotel.exec((err, data) => {
    res.render('hotel', { title: 'Hotel', data, search });
  });
});

module.exports = router;
