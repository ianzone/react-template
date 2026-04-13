import { describe, expect, test } from 'vitest';
import { renderHook } from 'vitest-browser-react';
import { useTheme } from './useTheme';

describe('useTheme', () => {
  test('themeMode init', async () => {
    const { result } = await renderHook(useTheme);
    expect(result.current.themeMode).toBe('system');
  });

  test('setThemeMode light', async () => {
    const { result, act } = await renderHook(useTheme);
    await act(() => result.current.setThemeMode('light'));
    expect(result.current.theme).toBe('light');
    expect(result.current.themeMode).toBe('light');
  });

  test('setThemeMode dark', async () => {
    const { result, act } = await renderHook(useTheme);
    await act(() => result.current.setThemeMode('dark'));
    expect(result.current.theme).toBe('dark');
    expect(result.current.themeMode).toBe('dark');
  });

  test('setThemeMode system', async () => {
    const { result, act } = await renderHook(useTheme);
    await act(() => result.current.setThemeMode('system'));
    expect(result.current.themeMode).toBe('system');
  });
});
