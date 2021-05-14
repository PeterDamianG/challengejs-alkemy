import React from 'react';
import CheckUserAndRecords from 'components/CheckUserAndRecords';
import TableRecords from './TableRecords';
/**
 * TableResultsIndex is a initial/index page for routes /table/incomes and /table/expenses.
 * @name TableResultsIndex
 * @component
 * @category Pages
 * @subcategory Table
 * @example
 * <TableResultsIndex />
 * @returns Return a component of React.
 */
const TableResultsIndex = () => (
  <CheckUserAndRecords>
    <TableRecords />
  </CheckUserAndRecords>
);

export default TableResultsIndex;
