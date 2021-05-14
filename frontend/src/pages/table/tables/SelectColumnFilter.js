import React from 'react';
import { Select } from '@chakra-ui/react';
/**
 * SelectColumnFilter is a complement for tables, function is filter categories.
 * @name SelectColumnFilter
 * @component
 * @category Pages
 * @subcategory Utils
 * @example
 * <SelectColumnFilter columns={columns} />
 * @returns Return a component of React.
 */
const SelectColumnFilter = ({
  column: { filterValue, setFilter, preFilteredRows, id },
}) => {
  // Calculate the options for filtering using the preFilteredRows
  const options = React.useMemo(() => {
    const opts = new Set();
    preFilteredRows.forEach((row) => {
      opts.add(row.values[id]);
    });
    return [...opts.values()];
  }, [id, preFilteredRows]);
  // Render a multi-select box
  return (
    <Select
      value={filterValue}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
    >
      <option value=''>All</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
};

export default SelectColumnFilter;
