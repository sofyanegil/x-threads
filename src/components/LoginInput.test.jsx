/**
 * Scenario test
 *
 * - LoginInput component
 *  - should handle email typing correctly
 *  - should handle password typing correctly
 *  - should call login function when login button is clicked
 */

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, afterEach, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import LoginInput from './LoginInput';

expect.extend(matchers);

describe('LoginInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle email typing correctly', async () => {
    // arrange
    render(
      <MemoryRouter>
        <LoginInput login={() => {}} />
      </MemoryRouter>
    );
    const emailInput = screen.getByPlaceholderText('Email');

    // action
    await userEvent.type(emailInput, 'test@mail.com');

    // assert
    expect(emailInput).toHaveValue('test@mail.com');
  });

  it('should handle password typing correctly', async () => {
    // arrange
    render(
      <MemoryRouter>
        <LoginInput login={() => {}} />
      </MemoryRouter>
    );
    const passwordInput = screen.getByPlaceholderText('Password');

    // action
    await userEvent.type(passwordInput, '123456');

    // assert
    expect(passwordInput).toHaveValue('123456');
  });

  it('should call login function when login button is clicked', async () => {
    // arrange
    const login = vi.fn();
    render(
      <MemoryRouter>
        <LoginInput login={login} />
      </MemoryRouter>
    );
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const loginButton = screen.getByRole('button', { name: 'Login' });

    // action
    await userEvent.type(emailInput, 'test@mail.com');
    await userEvent.type(passwordInput, '123456');
    await userEvent.click(loginButton);

    // assert
    expect(login).toHaveBeenCalledTimes(1);
    expect(login).toHaveBeenCalledWith({
      email: 'test@mail.com',
      password: '123456',
    });
  });
});
