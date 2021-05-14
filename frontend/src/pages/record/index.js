import React, { useContext } from 'react';
import UserContext from 'context/UserContext';
import NotLogged from 'components/NotLogged';
import FormCreateRecord from './FormCreateRecord';
/**
 * Record is component index from url /record.
 * @name Record
 * @component
 * @category Pages
 * @subcategory Record
 * @example
 * <Record />
 * @returns Return a component of React.
 */
const Record = () => {
  const { user } = useContext(UserContext);
  if (user.isLogged) {
    return <FormCreateRecord user={user} />;
  }
  return <NotLogged />;
};

export default Record;
