import React, { useState, useContext, useEffect } from 'react';
import UserContext from 'context/UserContext';
import RecordsContext from 'context/RecordsContext';
import useFetch from 'hooks/useFetch';
import AlertMessage from 'components/AlertMessage';
import { getRecordIDURL, recordObject, authObject } from 'utils/fetchParams';
import FetchGenericCases from 'components/FetchGenericCases';
/**
 * ResultsEditRemove is component attendant to edit/remove records and render results.
 * @name ResultsEditRemove
 * @component
 * @category Pages
 * @subcategory Resuts
 * @param {Boolean} type - If true is Edit, false is Remove.
 * @param {Number} IDRecord - It's needed to find record from remove.
 * @param {Number} [amount=null] - Number to set amount in record.
 * @param {String} [category=null] - String to set category in record.
 * @param {String} [concept=null] - String to set concept in record.
 * @param {String} [date=null] - String like a date to set date in record.
 * @param {Boolean} [isIncome=null] - Boolean to set isIncome to true o false.
 * @example
 * <ResultsEditRemove
 *   type={type}
 *   IDRecord={IDRecord}
 *   concept={newConcept}
 *   amount={Number(newAmount)}
 *   category={newCategory}
 *   date={newDate}
 *   isIncome={isIncome}
 * />
 * @returns Return a component of React.
 */
const ResultsEditRemove = ({
  type,
  IDRecord,
  concept = null,
  amount = null,
  category = null,
  date = null,
  isIncome = null,
}) => {
  // Timer to update tables.
  const [timer, setTimer] = useState(3);
  // Context.
  const { setRecords } = useContext(RecordsContext);
  const { user } = useContext(UserContext);
  // Fetch
  const { response, error, loading } = useFetch(
    getRecordIDURL(IDRecord),
    type
      ? recordObject(
          'PATCH',
          user.token,
          concept,
          amount,
          category,
          isIncome,
          date,
        )
      : authObject('DELETE', user.token),
  );
  // useEffect to apply forces update and show timer to user.
  useEffect(() => {
    if (response) {
      setTimeout(() => {
        localStorage.removeItem('records');
        setRecords(null);
      }, 3000);
      setInterval(() => {
        setTimer((previusState) => previusState - 1);
      }, 1000);
    }
    return () => {
      setTimer(3);
    };
  }, [response]);
  // If request is fine.
  if (response.message) {
    return (
      <AlertMessage
        type='success'
        title={`${type ? 'Edited' : 'Remove'} Record:.`}
        message={`Table and Page refresh in ${timer}.`}
      />
    );
  }
  // Resolve generic cases, like loading, error and fatal error component.
  return (
    <FetchGenericCases loading={loading} error={error} response={response} />
  );
};

export default ResultsEditRemove;
