import React from 'react';
import {
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Link,
  Spacer,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link as WouterLink } from 'wouter';
/**
 * Drawer is a menu-nav style drawer.
 * @name DrawerNav
 * @component
 * @category Layout
 * @subcategory Menu
 * @param {String} [position='left'] - Set position of the drawer. Options are top, botton, right and left.
 * @example
 * <LogoutButton setUser={setUser} />
 * @returns Return a component of React.
 */
const DrawerNav = ({ position = 'left' }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Button colorScheme='teal' onClick={onOpen} size='xs'>
        <HamburgerIcon />
      </Button>
      <Drawer
        placement={position}
        onClose={onClose}
        isOpen={isOpen}
        allowPinchZoom
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>Menu App</DrawerHeader>
            <DrawerBody>
              <Link onClick={onClose} as={WouterLink} to='/home'>
                <Button colorScheme='teal' variant='link' mt='6'>
                  Home
                </Button>
              </Link>
              <Spacer />
              <Link onClick={onClose} as={WouterLink} to='/table'>
                <Button colorScheme='teal' variant='link' mt='6'>
                  Table
                </Button>
              </Link>
              <Spacer />
              <Link onClick={onClose} as={WouterLink} to='/record'>
                <Button colorScheme='teal' variant='link' mt='6'>
                  Create New Record
                </Button>
              </Link>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default DrawerNav;
