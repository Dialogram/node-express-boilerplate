import User from 'models/user/user';

class UserManager {
  static async findById(userId) {
    const user = await User.findById(userId);

    return user;
  }

  static async findByEmail(userEmail) {
    const user = await User.findOne({
      email: userEmail,
    });
    return user;
  }
}

export default UserManager;
