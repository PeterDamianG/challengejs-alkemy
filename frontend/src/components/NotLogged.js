import React from 'react';
import { Flex, Text, Divider } from '@chakra-ui/react';
/**
 * Not logged is a generic message to set screen if user not logged.
 * @name NotLogged
 * @component
 * @category Utils
 * @example
 * <NotLogged />
 * @returns Return a component of React.
 */
const NotLogged = () => (
  <Flex direction='column'>
    <Text
      align='center'
      fontSize={{ base: '24px', sm: '20px', md: '52px', lg: '84px' }}
    >
      Welcome to Personal Finance APP
    </Text>
    <Divider />
    <Text
      align='center'
      fontSize={{ base: '24px', sm: '20px', md: '52px', lg: '84px' }}
    >
      Please log in to the application. To start using it.
    </Text>
  </Flex>
);

export default NotLogged;
