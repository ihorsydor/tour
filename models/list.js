const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema({
  //niezmienne w zależności od dnia
  tripName: { type: String, required: [true, 'Pole tytuł jest wymagane'] },
  status: {type: String, enum: ['Zapytanie', 'Wstępnie potwierdzone', 'Potwierdzone'], default: 'Zapytanie'},//każde innym kolorem żeby było łatwo wzrokowo odróżnić, w filtrowaniu haczkiem odznaczamy co ma pokazywać
  client: { type: Schema.Types.ObjectId, ref: 'Client' }, //wybierane z listy, możliwość dopisania lub edytowania, wyświetla nazwę telefon i email
  direction: { type: String}, //wybierane z listy, możliwość dopisania lub edytowania (kraj/kreje, region/regione, miasto/miasta)
  numberOfPeople:{type: Number},
  notes: {type: String}, //notatki dotyczace wyjazdu, np specjalne życzenia
  folder: {type: String}, //otwiera folder zawierający dokumenty wyjazdu
  rout: { type: Array },  // ma wyliczać kilometry w mapach googla po wpisaniu punktów i kliknięciu
  tourLeader: { type: Schema.Types.ObjectId, ref: 'Tourleader' }, //wybierane z listy, możliwość dopisania lub edytowania, wyświetla nazwę telefon i email
  //ustalenie ilości dni
  beginning: { type: Date }, //wybierane z klendarza, domyślnie godzina 0.00
  end: { type: Date }, //wybierane z klendarza, domyślnie godzina 24.00, po ustaleniu daty rozwija dalej formularz z możliwością wypełnienia całego dnia
  days: {type: Number}, // jeżeli niepotwierdzona data to możemy wpisać ilość dni żeby można było wypełniać formularz, wpisując datę rzpoczęcia automatycznie wpisze końcową
  tripDays: [
    { 
      id:{ type: String },
       transport: {type: Schema.Types.ObjectId, ref: `Transport`},
    guide: {type: Schema.Types.ObjectId, ref: `Guide`}, //wyświetla godziny pracy
    hotel: { type: Schema.Types.ObjectId, ref: `Hotel` }, //na podstawie daty daje wybrać na każdą noc hotel, po kliknięciu w hotel wyskakują szczegóły
    restaurant: { type: Schema.Types.ObjectId, ref: `Restaurant` }, //ilość restauracji na poszczególny dzień może być też większa niż 0 i 1, możliwość dodania godzin posiłków - początek i koniec, rozróżnia obiad, kolacja i inne gastronomiczne
    other: {type: Schema.Types.ObjectId, ref: `Other` }, //ilość rezerwacji atrakcji na poszczególny dzień może być też większa niż 0, możliwość dodania godzin atrakcji - początek i koniec, różne typy atrakcji jak kapela, muzeum, przejażdżka tramwajem
    }
  ],

  //zmienne w zależności od dnia

  
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model('List', listSchema);

