import React, { useState } from 'react';
import {
  Flex,
  Text,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Select,
} from '@chakra-ui/react';
import {
  isValidConcept,
  isValidAmount,
  isValidCategory,
  isValidDate,
} from 'utils/validation';
import ResultsEdit from './ResultsEditRemove';
/**
 * FormEditRecord is a form for send to api and edit records.
 * @name FormEditRecord
 * @component
 * @category Pages
 * @subcategory Form
 * @param {Number} IDRecord - It's needed to find record from remove.
 * @param {Number} amount - Number to set amount in record.
 * @param {String} category - String to set category in record.
 * @param {String} concept - String to set concept in record.
 * @param {String} date - String like a date to set date in record.
 * @param {Boolean} isIncome - Boolean to set isIncome to true o false.
 * @example
 * <FormEditRecord
 *   IDRecord={id}
 *   amount={amount}
 *   category={category}
 *   concept={concept}
 *   date={updatedAt}
 *   isIncome={isIncome}
 * />
 * @returns Return a component of React.
 */
const FormEditRecord = ({
  IDRecord,
  isIncome,
  concept,
  amount,
  category,
  date,
}) => {
  const [newConcept, setNewConcept] = useState(concept);
  const [newAmount, setNewAmount] = useState(amount);
  const [newCategory, setNewCategory] = useState(category);
  const [newDate, setNewDate] = useState(new Date(date));
  // State to show results.
  const [showResult, setShowResult] = useState(false);
  // Handler states.
  const handleConcept = ({ target }) => setNewConcept(target.value);
  const handleAmount = ({ target }) => setNewAmount(target.value);
  const handleCategory = ({ target }) => setNewCategory(target.value);
  const handleDate = ({ target }) => setNewDate(target.value);
  // Handler submit.
  const onSubmit = (event) => {
    event.preventDefault();
    setShowResult(!showResult);
  };
  // Functon to check is valid and set enable/disable button.
  const dataIsValid =
    isValidConcept(newConcept) &&
    isValidAmount(newAmount) &&
    isValidCategory(newCategory) &&
    isValidDate(newDate);
  return (
    <Flex mb='15' align='center' direction='column'>
      <Text m='4' textDecoration='underline' fontSize='3xl'>
        Edit this Record:
      </Text>
      <form onSubmit={onSubmit}>
        {showResult ? (
          <ResultsEdit
            type
            IDRecord={IDRecord}
            concept={newConcept}
            amount={Number(newAmount)}
            category={newCategory}
            date={newDate}
            isIncome={isIncome}
          />
        ) : (
          <>
            {/* Concept Input */}
            <FormControl
              isInvalid={!isValidConcept(newConcept)}
              isRequired
              id='input-concept'
            >
              <FormLabel>Concept:</FormLabel>
              <Input
                type='text'
                placeholder={concept}
                onChange={handleConcept}
                autoFocus
                minLength='4'
                maxLength='128'
              />
              <FormHelperText>
                Write the concept of this record. Character limit is 4 to 128.
              </FormHelperText>
            </FormControl>
            {/* Amount Input */}
            <FormControl
              isInvalid={!isValidAmount(newAmount)}
              isRequired
              id='input-amount'
            >
              <FormLabel>Amount:</FormLabel>
              <Input
                type='number'
                placeholder={amount}
                onChange={handleAmount}
                min='1'
                max='100000000'
              />
              <FormHelperText>
                Amount of this record. Min 1 and Max 100,000,000 .-
              </FormHelperText>
            </FormControl>
            {/* Category Input */}
            <FormControl isRequired id='input-category'>
              <FormLabel>Category:</FormLabel>
              <Select
                onChange={handleCategory}
                value={category}
                colorScheme='teal'
                isInvalid={!isValidCategory(newCategory)}
                isRequired
              >
                <option value='Food'>Food</option>
                <option value='Gas'>Gas</option>
                <option value='House'>House</option>
                <option value='Work'>Work</option>
                <option value='Freelance'>Freelance</option>
                <option value='Services'>Services</option>
                <option value='Life'>Life</option>
                <option value='Holiday'>Holiday</option>
                <option value='Other'>Other</option>
                <option value='None'>None</option>
              </Select>
              <FormHelperText>
                Select the category closest to what you consider.
              </FormHelperText>
            </FormControl>
            {/* Date Input */}
            <FormControl
              isRequired
              id='input-date'
              isInvalid={!isValidDate(newDate)}
            >
              <FormLabel>Date:</FormLabel>
              <Input min='2000-01-01' type='date' onChange={handleDate} />
              <FormHelperText>
                Set the date of record. If you do not set nothing, today is for
                default.
              </FormHelperText>
            </FormControl>
            <Button
              isDisabled={!dataIsValid}
              mt='4'
              w='100%'
              type='submit'
              colorScheme='teal'
            >
              Edit Record
            </Button>
          </>
        )}
      </form>
    </Flex>
  );
};

export default FormEditRecord;
