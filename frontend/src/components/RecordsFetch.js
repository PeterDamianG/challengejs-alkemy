import React, { useEffect } from 'react';
import useFetch from 'hooks/useFetch';
import { USERSURL, authObject } from 'utils/fetchParams';
import FetchGenericCases from 'components/FetchGenericCases';
/**
 * RecordsFetch is component attendant to get records from fetch to user data.
 * @name RecordsFetch
 * @component
 * @category Utils
 * @subcategory Home
 * @param {Object} user - It's needed a object with format like a user.
 * @param {Function} setRecords - It's needed a function to set results in context.
 * @example
 * <RecordsFetch user={user} setRecords={setRecords} />
 * @returns Return a component of React.
 */
const RecordsFetch = ({ user, setRecords }) => {
  // Fetch.
  const { loading, error, response } = useFetch(
    USERSURL,
    authObject('GET', user.token),
  );
  // Effect collateral to set localstorage and context.
  useEffect(() => {
    if (response && !response.error) {
      localStorage.setItem('records', JSON.stringify(response));
      setRecords(response);
    }
  }, [response]);
  // Resolve generic cases, like loading, error and fatal error component.
  return (
    <FetchGenericCases loading={loading} error={error} response={response} />
  );
};

export default RecordsFetch;
