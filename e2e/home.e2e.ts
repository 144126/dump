import { expect, test } from '@playwright/test';

test('home lists festus pages', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('h1')).toHaveText('misc');
	await expect(page.getByRole('link', { name: 'festus / contradictions' })).toBeVisible();
	await expect(page.getByRole('link', { name: 'festus / slides' })).toBeVisible();
});

test('contradictions page has ten items', async ({ page }) => {
	await page.goto('/festus-preachers/contradictions');
	await expect(page.locator('h1')).toHaveText('ten contradictions');
	await expect(page.locator('ol > li')).toHaveCount(10);
});
