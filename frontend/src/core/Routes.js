import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'wouter';
import Loader from 'components/Loader';
// Lazy loading components.
const Home = lazy(() => import('pages/home'));
const Table = lazy(() => import('pages/table'));
const TableResultsIndex = lazy(() => import('pages/table/tables'));
const CreateRecord = lazy(() => import('pages/record'));
const ErrorPage = lazy(() => import('pages/errorpage'));
/**
 * Routes component for router Wouter.
 * @component
 * @category Core
 */
const Routes = () => (
  <Suspense fallback={<Loader />}>
    <Switch>
      <Route path='/' component={Home} />
      <Route path='/home' component={Home} />
      <Route path='/table' component={Table} />
      <Route path='/table/incomes' component={TableResultsIndex} />
      <Route path='/table/expenses' component={TableResultsIndex} />
      <Route path='/record' component={CreateRecord} />
      <Route path='/:rest*' component={ErrorPage} />
    </Switch>
  </Suspense>
);

export default Routes;
