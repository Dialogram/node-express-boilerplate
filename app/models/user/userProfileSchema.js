import mongoose from 'mongoose';

const UserProfileSchema = mongoose.Schema({
  firstName: {
          type: String,
          maxLength: 255,
  },
  lastName: {
          type: String,
          maxLength: 255,
  },
  birthDate: {
          type: Date,
  },

  // country: {
  //         type: null, // TODO countryModel
  // },
}, {
  strict: true,
  _id: false,
});

export default UserProfileSchema;
