import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { UserContextProvider } from 'context/UserContext';
import { RecordsContextProvider } from 'context/RecordsContext';
import AppBar from 'layout/appbar/AppBar';
import Footer from 'layout/footer/Footer';
import Routes from './Routes';
import ErrorBoundary from './ErrorBoundary';
/**
 * APP Main component
 * @component
 * @category Core
 */
const App = () => (
  <ChakraProvider theme={theme}>
    <UserContextProvider>
      <RecordsContextProvider>
        <ErrorBoundary>
          <AppBar />
        </ErrorBoundary>
        <ErrorBoundary>
          <Routes />
        </ErrorBoundary>
        <Footer />
      </RecordsContextProvider>
    </UserContextProvider>
  </ChakraProvider>
);

export default App;
