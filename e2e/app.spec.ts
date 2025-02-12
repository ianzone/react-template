import { expect, test } from '@playwright/test';

test('heading', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Vite + React' })).toBeVisible();
});

test('increment', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Increment' }).click();
  await expect(page.locator('#app')).toContainText('6');
});
