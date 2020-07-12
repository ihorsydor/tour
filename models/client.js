const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
  title: { type: String, required: [true, 'Pole tytuł jest wymagane'] },
  description: { type: String, required: [true, 'Pole opis jest wymagane'] },
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Client', clientSchema);

