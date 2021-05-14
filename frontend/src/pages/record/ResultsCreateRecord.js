import React, { useContext, useEffect } from 'react';
import { Flex, Button, Link } from '@chakra-ui/react';
import { Link as WouterLink } from 'wouter';
import useFetch from 'hooks/useFetch';
import AlertMessage from 'components/AlertMessage';
import { RECORDURL, recordObject } from 'utils/fetchParams';
import FetchGenericCases from 'components/FetchGenericCases';
import RecordsContext from 'context/RecordsContext';
/**
 * ResultsCreateRecord is a component to render results when you create a record and update records.
 * @name FormCreateRecord
 * @component
 * @category Pages
 * @subcategory Results
 * @param {Object} user - It's necesary a object like a user.
 * @param {String} concept - Text for concept of a record.
 * @param {Number} amount - Number of amount of a record.
 * @param {String} category - Text for category of a record.
 * @param {Boolean} isIncome - True is Income and False is Expense.
 * @param {String} date - It's a String like a date. Example: 2010-01-01
 * @example
 * <ResultsCreateRecord
 *    user={user}
 *    concept={concept}
 *    amount={Number(amount)}
 *    category={category}
 *    isIncome={type === 'INCOME'}
 *    date={date}
 * />
 * @returns Return a component of React.
 */
const ResultsCreateRecord = ({
  user,
  concept,
  amount,
  category,
  isIncome,
  date,
}) => {
  // Context to force update records.
  const { setRecords } = useContext(RecordsContext);
  // Fetch
  const { response, error, loading } = useFetch(
    RECORDURL,
    recordObject('POST', user.token, concept, amount, category, isIncome, date),
  );
  // useEffect to apply forces updates in other routes.
  useEffect(() => {
    if (response) {
      localStorage.removeItem('records');
      setRecords(null);
    }
  }, [response]);
  // If record is send fine.
  if (response) {
    return (
      <Flex align='center' justify='center' direction='column'>
        <AlertMessage
          type='success'
          title='Record has been successful:'
          message='The process has been correct, you can now review it in the relevant places.'
        />
        <Link as={WouterLink} to='/home'>
          <Button colorScheme='teal' m='2'>
            Home
          </Button>
        </Link>
        <Link as={WouterLink} to='/table'>
          <Button colorScheme='teal' m='2'>
            Tables
          </Button>
        </Link>
        <Button type='submit' m='2' colorScheme='teal'>
          Back to Create Record
        </Button>
      </Flex>
    );
  }
  // Resolve generic cases, like loading, error and fatal error component.
  return (
    <FetchGenericCases loading={loading} error={error} response={response} />
  );
};

export default ResultsCreateRecord;
