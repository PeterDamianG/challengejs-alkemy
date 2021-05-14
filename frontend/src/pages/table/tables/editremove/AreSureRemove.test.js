import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import React from 'react';
import AreSureRemove from './AreSureRemove';

const handlerBack = jest.fn();

beforeEach(() =>
  render(<AreSureRemove IDRecord={2} handleIsRemove={handlerBack} />),
);
afterAll(cleanup);

describe('/src/pages/table/tables/editremove/AreSureRemove.js - <AreSureRemove> - Main Renders', () => {
  test('Does renders', () => {
    screen.getByText('Are you sure to remove this record?');
    screen.getByText('Sure!');
    screen.getByText('Back');
  });
  test('Does button back working', () => {
    fireEvent.click(screen.getByText(/Back/i));
    expect(handlerBack).toHaveBeenCalledTimes(1);
  });
});
