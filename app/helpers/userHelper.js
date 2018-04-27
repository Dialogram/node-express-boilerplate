class UserHelper {
  static getLastSession(user) {
    if (!user || !(user.sessions instanceof Array)) {
      return {};
    }

    return (user.sessions.slice(-1)[0] || {});
  }
}

export default UserHelper;
