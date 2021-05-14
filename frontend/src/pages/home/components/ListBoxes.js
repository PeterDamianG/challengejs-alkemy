import React from 'react';
import { GridItem } from '@chakra-ui/react';
import NotRecords from 'components/NotRecords';
import BoxIncExp from './BoxIncExp';
/**
 * ListBoxes is component attendant to setting data from render boxes.
 * @name ListBoxes
 * @component
 * @category Pages
 * @subcategory Home
 * @param {Object} records - It's needed a object with format like a array.
 * @example
 * <ListBoxes records={records} />
 * @returns Return a component of React.
 */
const ListBoxes = ({ records }) => {
  // If user don't have records.
  if (!records.length) return <NotRecords />;
  // Reverse records.
  const invertRecord = [...records].reverse();
  // Set list with only max 10 records.
  const arrayList =
    invertRecord.length <= 10 ? invertRecord : invertRecord.slice(0, 10);
  return (
    <>
      {arrayList.map(({ isIncome, concept, amount, id }) => (
        <GridItem key={id} colSpan={3} borderWidth='3px' borderColor='gray.200'>
          <BoxIncExp type={isIncome} concept={concept} amount={amount} />
        </GridItem>
      ))}
    </>
  );
};

export default ListBoxes;
