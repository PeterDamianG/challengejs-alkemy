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
  RadioGroup,
  Radio,
  Stack,
} from '@chakra-ui/react';
import {
  isValidConcept,
  isValidAmount,
  isValidCategory,
  isValidINCEXP,
  isValidDate,
} from 'utils/validation';
import ResultsCreateRecord from './ResultsCreateRecord';
/**
 * FormCreateRecord is a form to create a records.
 * @name FormCreateRecord
 * @component
 * @category Pages
 * @subcategory Form
 * @param {Object} user - It's necesary a object like a user.
 * @example
 * <FormCreateRecord user={user} />
 * @returns Return a component of React.
 */
const FormCreateRecord = ({ user }) => {
  // States values of form.
  const [concept, setConcept] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('INCOME');
  const [date, setDate] = useState(new Date());
  // ShowResults
  const [showResult, setShowResult] = useState(false);
  // Handler states.
  const handleConcept = ({ target }) => setConcept(target.value);
  const handleAmount = ({ target }) => setAmount(target.value);
  const handleCategory = ({ target }) => setCategory(target.value);
  const handleDate = ({ target }) => setDate(target.value);
  // Click OnSubmit.
  const onSubmit = (event) => {
    event.preventDefault();
    setShowResult(!showResult);
  };
  // Verify to set enable/disable button submit.
  const dataIsValid =
    isValidConcept(concept) &&
    isValidAmount(amount) &&
    isValidCategory(category) &&
    isValidINCEXP(type) &&
    isValidDate(date);

  return (
    <Flex m='25' align='center' justify='center' direction='column'>
      <Text
        textDecoration='underline'
        fontSize={{ base: '24px', sm: '16px', md: '32px', lg: '52px' }}
      >
        Create a New Record:
      </Text>
      <form onSubmit={onSubmit}>
        {showResult ? (
          <ResultsCreateRecord
            user={user}
            concept={concept}
            amount={Number(amount)}
            category={category}
            isIncome={type === 'INCOME'}
            date={date}
          />
        ) : (
          <>
            {/* Concept Input */}
            <FormControl
              isInvalid={!isValidConcept(concept)}
              isRequired
              id='input-concept'
            >
              <FormLabel>Concept:</FormLabel>
              <Input
                type='text'
                placeholder='Buy a new PC.'
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
              isInvalid={!isValidAmount(amount)}
              isRequired
              id='input-amount'
            >
              <FormLabel>Amount:</FormLabel>
              <Input
                type='number'
                placeholder='2500'
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
                placeholder='Select Category'
                colorScheme='teal'
                isInvalid={!isValidCategory(category)}
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
            {/* Income or Expense, Type Input */}
            <FormControl isRequired id='input-type'>
              <FormLabel>Income or Expense:</FormLabel>
              <RadioGroup onChange={setType} value={type} name='input-type'>
                <Stack direction='row'>
                  <Radio colorScheme='green' value='INCOME'>
                    Income
                  </Radio>
                  <Radio colorScheme='red' value='EXPENSE'>
                    Expense
                  </Radio>
                </Stack>
              </RadioGroup>
              <FormHelperText>
                Please select if you record is an Income or Expense.
              </FormHelperText>
            </FormControl>
            {/* Date Input */}
            <FormControl
              isRequired
              id='input-date'
              isInvalid={!isValidDate(date)}
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
              Create Record
            </Button>
          </>
        )}
      </form>
    </Flex>
  );
};

export default FormCreateRecord;
