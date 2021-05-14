import React, { useContext } from 'react';
import UserContext from 'context/UserContext';
import RecordsContext from 'context/RecordsContext';
import NotLogged from 'components/NotLogged';
import RecordsFetch from 'components/RecordsFetch';
/**
 * CheckUserAndRecords is component for check context and/or set itself.
 * @name CheckUserAndRecords
 * @component
 * @category Pages
 * @subcategory Check
 * @example
 * <CheckUserAndRecords>
 *   <Home />
 * </CheckUserAndRecords>
 * @returns Return a component of React.
 */
const CheckUserAndRecords = ({ children }) => {
  // Context.
  const { user } = useContext(UserContext);
  const { records, setRecords } = useContext(RecordsContext);
  // Conditionals.
  if (user.isLogged) {
    if (records) {
      return children;
    }
    return <RecordsFetch user={user} setRecords={setRecords} />;
  }
  return <NotLogged />;
};

export default CheckUserAndRecords;
