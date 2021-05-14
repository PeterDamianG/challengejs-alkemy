import React, { useContext } from 'react';
import { Button } from '@chakra-ui/react';
import { useLocation } from 'wouter';
import UserContext from 'context/UserContext';
import RecordsContext from 'context/RecordsContext';
/**
 * LogoutButton is the button to log-out user and remove localstorage and context data.
 * @name LogoutButton
 * @component
 * @category Layout
 * @subcategory Button
 * @example
 * <LogoutButton setUser={setUser} />
 * @returns Return a component of React.
 */
const LogoutButton = () => {
  // Get Context setters.
  const { setUser } = useContext(UserContext);
  const { setRecords } = useContext(RecordsContext);
  const [, setLocation] = useLocation();
  // Function to remove.
  const removeData = () => {
    localStorage.removeItem('user');
    setUser({
      id: '',
      token: '',
      email: '',
      isLogged: false,
    });
    localStorage.removeItem('records');
    setRecords(null);
    setLocation('/');
  };
  return (
    <Button onClick={removeData} colorScheme='teal'>
      Log Out
    </Button>
  );
};

export default LogoutButton;
