var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/smilek', {useNewUrlParser: true,useUnifiedTopology: true });

var stuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sex: {
        type: Number,
        default: 0,
        enum:[0,1]
    },
    age: {
        type: Number,
        required: true
    },
    hobbies: {
        type: String,
        required: true
    }
  });

  module.exports = mongoose.model('Student', stuSchema);