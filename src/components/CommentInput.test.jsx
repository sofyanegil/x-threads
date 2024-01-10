/**
 * Scenario test
 *
 * - CommentInput component
 *  - should handle content typing correctly
 *  - should call comment function when form fill Comment button is clicked
 *
 */

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, afterEach, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import CommentInput from './CommentInput';

expect.extend(matchers);

describe('CommentInput component', () => {
  const authUser = {
    id: 'user1',
    name: 'User1',
  };

  afterEach(() => {
    cleanup();
  });

  it('should handle body typing correctly', async () => {
    // arrange
    render(
      <MemoryRouter>
        <CommentInput comment={() => {}} authUser={authUser} />
      </MemoryRouter>
    );

    const contentEditableElement = screen.getByPlaceholderText('Content');

    // action
    fireEvent.input(contentEditableElement, {
      target: { innerHTML: 'Hello, this is a content!' },
    });

    // assert
    expect(contentEditableElement.textContent).toBe('Hello, this is a content!');
  });

  it('should call createThread function when create button is clicked', async () => {
    // arrange
    const comment = vi.fn();

    render(
      <MemoryRouter>
        <CommentInput comment={comment} authUser={authUser} />
      </MemoryRouter>
    );

    const contentEditableElement = screen.getByPlaceholderText('Content');
    const commentButton = screen.getByRole('button', { name: 'Comment' });

    // action
    fireEvent.input(contentEditableElement, {
      target: { innerHTML: 'Hello, this is a test!' },
    });

    await userEvent.click(commentButton);

    // assert
    expect(comment).toHaveBeenCalledTimes(1);
    expect(comment).toHaveBeenCalledWith('Hello, this is a test!');
  });
});
