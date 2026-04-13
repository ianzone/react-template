import { describe, expect, test } from 'vitest';
import { render } from 'vitest-browser-react';
import { Counter } from './Counter';

describe('Counter', () => {
  test('renders default initial count', async () => {
    const screen = await render(<Counter />);

    await expect.element(screen.getByText('0')).toBeVisible();
  });

  test('renders count from init prop', async () => {
    const screen = await render(<Counter init={10} />);

    await expect.element(screen.getByText('10')).toBeVisible();
  });

  test('increments count after button click', async () => {
    const screen = await render(<Counter init={1} />);

    await screen.getByRole('button', { name: 'Increment' }).click();

    await expect.element(screen.getByText('2')).toBeVisible();
  });
});
