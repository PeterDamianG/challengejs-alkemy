import { render, screen, cleanup } from '@testing-library/react';
import React from 'react';
import ErrorBoundary from './ErrorBoundary';

afterAll(cleanup);

const Error = () => {
  throw new Error();
};

describe('/src/core/ErrorBoundary.js - <ErrorBoundary> - Render', () => {
  test('Does renders if fail or have errors', () => {
    render(
      <ErrorBoundary>
        <Error />
      </ErrorBoundary>,
    );
    screen.getByText('Something went wrong.');
  });
});
