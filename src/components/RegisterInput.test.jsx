/**
 * Scenario test
 *
 * - RegisterInput component
 *  - should handle email typing correctly
 *  - should handle name typing correctly
 *  - should handle password typing correctly
 *  - should call login function when login button is clicked
 */

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, afterEach, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import RegisterInput from './RegisterInput';

expect.extend(matchers);

describe('RegisterInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle email typing correctly', async () => {
    // arrange
    render(
      <MemoryRouter>
        <RegisterInput register={() => {}} />
      </MemoryRouter>
    );
    const emailInput = await screen.getByPlaceholderText('Email');

    // action
    await userEvent.type(emailInput, 'test@mail.com');

    // assert
    expect(emailInput).toHaveValue('test@mail.com');
  });

  it('should handle name typing correctly', async () => {
    // arrange
    render(
      <MemoryRouter>
        <RegisterInput register={() => {}} />
      </MemoryRouter>
    );
    const nameInput = await screen.getByPlaceholderText('Name');

    // action
    await userEvent.type(nameInput, 'Test');

    // assert
    expect(nameInput).toHaveValue('Test');
  });

  it('should handle password typing correctly', async () => {
    // arrange
    render(
      <MemoryRouter>
        <RegisterInput register={() => {}} />
      </MemoryRouter>
    );
    const passwordInput = await screen.getByPlaceholderText('Password');

    // action
    await userEvent.type(passwordInput, '123456');

    // assert
    expect(passwordInput).toHaveValue('123456');
  });

  it('should call register function when register button is clicked', async () => {
    // arrange
    const register = vi.fn();
    render(
      <MemoryRouter>
        <RegisterInput register={register} />
      </MemoryRouter>
    );
    const nameInput = await screen.getByPlaceholderText('Name');
    const emailInput = await screen.getByPlaceholderText('Email');
    const passwordInput = await screen.getByPlaceholderText('Password');
    const registerButton = await screen.getByRole('button', { name: 'Register' });

    // action
    await userEvent.type(nameInput, 'Test');
    await userEvent.type(emailInput, 'test@mail.com');
    await userEvent.type(passwordInput, '123456');

    await userEvent.click(registerButton);

    // assert
    expect(register).toHaveBeenCalledTimes(1);
    expect(register).toHaveBeenCalledWith({
      name: 'Test',
      email: 'test@mail.com',
      password: '123456',
    });
  });
});
