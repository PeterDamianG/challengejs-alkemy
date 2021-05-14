import React from 'react';
import { Flex, Button, Text, Divider } from '@chakra-ui/react';
/**
 * GroupButtons is a util component for making 2 buttons to select among it.
 * @name Group2Buttons
 * @component
 * @category Utils
 * @subcategory Button
 * @param {String} [title=''] - String to set title on top of buttons.
 * @param {Fuction} btn1Func - Function for set option about first button.
 * @param {String} btn1Color - String to set background color for first button.
 * @param {String} btn1Text - String to set text for first button.
 * @param {Fuction} btn2Func - Function for set option about second button.
 * @param {String} btn2Color - String to set background color for second button.
 * @param {String} btn2Text - String to set text for second button.
 * @example
 * <ButtonEditRemove edit={handleSetEdit} remove={handleSetRemove} />
 * @returns Return a component of React.
 */
const Group2Buttons = ({
  title = 'Select your action:',
  btn1Func,
  btn1Color = 'teal',
  btn1Text,
  btn2Func,
  btn2Color = 'red',
  btn2Text,
}) => (
  <Flex direction='column' m='4' align='center' justify='center'>
    <Text
      mb='5'
      fontSize={{ base: '24px', sm: '20px', md: '42px', lg: '74px' }}
    >
      {title}
    </Text>
    <Divider m='4' />
    <Button onClick={btn1Func} colorScheme={btn1Color} m='2'>
      {btn1Text}
    </Button>
    <Button onClick={btn2Func} colorScheme={btn2Color} m='2'>
      {btn2Text}
    </Button>
  </Flex>
);

export default Group2Buttons;
