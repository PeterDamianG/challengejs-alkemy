import React from 'react';
import Loader from 'components/Loader';
import AlertMessage from 'components/AlertMessage';
/**
 * FetchGenericCases is a generic controller to show results from fetching.
 * @name FetchGenericCases
 * @component
 * @category Utils
 * @subcategory Fetch
 * @param {Boolean} loading - A boolean to see if loading or not.
 * @param {Object} error - A object to see if have error or not.
 * @param {Object} response - A object response.
 * @example
 * <FetchGenericCases loading={loading} error={error} response={response} />
 * @returns Return a component of React.
 */
const FetchGenericCases = ({ loading, error, response }) => {
  // Loading
  if (loading) return <Loader />;
  // Error
  if (error || response.error)
    return (
      <AlertMessage title='Error:' message={error.message || response.error} />
    );
  // If component fail.
  return (
    <AlertMessage
      title='Error:'
      message='Serious error has occurred. Refresh the page.'
    />
  );
};

export default FetchGenericCases;
