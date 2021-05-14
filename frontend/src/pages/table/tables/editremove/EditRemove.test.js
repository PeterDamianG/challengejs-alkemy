import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import React from 'react';
import EditRemove from './EditRemove';

const MockRow = {
  original: {
    id: 1,
    amount: 1000,
    isIncome: true,
    category: 'Work',
    concept: 'Working in a proyect',
    updatedAt: '2020-01-01',
  },
};

beforeEach(() => render(<EditRemove row={MockRow} />));
afterAll(cleanup);

describe('/src/pages/table/tables/editremove/EditRemove.js - <EditRemove> - Main Renders', () => {
  test('Does renders initial two buttons', () => {
    screen.getByText('Edit');
    screen.getByText('Remove');
  });

  test('Does button Edit working', () => {
    fireEvent.click(screen.getByText(/Edit/i));
    screen.getByText('Edit this Record:');
    screen.getByText('Back');
  });

  test('Does button Remove working', () => {
    fireEvent.click(screen.getByText(/Remove/i));
    screen.getByText('Are you sure to remove this record?');
    screen.getByText('Sure!');
    screen.getByText('Back');
  });
});
