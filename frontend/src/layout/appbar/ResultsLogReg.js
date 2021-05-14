import React, { useContext, useEffect } from 'react';
import UserContext from 'context/UserContext';
import useFetch from 'hooks/useFetch';
import { LOGINURL, USERSURL, userObject } from 'utils/fetchParams';
import AlertMessage from 'components/AlertMessage';
import FetchGenericCases from 'components/FetchGenericCases';
/**
 * ResultsLogReg is a component to set result on login and register system.
 * @name ResultsLogReg
 * @component
 * @category Result
 * @subcategory LogReg
 * @param {String} [type='login'] - Set type result. Option are login/register.
 * @param {String} email - Set email.
 * @param {String} password - Set password.
 * @example
 * <EmptyModal title='Sign In on APP' buttonText='Sign In'>
 *   <FormEmailPass type='login' />
 * </EmptyModal>
 * @returns Return a component of React.
 */
const ResultsLogReg = ({ email, password, type = 'login' }) => {
  const { setUser } = useContext(UserContext);
  const { loading, error, response } = useFetch(
    type === 'login' ? LOGINURL : USERSURL,
    userObject(email, password),
  );
  // If response is good on LOGIN set that collateral effect.
  useEffect(() => {
    if (type === 'login' && response.token) {
      response.isLogged = true;
      localStorage.setItem('user', JSON.stringify(response));
      setUser(response);
    }
  }, [response]);
  // If register is good, set a alert.
  if (type === 'register' && response.email) {
    return (
      <AlertMessage
        type='success'
        title='Account Create:'
        message={`Your account has created. Email used: ${response.id}. You can loggin now.`}
      />
    );
  }
  // Resolve generic cases, like loading, error and fatal error component.
  return (
    <FetchGenericCases loading={loading} error={error} response={response} />
  );
};

export default ResultsLogReg;
