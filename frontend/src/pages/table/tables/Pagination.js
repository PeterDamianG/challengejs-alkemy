import React from 'react';
import { Flex, Button, Text, Input, Select } from '@chakra-ui/react';
/**
 * Pagination is a complement for tables.
 * @name Pagination
 * @component
 * @category Pages
 * @subcategory Utils
 * @example
 * <Pagination
 *   gotoPage={gotoPage}
 *   previousPage={previousPage}
 *   nextPage={nextPage}
 *   canPreviousPage={canPreviousPage}
 *   canNextPage={canNextPage}
 *   pageCount={pageCount}
 *   pageIndex={pageIndex}
 *   pageOptions={pageOptions}
 *   pageSize={pageSize}
 *   setPageSize={setPageSize}
 * />
 * @returns Return a component of React.
 */
const Pagination = ({
  gotoPage,
  previousPage,
  nextPage,
  canPreviousPage,
  canNextPage,
  pageCount,
  pageIndex,
  pageOptions,
  pageSize,
  setPageSize,
}) => (
  <Flex align='center'>
    <Button
      mr='2'
      colorScheme='teal'
      onClick={() => gotoPage(0)}
      disabled={!canPreviousPage}
    >
      {'<<'}
    </Button>
    <Button
      mr='2'
      colorScheme='teal'
      onClick={() => previousPage()}
      disabled={!canPreviousPage}
    >
      {'<'}
    </Button>
    <Button
      mr='2'
      colorScheme='teal'
      onClick={() => nextPage()}
      disabled={!canNextPage}
    >
      {'>'}
    </Button>
    <Button
      mr='2'
      colorScheme='teal'
      onClick={() => gotoPage(pageCount - 1)}
      disabled={!canNextPage}
    >
      {'>>'}
    </Button>
    <Text justifyContent='center' align='center' mr='2'>
      Page {pageIndex + 1} of {pageOptions.length}
    </Text>
    <Text mr='2'>
      Go to page:
      <Input
        type='number'
        defaultValue={pageIndex + 1}
        onChange={(e) => {
          const page = e.target.value ? Number(e.target.value) - 1 : 0;
          gotoPage(page);
        }}
        style={{ width: '100px' }}
      />
    </Text>
    <Select
      mr='2'
      value={pageSize}
      onChange={(e) => {
        setPageSize(Number(e.target.value));
      }}
    >
      {[10, 20, 30, 40, 50].map((pSize) => (
        <option key={pSize} value={pSize}>
          Show {pSize}
        </option>
      ))}
    </Select>
  </Flex>
);

export default Pagination;
