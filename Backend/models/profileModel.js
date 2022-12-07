const mongoose = require('mongoose');

const profileSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'Please add your name'],
    },
    deceasedFirstName: {
      type: String,
      required: [true, 'Please add deceased first name'],
    },
    deceasedLastName: {
      type: String,
      required: [true, 'Please add deceased last name'],
    },
    birthDate: {
      type: Date,
      required: [true, 'Please pick a date'],
    },
    deathDate: {
      type: Date,
      required: [true, 'Please pick a date'],
    },
    email: {
      type: String,
      required: [true, 'Please add your email'],
    },
    memoryName: {
      type: [String],
      required: [true, 'Please add your name'],
    },
    deceasedRelation: {
      type: [String],
      required: [true, 'Please add your realtion to deceased'],
    },
    deceasedMsg: {
      type: [String],
      required: [true, 'Please add a message'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Profile', profileSchema);
