import React from 'react';
import { Stack, Spacer, Text } from '@chakra-ui/react';
/**
 * BoxIncExp is component attendant to get render boxes like a income and expense.
 * @name BoxIncExp
 * @component
 * @category Pages
 * @subcategory Home
 * @param {Boolean} type - Set if is income = true or expense = false.
 * @param {String} concept - Text center of the box.
 * @param {Number} amount - Number to put in box.
 * @example
 * <BoxIncExp type={true} concept="Working Freelance" amount=2000 />
 * <BoxIncExp type={false} concept="House Services" amount=2500 />
 * @returns Return a component of React.
 */
const BoxIncExp = ({ type, concept, amount }) => (
  <Stack
    fontSize={{ base: '18px', sm: '14px', md: '24px', lg: '32px', xl: '52xp' }}
    direction='row'
    justify='center'
    align='center'
  >
    {type ? <Text bg='green'>Income</Text> : <Text bg='red'>Expense</Text>}
    <Spacer />
    <Text>{concept}</Text>
    <Spacer />
    <Text color={type ? 'green' : 'red'} letterSpacing='wide'>
      $ {amount} &bull;-
    </Text>
  </Stack>
);

export default BoxIncExp;
