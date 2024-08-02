import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';
import { Counter } from './Counter';

describe('Counter', () => {
	test('renders a count of 0', () => {
		render(<Counter />);
		expect(screen.getByRole('heading').textContent).toBe('0');
	});

	test('renders a count of 1', () => {
		render(<Counter init={1} />);
		expect(screen.getByRole('heading').textContent).toBe('1');
	});

	test('renders a count of 1 after clicking the increment button', async () => {
		render(<Counter />);
		const incrementButton = screen.getByRole('button', { name: 'Increment' });
		await user.click(incrementButton);
		expect(screen.getByRole('heading').textContent).toBe('1');
	});
});
