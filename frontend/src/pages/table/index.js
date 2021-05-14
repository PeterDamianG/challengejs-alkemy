import React from 'react';
import CheckUserAndRecords from 'components/CheckUserAndRecords';
import FilterIncExp from './FilterIncExp';
/**
 * TableIndex is a initial/index page for routes /table.
 * @name TableIndex
 * @component
 * @category Pages
 * @subcategory Table
 * @example
 * <TableIndex />
 * @returns Return a component of React.
 */
const TableIndex = () => (
  <CheckUserAndRecords>
    <FilterIncExp />
  </CheckUserAndRecords>
);

export default TableIndex;
