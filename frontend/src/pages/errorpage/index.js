import React from 'react';
import { Flex, Text, Divider, Button, Link } from '@chakra-ui/react';
import { Link as WouterLink } from 'wouter';
/**
 * ErrorPage is a generic error page 404 not found.
 * @name ErrorPage
 * @component
 * @category Pages
 * @subcategory ErrorPage
 * @example
 * <ErrorPage />
 * @returns Return a component of React.
 */
const ErrorPage = () => (
  <Flex align='center' direction='column'>
    <Text align='center' fontSize='5xl'>
      Error 404 Page Not Found:
    </Text>
    <Divider />
    <Text align='center' fontSize='5xl'>
      Something has happened wrong.
    </Text>
    <Link as={WouterLink} to='/home'>
      <Button w='25%' colorScheme='teal' mt='6'>
        Go Back to Home
      </Button>
    </Link>
  </Flex>
);

export default ErrorPage;
