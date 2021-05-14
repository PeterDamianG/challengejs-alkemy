import { render, screen, cleanup } from '@testing-library/react';
import React from 'react';
import ListBoxes from './ListBoxes';

const MockRecords = [
  {
    id: '1',
    amount: 1000,
    isIncome: true,
    concept: 'Testing ListBoxes',
  },
];

afterAll(cleanup);

describe('/src/pages/home/components/ListBoxes.js - <ListBoxes> - Main Renders', () => {
  test('Does renders list with 0 zero records', () => {
    render(<ListBoxes records={[]} />);
    screen.getByText('We do not have records yet.');
  });
  test('Does renders list mocking records', () => {
    render(<ListBoxes records={MockRecords} />);
    screen.getByText(MockRecords[0].concept);
  });
});
