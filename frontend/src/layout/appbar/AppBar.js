import React, { useContext } from 'react';
import UserContext from 'context/UserContext';
import { Flex, Spacer, Box, Heading } from '@chakra-ui/react';
import ColorModeSwitcher from 'components/ColorModeSwitcher';
import EmptyModal from 'components/EmptyModal';
import FormEmailPass from './FormEmailPass';
import DrawerNav from './DrawerNav';
import LogoutButton from './LogoutButton';
/**
 * AppBar is the Main bar of APP, with menu, sign up and sing in.
 * @name AppBar
 * @component
 * @category Layout
 * @subcategory AppBar
 * @example
 * <AppBar />
 * @returns Return a component of React.
 */
const AppBar = () => {
  // Get user context data.
  const { user } = useContext(UserContext);
  // Render
  return (
    <Flex align='center' justify='center'>
      {user.isLogged ? (
        <>
          {/* Logged. */}
          <Box m='1'>
            <DrawerNav />
          </Box>
          <Spacer />
          <Box>
            <Heading
              fontSize={{ base: '24px', sm: '12px', md: '24px', lg: '42px' }}
            >
              Welcome {user.email.split('@')[0]}
            </Heading>
          </Box>
          <Spacer />
          <Box m='1'>
            <ColorModeSwitcher />
            <LogoutButton />
          </Box>
        </>
      ) : (
        <>
          {/* Not logged. */}
          <Box p='1'>
            <ColorModeSwitcher />
          </Box>
          <Spacer />
          <Box p='1'>
            <EmptyModal title='Sign In on APP' buttonText='Sign In'>
              <FormEmailPass type='login' />
            </EmptyModal>
            <EmptyModal title='Sign Up on APP' buttonText='Sign Up'>
              <FormEmailPass type='register' />
            </EmptyModal>
          </Box>
        </>
      )}
    </Flex>
  );
};

export default AppBar;
