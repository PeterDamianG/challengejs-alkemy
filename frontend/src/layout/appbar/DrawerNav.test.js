import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import React from 'react';
import DrawerNav from './DrawerNav';

beforeEach(() => render(<DrawerNav />));
afterAll(cleanup);

describe('/src/layout/appbar/DrawerNav.js - <DrawerNav> - Main Component Renders', () => {
  test('Does renders Button to display menu', () => {
    screen.getByRole('button');
  });
  test('Does renders Click button and show button links', () => {
    fireEvent.click(screen.getByRole('button'));
    screen.getByText('Home');
    screen.getByText('Table');
    screen.getByText('Create New Record');
  });
});
describe('/src/layout/appbar/DrawerNav.js - <DrawerNav> - Button Redirect', () => {
  test('Does renders Click button and redirect to /home', () => {
    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByText('Home'));
    expect(window.location.pathname).toBe('/home');
  });
  test('Does renders Click button and redirect to /table', () => {
    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByText('Table'));
    expect(window.location.pathname).toBe('/table');
  });
  test('Does renders Click button and redirect to /record', () => {
    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByText('Create New Record'));
    expect(window.location.pathname).toBe('/record');
  });
});
