import React, { useContext } from 'react';
import RecordsContext from 'context/RecordsContext';
import { useLocation } from 'wouter';
import NotRecords from 'components/NotRecords';
import Group2Buttons from 'components/Group2Buttons';
/**
 * FilterIncExp is a component to filter tables in income or expense.
 * @name FilterIncExp
 * @component
 * @category Pages
 * @subcategory Filter
 * @example
 * <FilterIncExp />
 * @returns Return a component of React.
 */
const FilterIncExp = () => {
  // Context.
  const { records } = useContext(RecordsContext);
  // Router.
  const [, setLocation] = useLocation();
  // User don't have records.
  if (!records.length) return <NotRecords />;
  // Create buttons to filter.
  return (
    <Group2Buttons
      title='Choose one to filter the table:'
      btn1Func={() => setLocation('/table/incomes')}
      btn1Text='Incomes'
      btn2Func={() => setLocation('/table/expenses')}
      btn2Color='teal'
      btn2Text='Expenses'
    />
  );
};

export default FilterIncExp;
