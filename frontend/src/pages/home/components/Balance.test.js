import { render, screen, cleanup } from '@testing-library/react';
import React from 'react';
import Balance, { getInfoRecords } from './Balance';

const MockAmountRecords = [
  {
    amount: 1000,
    isIncome: true,
  },
  {
    amount: 2000,
    isIncome: false,
  },
  {
    amount: 4000,
    isIncome: true,
  },
  {
    amount: 5000,
    isIncome: false,
  },
  {
    amount: 7000,
    isIncome: true,
  },
  {
    amount: 4000,
    isIncome: false,
  },
];

afterAll(cleanup);

describe('/src/pages/home/components/Balance.js - <Balance> - Component Renders', () => {
  test('Does renders', () => {
    render(<Balance records={MockAmountRecords} />);
    const [income, expenses, totalBalance] = getInfoRecords(MockAmountRecords);

    screen.getByText(/The total of your balance is:/);
    screen.getByText(new RegExp(totalBalance));
    screen.getByText(new RegExp(income));
    screen.getByText(new RegExp(expenses));
  });
});
