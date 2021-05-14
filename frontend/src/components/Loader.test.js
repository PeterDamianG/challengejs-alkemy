import { render, screen, cleanup } from '@testing-library/react';
import React from 'react';
import Loader from './Loader';

afterAll(cleanup);

describe('/src/components/Loader.js - <Loader> - Component Renders Alternatives', () => {
  test('Does renders circular', () => {
    render(<Loader />);
    screen.getByRole('progressbar');
  });

  test('Does renders text', () => {
    render(<Loader type='text' />);
    screen.getByText('LOADING...');
  });

  test('Does renders bar', () => {
    render(<Loader type='bar' />);
    screen.getByRole('progressbar');
  });

  test('Does renders with bad type', () => {
    render(<Loader type='none' />);
    screen.getByRole('progressbar');
  });
});
