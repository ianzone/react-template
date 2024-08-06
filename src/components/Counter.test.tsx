import { render } from '@testing-library/react';
import user from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';
import { Counter } from './Counter';

describe('Counter', () => {
  test('initial count should be 0', () => {
    const { getByRole } = render(<Counter />);
    expect(getByRole('heading').textContent).toBe('0');
  });

  test('initial count should be set to 1', () => {
    const { getByRole } = render(<Counter init={1} />);
    expect(getByRole('heading').textContent).toBe('1');
  });

  test('renders a count of 1 after clicking the increment button', async () => {
    const { getByRole } = render(<Counter />);
    const incrementButton = getByRole('button', { name: 'Increment' });
    await user.click(incrementButton);
    expect(getByRole('heading').textContent).toBe('1');
  });
});
