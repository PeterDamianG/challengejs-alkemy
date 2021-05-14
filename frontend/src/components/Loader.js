import React from 'react';
import { Center, CircularProgress, Text, Progress } from '@chakra-ui/react';
/**
 * Loader is a component for generate a visual loading.
 * @name Loader
 * @component
 * @category Utils
 * @param {String} [type='circular'] - Set type of options, loading supports circular, bar and text.
 * @param {Number} [size=128] - Set Size for the loader.
 * @example
 * <Loader />
 * <Loader type='text' size='64' />
 * @returns Return a component of React.
 */
const Loader = ({ type = 'circular', size = 128 }) => {
  if (type === 'circular')
    return (
      <Center>
        <CircularProgress isIndeterminate size={`${size}px`} color='teal' />
      </Center>
    );
  if (type === 'text')
    return (
      <Center>
        <Text size={`${size}px`} color='teal'>
          LOADING...
        </Text>
      </Center>
    );
  if (type === 'bar')
    return (
      <Center>
        <Progress size={`${size}px`} isIndeterminate />
      </Center>
    );
  return (
    <Center>
      <CircularProgress isIndeterminate size={`${size}px`} color='teal' />
    </Center>
  );
};

export default Loader;
