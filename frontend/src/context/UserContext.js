/** @module Context */
import React, { useState } from 'react';
/**
 * Get from local storage values about user. If don't have a values in local storage, set default values. Be careful is for internal use.
 * @name getUserFromLocalStore
 * @function getUserFromLocalStore
 * @example
 * const user = getUserFromLocalStore();
 * console.log(user);
 * @returns {User} Object {id: "", token:"", email:"", isLogged: false}
 */
const getUserFromLocalStore = () => {
  if (localStorage.getItem('user')) {
    return JSON.parse(localStorage.getItem('user'));
  }
  return {
    id: '',
    token: '',
    email: '',
    isLogged: false,
  };
};
/**
 * Const for createContext from React.
 * @name UserContext
 * @const
 * @returns {User} Object {id: "", token:"", email:"", isLogged: false}
 */
const UserContext = React.createContext(getUserFromLocalStore());
/**
 * Component to set context on APP. It's a provider for UserContext.
 * @name UserContextProvider
 */
export function UserContextProvider({ children }) {
  const [user, setUser] = useState(getUserFromLocalStore());
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
