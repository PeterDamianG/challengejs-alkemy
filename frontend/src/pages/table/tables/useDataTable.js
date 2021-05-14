import React from 'react';
import SelectColumnFilter from './SelectColumnFilter';
/**
 * useDataTable is a utility to set formatted columns and rows is like a hook.
 * @name useDataTable
 * @component
 * @category Pages
 * @subcategory Utils
 * @param {Array} records - Array with object like a records.
 * @example
 * const { columns, data } = useDataTable(response);
 * @returns Return a object { columns, data }.
 */
const useDataTable = (records) => {
  // Formatting data of rows.
  const formatObject = (res) =>
    res.map((element) => ({
      ...element,
      updatedAt: element.createdAt.slice(0, 10),
    }));
  const data = React.useMemo(() => formatObject(records), [records]);
  // Columns of table.
  const columns = React.useMemo(
    () => [
      {
        // Make an expander cell
        Header: () => null, // No header
        id: 'expander', // It needs an ID
        Cell: ({ row }) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <span {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? 'Collapse 👇' : 'Edit/Remove 👉'}
          </span>
        ),
      },
      {
        Header: 'Amount',
        accessor: 'amount',
        isNumeric: true,
      },
      {
        Header: 'Concept',
        accessor: 'concept',
      },
      {
        Header: 'Category',
        accessor: 'category',
        Filter: SelectColumnFilter,
        filter: 'includes',
      },
      {
        Header: 'Date',
        accessor: 'updatedAt',
      },
    ],
    [],
  );
  // Return a object with all needed.
  return { columns, data };
};

export default useDataTable;
