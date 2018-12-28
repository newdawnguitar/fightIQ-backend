const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create a schema

const FightEventSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  organization: {
    type: String,
    required: true
  },
  fighterA:{
    type: Schema.Types.ObjectId,
    ref: 'Fighter'
  },
  fighterB:{
    type: Schema.Types.ObjectId,
    ref: 'Fighter'
  }
});

const fightEvent = mongoose.model('fightevents', FightEventSchema);
module.exports = fightEvent;
