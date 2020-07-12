const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  name: { type: String, required: [true, 'Pole tytuł jest wymagane'] },
  country: { type: String, required: [true, 'Pole opis jest wymagane'] },
  city: { type: String, required: [true, 'Pole opis jest wymagane'] },
  location: { type: String},
  groupname: { type: String},
  mealdate: { type: Date},
  mealtime: { type: Date},
  duration: { type: Date},
  menu: { type: String},
  specilaOrders: {type: String},
  address: { type: String},
  telephoneMain: { type: Number },
  telephone2: { type: Number },
  telephone3: { type: Number },
  emailMain: { type: String},
  email2: { type: String},
  email3: { type: String},
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Restaurant', restaurantSchema);