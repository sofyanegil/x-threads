/**
 * Scenario test
 *
 * - CreateThreadInput component
 *  - should handle title typing correctly
 *  - should handle category typing correctly
 *  - should handle body typing correctly
 *  - should call createThread function when form fill create button is clicked
 *
 */

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, afterEach, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import CreateThreadInput from './CreateThreadInput';

expect.extend(matchers);

describe('CreateThreadInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle title typing correctly', async () => {
    // arrange
    render(
      <MemoryRouter>
        <CreateThreadInput createThread={() => {}} />
      </MemoryRouter>
    );
    const titleInput = screen.getByPlaceholderText('Title');

    // action
    await userEvent.type(titleInput, 'test title');

    // assert
    expect(titleInput).toHaveValue('test title');
  });

  it('should handle category typing correctly', async () => {
    // arrange
    render(
      <MemoryRouter>
        <CreateThreadInput createThread={() => {}} />
      </MemoryRouter>
    );
    const categoryInput = screen.getByPlaceholderText('Category');

    // action
    await userEvent.type(categoryInput, 'test category');

    // assert
    expect(categoryInput).toHaveValue('test category');
  });

  it('should handle body typing correctly', async () => {
    // arrange
    render(
      <MemoryRouter>
        <CreateThreadInput createThread={() => {}} />
      </MemoryRouter>
    );

    const contentEditableElement = screen.getByPlaceholderText('Body');

    // action
    fireEvent.input(contentEditableElement, {
      target: { innerHTML: 'Hello, this is a test!' },
    });

    // assert
    expect(contentEditableElement.textContent).toBe('Hello, this is a test!');
  });

  it('should call createThread function when create button is clicked', async () => {
    // arrange
    const createThread = vi.fn();
    render(
      <MemoryRouter>
        <CreateThreadInput createThread={createThread} />
      </MemoryRouter>
    );

    const titleInput = screen.getByPlaceholderText('Title');
    const categoryInput = screen.getByPlaceholderText('Category');
    const contentEditableElement = screen.getByPlaceholderText('Body');
    const createButton = screen.getByRole('button', { name: 'Create' });

    // action
    await userEvent.type(titleInput, 'test title');
    await userEvent.type(categoryInput, 'test category');
    fireEvent.input(contentEditableElement, {
      target: { innerHTML: 'Hello, this is a test!' },
    });

    await userEvent.click(createButton);

    // assert
    expect(createThread).toHaveBeenCalledTimes(1);
    expect(createThread).toHaveBeenCalledWith({
      title: 'test title',
      category: 'test category',
      body: 'Hello, this is a test!',
    });
  });
});
