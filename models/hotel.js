const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hotelSchema = new Schema({
  name: { type: String, required: [true, 'Pole nazwa jest wymagane'] },
  address:{
    country: { type: String },
    city: { type: String },
    street: {type: String},
    location: { type: String, enum: ['Zapytanie', 'Wstępnie potwierdzone', 'Potwierdzone']}
  },
  contact: {
    emailMain: { type: String},
    telephoneMain: { type: String }
  },
  managers: [{
    id: {type: String},
    name: {type: String},
    inChargeOf: {type: String},
    telephone1: { type: String },
    email1: { type: String}
  }],

  tripName: { type: Schema.Types.ObjectId, ref: 'List' }, //daty rezerwacji i nazwy grup
  checkin: { type: Schema.Types.ObjectId, ref: 'List'},
  checkout: { type: Schema.Types.ObjectId, ref: 'List'},
  
  
});

module.exports = mongoose.model('Hotel', hotelSchema);