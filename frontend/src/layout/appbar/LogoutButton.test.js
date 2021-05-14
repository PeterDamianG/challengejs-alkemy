import { render, screen, cleanup } from '@testing-library/react';
import React from 'react';
import LogoutButton from './LogoutButton';

afterAll(cleanup);

describe('/src/layout/appbar/LogoutButton.js - <LogoutButton> - Button Render', () => {
  test('Does renders Button', () => {
    render(<LogoutButton />);
    screen.getByText('Log Out');
  });
});
