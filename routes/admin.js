const express = require('express');
const Hotel = require('../models/hotel');
const List = require('../models/list');

const router = express.Router();

router.all('*', (req, res, next) => {
  if (!req.session.admin) {
    res.redirect('login');

    return;
  }

  next();
});

/* GET home page. */

router.get('/', async (req, res) => {
    const hotelData = await Hotel.find({});
    const listData = await List.find({});

    const data = { hotelData, listData }
    res.render('admin/index', { title: 'hotel', data });
});

router.get('/hotel/add', (req, res) => {
  res.render('admin/hotel-form', { title: 'Dodaj hotel', body: {}, errors: {} });
});

router.post('/hotel/add', (req, res) => {
  const body = req.body;

  const hotelData = new Hotel(body);
  const errors = hotelData.validateSync();

  hotelData.save((err) => {
    if (err) {
      res.render('admin/hotel-form', { title: 'Dodaj hotel', errors, body });
      return;
    }

    res.redirect('/admin')
  });
});

router.get('/hotel/delete/:id', (req, res) => {
  Hotel.findByIdAndDelete(req.params.id, (err) => {
    res.redirect('/admin')
  })
});


//spis wycieczek

// router.get('/', (req, res) => {
//   List.find({}, (err, data) => {
//     console.log('list find', data)
//     res.render('admin/index', {title: 'List', data });
//   });
// });

router.get('/list/add', (req, res) => {
  res.render('admin/list-form', { tripName: 'Dodaj wycieczkę', body: {}, errors: {} });
});

router.post('/list/add', (req, res) => {
  const body = req.body;
  const listData = new List(body);
  const errors = listData.validateSync();

  listData.save((err) => {
    if (err) {
      res.render('admin/list-form', { tripName: 'Dodaj wycieczkę', errors, body });
      return;
    }

    res.redirect('/admin')
  });
});

router.get('/list/delete/:id', (req, res) => {
  List.findByIdAndDelete(req.params.id, (err) => {
    res.redirect('/admin')
  })
});






module.exports = router;
