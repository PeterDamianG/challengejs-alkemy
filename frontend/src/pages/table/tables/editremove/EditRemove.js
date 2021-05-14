import React, { useState } from 'react';
import { Button, Stack } from '@chakra-ui/react';
import Group2Buttons from 'components/Group2Buttons';
import FormEditRecord from './FormEditRecord';
import AreSureRemove from './AreSureRemove';
/**
 * TableRecords is a main component to render table with records.
 * @name EditRemove
 * @component
 * @category Pages
 * @subcategory EditRemove
 * @param {Object} row - Object with data about actual row.
 * @example
 * <EditRemove row={row} />
 * @returns Return a component of React.
 */
const EditRemove = ({ row }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isRemove, setIsRemove] = useState(false);
  // Destructuring.
  const { original } = row;
  const { id, amount, isIncome, category, concept, updatedAt } = original;
  // Handler states.
  const handleIsEdit = () => setIsEdit(!isEdit);
  const handleIsRemove = () => setIsRemove(!isRemove);
  // Return on Edit
  if (isEdit) {
    return (
      <Stack align='center' justify='center'>
        <FormEditRecord
          IDRecord={id}
          amount={amount}
          category={category}
          concept={concept}
          date={updatedAt}
          isIncome={isIncome}
        />
        <Button onClick={handleIsEdit} colorScheme='teal'>
          Back
        </Button>
      </Stack>
    );
  }
  // Return on Remove
  if (isRemove) {
    return <AreSureRemove IDRecord={id} handleIsRemove={handleIsRemove} />;
  }
  // Initial state Return, buttons to set states.
  if (!isEdit && !isRemove) {
    return (
      <Group2Buttons
        btn1Func={handleIsEdit}
        btn1Text='Edit'
        btn2Func={handleIsRemove}
        btn2Text='Remove'
      />
    );
  }
  return <h1>Something is wrong. Please refresh the page.</h1>;
};

export default EditRemove;
