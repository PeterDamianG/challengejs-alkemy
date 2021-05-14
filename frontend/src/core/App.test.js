import { render, screen, cleanup } from '@testing-library/react';
import React from 'react';
import App from './App';

afterAll(cleanup);

describe('/src/core/App.js - <App> - Main Component Renders', () => {
  test('Does renders', async () => {
    render(<App />);
    screen.getByLabelText('Switch to dark mode');
    await screen.findByText(/Please log in to the application/i);
    screen.getByLabelText('GitHub');
  });
});
