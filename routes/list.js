const express = require('express');
const router = express.Router();
const List = require('../models/list');

/* GET home page. */
router.get('/', (req, res) => {
  const search = req.query.search || '';

  const findList = List
    .find({ tripName: new RegExp(search.trim(), 'i') })
    .sort({ created: -1 });

  findList.exec((err, data) => {
    console.log('data list: ', data)
    console.log('ee', err)
    res.render('list', { tripName: 'List', data, search });
  });
});

module.exports = router;

