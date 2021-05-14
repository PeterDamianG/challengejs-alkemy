import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import React from 'react';
import ErrorPage from './index';

beforeEach(() => render(<ErrorPage />));
afterAll(cleanup);

describe('/src/pages/errorpage/index.js - <ErrorPage> - Main Component Renders', () => {
  test('Does renders', () => {
    screen.getByText(/Error 404 Page Not Found:/);
    screen.getByText(/Go Back to Home/);
  });
  test('Button to Home Working', () => {
    fireEvent.click(screen.getByText('Go Back to Home'));
    expect(window.location.pathname).toBe('/home');
  });
});
