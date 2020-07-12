const express = require('express');
const router = express.Router();
const Hotel = require('../models/hotel');
const List = require('../models/list');
const defaultSort = -1;

/* GET home page. */
router.get('/', (req, res) => {
  const search = req.query.search || '';
  let sort = req.query.sort || defaultSort;

  if (sort !== -1 || sort !== 1) {
    sort = defaultSort;
  }

  const findHotel = Hotel
    .find({ title: new RegExp(search.trim(), 'i') })
    .sort({ created: sort })
    .select(' title description');

  findHotel.exec((err, data) => {
    res.json(data);
  });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;

  const findHotel = Hotel
    .findById(id)
    .select(' title description');

  findHotel.exec((err, data) => {
    res.json(data);
  });
});
// list wycieczki

router.get('/', (req, res) => {
  const search = req.query.search || '';
  let sort = req.query.sort || defaultSort;

  if (sort !== -1 || sort !== 1) {
    sort = defaultSort;
  }

  const findList = List
    .find({ nazwa: new RegExp(search.trim(), 'i') })
    .sort({ created: sort })
    .select(' nazwa klient');

  findList.exec((err, data) => {
    res.json(data);
  });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;

  const findList = List
    .findById(id)
    .select(' nazwa klient');

  findList.exec((err, data) => {
    res.json(data);
  });
});

module.exports = router;
