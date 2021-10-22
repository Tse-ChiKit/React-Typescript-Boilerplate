const setUser = (userObj: any) => ({
  type: 'SET_USER',
  payload: userObj,
});

const logOut = () => ({ type: 'LOG_OUT' });

export default {
  setUser,
  logOut,
};
