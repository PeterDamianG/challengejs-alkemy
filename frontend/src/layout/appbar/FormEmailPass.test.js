import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import React from 'react';
import FormEmailPass from './FormEmailPass';

beforeEach(() => render(<FormEmailPass />));
afterAll(cleanup);

describe('/src/layout/appbar/FormEmailPass.js - <FormEmailPass> - Form Renders', () => {
  test('Does renders Form', () => {
    screen.getByPlaceholderText('example@gmail.com');
    screen.getByPlaceholderText('************');
    screen.getByText('Register');
  });
});

describe('/src/layout/appbar/FormEmailPass.js - <FormEmailPass> - Form Change Values', () => {
  test('Does change input email', () => {
    const inputEmail = screen.getByPlaceholderText('example@gmail.com');
    fireEvent.change(inputEmail, {
      target: { value: 'testing@gmail.com' },
    });
    expect(inputEmail.value).toBe('testing@gmail.com');
  });

  test('Does change input password', () => {
    const inputPassword = screen.getByPlaceholderText('************');
    fireEvent.change(inputPassword, {
      target: { value: 'testing' },
    });
    expect(inputPassword.value).toBe('testing');
  });
});
