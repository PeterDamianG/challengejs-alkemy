import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import React from 'react';
import FormCreateRecord from './FormCreateRecord';

beforeEach(() => render(<FormCreateRecord />));
afterAll(cleanup);

describe('/src/pages/record/FormCreateRecord.js - <FormCreateRecord> - Form Renders', () => {
  test('Does renders Form', () => {
    screen.getByPlaceholderText('Buy a new PC.');
    screen.getByPlaceholderText('2500');
    screen.getByText('Select Category');
    screen.getByText('Income');
    screen.getByText('Expense');
    screen.getByText(/Set the date of record./i);
    screen.getByText('Create Record');
  });
});

describe('/src/pages/record/FormCreateRecord.js - <FormCreateRecord> - Form Change Values', () => {
  test('Does change input concept', () => {
    const inputConcept = screen.getByPlaceholderText('Buy a new PC.');
    fireEvent.change(inputConcept, {
      target: { value: 'Buy Food.' },
    });
    expect(inputConcept.value).toBe('Buy Food.');
  });

  test('Does change input amount', () => {
    const inputAmount = screen.getByPlaceholderText('2500');
    fireEvent.change(inputAmount, {
      target: { value: '1500' },
    });
    expect(inputAmount.value).toBe('1500');
  });

  test('Does change input category', () => {
    const inputCategory = screen.getByText('Select Category');
    fireEvent.change(inputCategory, {
      target: { value: 'Food' },
    });
    expect(inputCategory.value).toBe('Food');
  });
});
