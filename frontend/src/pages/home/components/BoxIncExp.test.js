import { render, screen, cleanup } from '@testing-library/react';
import React from 'react';
import BoxIncExp from './BoxIncExp';

afterAll(cleanup);

describe('/src/pages/home/components/BoxIncExp.js - <BoxIncExp> - Main Renders', () => {
  test('Does renders income box', () => {
    render(<BoxIncExp type concept='Testing BoxIncExp Income' amount={1000} />);
    screen.getByText('Income');
    screen.getByText('Testing BoxIncExp Income');
    screen.getByText(/1000/);
  });
  test('Does renders expense box', () => {
    render(
      <BoxIncExp
        type={false}
        concept='Testing BoxIncExp Expense'
        amount={2000}
      />,
    );
    screen.getByText('Expense');
    screen.getByText('Testing BoxIncExp Expense');
    screen.getByText(/2000/);
  });
});
