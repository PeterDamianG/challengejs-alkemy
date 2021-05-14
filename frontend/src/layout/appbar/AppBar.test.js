import { render, screen, cleanup } from '@testing-library/react';
import React from 'react';
import App from 'core/App';

afterAll(cleanup);

describe('/src/layout/appbar/AppBar.js - <AppBar> - Main Component Renders', () => {
  test('Does renders not logged', () => {
    render(<App />);
    screen.getByLabelText('Switch to dark mode');
    screen.getByText(/Sign In/);
    screen.getByText(/Sign Up/);
  });
});
