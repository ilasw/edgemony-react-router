export const useLoggedIn = () => {
  const isLogged = localStorage.getItem('RRUser');
  return Boolean(isLogged);
};
