import React from 'react';
import { GridItem, Text } from '@chakra-ui/react';
/**
 * NotRecords is a util component for render a text in case user not have records yet.
 * @name NotRecords
 * @component
 * @category Utils
 * @subcategory Text
 * @example
 * <NotRecords />
 * @returns Return a component of React.
 */
const NotRecords = () => (
  <GridItem colSpan={3} borderWidth='3px' borderColor='gray.200' m={12}>
    <Text fontSize='4xl' align='center'>
      We do not have records yet.
    </Text>
  </GridItem>
);

export default NotRecords;
