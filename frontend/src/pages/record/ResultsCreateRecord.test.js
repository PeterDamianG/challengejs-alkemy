import { render, screen, cleanup } from '@testing-library/react';
import React from 'react';
import ResultsCreateRecord from './ResultsCreateRecord';

beforeEach(() =>
  render(
    <ResultsCreateRecord
      user={{ token: 'opfjasopfhasop.fpoidshfsdpo.dopasjd' }}
      concept='Testing Mocking Concept'
      amount={2000}
      category='Food'
      isIncome
      date='2020-01-01'
    />,
  ),
);
afterAll(cleanup);

describe('/src/pages/record/ResultsCreateRecord.js - <ResultsCreateRecord> - Component Renders', () => {
  test('Does renders Progress Bar', () => {
    screen.getByRole('progressbar');
  });
  test('Does renders Network Request Failed', async () => {
    await screen.findByText('Network request failed');
  });
});
