import React from 'react';
import CheckUserAndRecords from 'components/CheckUserAndRecords';
import Home from './Home';
/**
 * HomeIndex is a initial/index page for routes / and /home.
 * @name HomeIndex
 * @component
 * @category Pages
 * @subcategory Home
 * @example
 * <HomeIndex />
 * @returns Return a component of React.
 */
const HomeIndex = () => (
  <CheckUserAndRecords>
    <Home />
  </CheckUserAndRecords>
);

export default HomeIndex;
