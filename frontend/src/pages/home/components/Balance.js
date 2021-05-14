import React, { useMemo } from 'react';
import { Box, Text } from '@chakra-ui/react';
/** Function to get data to show.
 * @name getInfoRecords
 * @function
 * @param {Array} res - Array with object like a records.
 * @example
 * const [income, expenses, totalBalance] = useMemo(
 *  () => getInfoRecords(records),
 *  [records],
 * );
 * @returns {Array} - Return a array with [incomes, expenses, totalBalance]
 */
export const getInfoRecords = (res) => {
  let incomes = 0;
  let expenses = 0;
  let totalBalance = 0;

  res.forEach((element) => {
    if (element.isIncome) {
      incomes += 1;
      totalBalance += element.amount;
    } else {
      expenses += 1;
      totalBalance -= element.amount;
    }
  });
  return [incomes, expenses, totalBalance];
};
/**
 * Balance is component attendant to get render a data from user.
 * @name Balance
 * @component
 * @category Pages
 * @subcategory Home
 * @param {Object} records - It's needed a object with format like a array.
 * @example
 * <Balance records={records} />
 * @returns Return a component of React.
 */
const Balance = ({ records }) => {
  // Set array values.
  const [income, expenses, totalBalance] = useMemo(
    () => getInfoRecords(records),
    [records],
  );
  return (
    <Box borderWidth='3px' borderRadius='lg' borderColor='gray.200'>
      <Text fontSize='3xl' textAlign='center'>
        The total of your balance is:
      </Text>
      <Text
        color={totalBalance >= 0 ? 'green' : 'red'}
        fontSize='4xl'
        textAlign='center'
      >
        $ {totalBalance} .-
      </Text>
      <Text
        textTransform='uppercase'
        fontSize='xs'
        textAlign='center'
        color='gray.500'
        fontWeight='semibold'
        letterSpacing='wide'
        m='2'
      >
        {income} Income Total &bull; {expenses} Expenses Total
      </Text>
    </Box>
  );
};

export default Balance;
