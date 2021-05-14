/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import React, { Fragment, useContext, useMemo } from 'react';
import {
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  chakra,
  Button,
} from '@chakra-ui/react';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import RecordsContext from 'context/RecordsContext';
import { useLocation } from 'wouter';
import NotRecords from 'components/NotRecords';
import {
  useTable,
  useSortBy,
  usePagination,
  useExpanded,
  useFilters,
} from 'react-table';
import useDataTable from './useDataTable';
import Pagination from './Pagination';
import EditRemove from './editremove/EditRemove';
/**
 * TableRecords is a main component to render table with records.
 * @name TableRecords
 * @component
 * @category Pages
 * @subcategory Table
 * @example
 * <TableRecords />
 * @returns Return a component of React.
 */
const TableRecords = () => {
  // Context.
  const { records } = useContext(RecordsContext);
  // Router.
  const [location, setLocation] = useLocation();
  // Formating data.
  const filterRecords = useMemo(
    () =>
      location === '/table/incomes'
        ? records.filter(({ isIncome }) => isIncome)
        : records.filter(({ isIncome }) => !isIncome),
    [records],
  );
  // User don't have records.
  if (!filterRecords.length) return <NotRecords />;
  const { columns, data } = useDataTable(filterRecords);
  // Hook useTable. https://react-table.tanstack.com/
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    visibleColumns,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useFilters,
    useSortBy,
    useExpanded,
    usePagination,
  );
  return (
    <Flex direction='column' align='center' justify='center'>
      <Table variant='striped' {...getTableProps()}>
        <Thead>
          {/* Headers */}
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  isNumeric={column.isNumeric}
                >
                  {column.render('Header')}
                  <chakra.span pl='4'>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <TriangleDownIcon aria-label='sorted descending' />
                      ) : (
                        <TriangleUpIcon aria-label='sorted ascending' />
                      )
                    ) : null}
                  </chakra.span>
                  <>{column.Header === 'Category' && column.render('Filter')}</>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {/* Body */}
          {page.map((row) => {
            prepareRow(row);
            return (
              <Fragment key={row.getRowProps().key}>
                <Tr>
                  {row.cells.map((cell) => (
                    <Td
                      {...cell.getCellProps()}
                      isNumeric={cell.column.isNumeric}
                    >
                      {cell.render('Cell')}
                    </Td>
                  ))}
                </Tr>
                {row.isExpanded && (
                  <Tr>
                    <Td colSpan={visibleColumns.length}>
                      <EditRemove row={row} />
                    </Td>
                  </Tr>
                )}
              </Fragment>
            );
          })}
        </Tbody>
      </Table>
      {/* Footer */}
      <Pagination
        gotoPage={gotoPage}
        previousPage={previousPage}
        nextPage={nextPage}
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        pageCount={pageCount}
        pageIndex={pageIndex}
        pageOptions={pageOptions}
        pageSize={pageSize}
        setPageSize={setPageSize}
      />
      <Button m='10' onClick={() => setLocation('/table')} colorScheme='teal'>
        Back to Filter
      </Button>
    </Flex>
  );
};

export default TableRecords;
