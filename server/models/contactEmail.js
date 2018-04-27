var mongoose = require('mongoose');

var ContactEmail = mongoose.model('ContactEmail', {
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    minlength: 1,
    trim: true
  },
  date: {
    type: Date,
    required: true
  }
});

module.exports = {
  ContactEmail
};
