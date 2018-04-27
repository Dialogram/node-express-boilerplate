import mongoose from 'mongoose';

const UserSessionSchema = mongoose.Schema({
  token: {
          type: String,
          required: true,
  },
  deviceName: {
          type: String,
          minLength: 1,
          maxLength: 64,
          default: 'Unknown',
          required: true,
  },
}, {
  strict: true,
  _id: false,
});

export default UserSessionSchema;
