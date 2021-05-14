import React, { useContext } from 'react';
import {
  Grid,
  GridItem,
  Text,
  Link,
  Button,
  useMediaQuery,
} from '@chakra-ui/react';
import RecordsContext from 'context/RecordsContext';
import { Link as WouterLink } from 'wouter';
import Balance from './components/Balance';
import ListBoxes from './components/ListBoxes';
/**
 * Home is component attendant to get records from user data.
 * @name Home
 * @component
 * @category Pages
 * @subcategory Home
 * @example
 * <Home />;
 * @returns Return a component of React.
 */
const Home = () => {
  // MediaQuery.
  const [isLargerThan640] = useMediaQuery('(min-width: 640px)');
  // Context.
  const { records } = useContext(RecordsContext);
  return (
    <Grid
      templateRows={isLargerThan640 ? 'repeat(11, 1fr)' : 'repeat(1, 1fr)'}
      templateColumns={isLargerThan640 ? 'repeat(4, 1fr)' : 'repeat(1, 1fr)'}
      gap={2}
      m={4}
    >
      <GridItem colSpan={1} rowSpan={isLargerThan640 ? '11' : '1'}>
        <Balance records={records} />
        <Link as={WouterLink} to='/record'>
          <Button colorScheme='teal' m='2'>
            Create New Record
          </Button>
        </Link>
        <Link as={WouterLink} to='/table'>
          <Button colorScheme='teal' m='2'>
            See Tables
          </Button>
        </Link>
      </GridItem>
      <GridItem colSpan={3}>
        <Text
          textAlign='Center'
          fontSize='4xl'
          fontStyle='oblique'
          textTransform='capitalize'
          textDecoration='underline'
        >
          List of Incomes and Expenses:
        </Text>
      </GridItem>
      <ListBoxes records={records} />
    </Grid>
  );
};

export default Home;
