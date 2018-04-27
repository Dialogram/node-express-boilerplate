import mongoose from 'mongoose';

import UserSessionSchema from 'models/user/userSessionSchema';
import UserProfileSchema from 'models/user/userProfileSchema';

const UserSchema = mongoose.Schema({
  nickName: {
          type: String,
          unique:  true,
          required: true,
  },
  profile: {
          type: UserProfileSchema,
  },
  email: {
          type: String,
          unique: true,
          required: true,
          match: /@/i,
  },
  password: {
          type: String,
          required: true,
          minLength: 6,
          maxLength: 18,
  },

  sessions: {
          type: [UserSessionSchema],
          default: [],
  },
}, {
  strict: true,
});

const User = mongoose.model('User', UserSchema);

export default User;
