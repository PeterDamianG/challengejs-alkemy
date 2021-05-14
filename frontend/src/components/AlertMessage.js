import React from 'react';
import {
  Box,
  Alert,
  AlertTitle,
  AlertIcon,
  AlertDescription,
} from '@chakra-ui/react';
/**
 * Alert Message is a component for generate a box with message of alert.
 * @name AlertMessage
 * @component
 * @category Utils
 * @param {String} [type='error'] - Set type of options, alert supports error, success, warning, and info statuses.
 * @param {String} title - Set Title for the alert.
 * @param {String} message - Set Message for the alert.
 * @param {Number} [size=6] - Set Size for the alert.
 * @example
 * <AlertMessage title="Default" message="Default Alert" />
 * <AlertMessage type="success" title="Default" message="Default Alert" size=8 />
 * @returns Return a component of React.
 */
const AlertMessage = ({ type = 'error', title, message, size = 6 }) => (
  <Box my={4}>
    <Alert
      alignItems='center'
      justifyContent='center'
      status={type}
      borderRadius={4}
    >
      <AlertIcon />
      <AlertTitle mr={2} size={size + 2}>
        {title}
      </AlertTitle>
      <AlertDescription size={size}>{message}</AlertDescription>
    </Alert>
  </Box>
);

export default AlertMessage;
