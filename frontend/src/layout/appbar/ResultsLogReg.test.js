import { render, screen, cleanup } from '@testing-library/react';
import React from 'react';
import ResultsLogReg from './ResultsLogReg';

beforeEach(() => render(<ResultsLogReg />));
afterAll(cleanup);

describe('/src/layout/appbar/ResultsLogReg.js - <ResultsLogReg> - Component Renders', () => {
  test('Does renders Progress Bar', () => {
    screen.getByRole('progressbar');
  });
  test('Does renders Network Request Failed', async () => {
    await screen.findByText('Network request failed');
  });
});
