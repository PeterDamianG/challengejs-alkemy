/** @module Context */
import React, { useState } from 'react';
/**
 * Get from local storage values about recors. If don't have a values in local storage, set default values. Be careful is for internal use.
 * @name getRecordsFromLocalStore
 * @function getRecordsFromLocalStore
 * @example
 * const records = getRecordsFromLocalStore();
 * console.log(records);
 * @returns {Record} Array [] || null
 */
const getRecordsFromLocalStore = () => {
  if (localStorage.getItem('records')) {
    return JSON.parse(localStorage.getItem('records'));
  }
  return '';
};
/**
 * Const for createContext from React.
 * @name RecordsContext
 * @const
 */
const RecordsContext = React.createContext(getRecordsFromLocalStore());
/**
 * Component to set context on APP. It's a provider for UserContext.
 * @name RecordsContextProvider
 */
export function RecordsContextProvider({ children }) {
  const [records, setRecords] = useState(getRecordsFromLocalStore());
  return (
    <RecordsContext.Provider value={{ records, setRecords }}>
      {children}
    </RecordsContext.Provider>
  );
}

export default RecordsContext;
