import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
/**
 * ColorModeSwitcher is a button/toggle to change theme system dark/light.
 * @name ColorModeSwitcher
 * @component
 * @category Visual
 * @example
 * <ColorModeSwitcher />
 * @returns Return a component of React.
 */
const ColorModeSwitcher = () => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  return (
    <IconButton
      size='md'
      fontSize='lg'
      aria-label={`Switch to ${text} mode`}
      variant='ghost'
      color='current'
      marginLeft='2'
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
    />
  );
};

export default ColorModeSwitcher;
