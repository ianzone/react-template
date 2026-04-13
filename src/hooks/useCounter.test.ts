import { describe, expect, test } from 'vitest';
import { renderHook } from 'vitest-browser-react';
import { useCounter } from './useCounter';

describe('useCounter', () => {
  test('should render the initial count', async () => {
    const { result } = await renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  test('should increment counter', async () => {
    const { result, act } = await renderHook(useCounter);
    await act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });

  test('should start count from 10', async () => {
    const { result } = await renderHook(useCounter, {
      initialProps: 10,
    });
    expect(result.current.count).toBe(10);
  });
});
