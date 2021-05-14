import { render, screen, cleanup } from '@testing-library/react';
import React from 'react';
import Footer from './Footer';

afterAll(cleanup);

describe('/src/layout/Footer.js - <Footer> - Main Component Renders', () => {
  test('Does renders', () => {
    render(<Footer />);
    screen.getByText(/All rights reserved./);
    screen.getByLabelText('GitHub');
  });
});
