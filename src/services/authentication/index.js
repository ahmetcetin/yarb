export const AuthenticationService = component => {
  const user = { name: 'Ahmet Cetin', acl: ['Page1'] };
  const isAuthenticated = user.acl.includes(component);
  return { isAuthenticated, name: 'Ahmet Cetin' };
};
