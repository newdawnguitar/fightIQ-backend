const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create a schema

const FighterSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

const fighter = mongoose.model('fighters', FighterSchema);
module.exports = fighter;
