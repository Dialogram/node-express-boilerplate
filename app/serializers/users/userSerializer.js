import ProfileSerializer from 'serializers/users/profileSerializer';

const userSerializer = (user) => {
  if (!user) {
    return {};
  }

  const data = {
    type: 'user',

    id: user.id,
    nickName: user.nickName,
    profile: ProfileSerializer(user.profile),
    email: user.email,
  };

  return data;
};

export default userSerializer
