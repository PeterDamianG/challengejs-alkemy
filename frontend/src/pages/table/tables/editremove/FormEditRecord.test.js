import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import React from 'react';
import FormEditRecord from './FormEditRecord';

beforeEach(() =>
  render(
    <FormEditRecord
      IDRecord={2}
      isIncome
      concept='Testing last concept before editing.'
      amount={1000}
      category='Freelance'
      date='2020-02-02'
    />,
  ),
);
afterAll(cleanup);

describe('/src/pages/table/tables/editremove/FormEditRecord.js - <FormEditRecord> - Form Renders', () => {
  test('Does renders Form', () => {
    screen.getByPlaceholderText('Testing last concept before editing.');
    screen.getByPlaceholderText('1000');
    screen.getAllByText(/Freelance/i);
    screen.getByText(/Set the date of record./i);
    screen.getByText('Edit Record');
  });
});

describe('/src/pages/table/tables/editremove/FormEditRecord.js - <FormEditRecord> - Form Values Change', () => {
  test('Does change input concept', () => {
    const inputConcept = screen.getByPlaceholderText(
      'Testing last concept before editing.',
    );
    fireEvent.change(inputConcept, {
      target: { value: 'Buy Food.' },
    });
    expect(inputConcept.value).toBe('Buy Food.');
  });

  test('Does change input amount', () => {
    const inputAmount = screen.getByPlaceholderText('1000');
    fireEvent.change(inputAmount, {
      target: { value: '1500' },
    });
    expect(inputAmount.value).toBe('1500');
  });
});
