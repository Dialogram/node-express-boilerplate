import UserHelper from 'helpers/userHelper';

const sessionSerializer = ({ user, session } = {}) => {
  if (!session && !user) {
    return {};
  }
  if (!session &&
    (session = UserHelper.getLastSession(user)) == {}) {
      return {};
  }

  const data = {
    type: 'session',

    token: session.token,
    deviceName: session.deviceName,
  };
  if (user) {
    data.user = user.id;
  }

  return data;
};

export default sessionSerializer
