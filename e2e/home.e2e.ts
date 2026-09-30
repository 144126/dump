import { expect, test } from '@playwright/test';

test('home lists festus pages', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('h1')).toHaveText('dump');
	await expect(page.getByRole('link', { name: 'festus / contradictions' })).toBeVisible();
	await expect(page.getByRole('link', { name: 'festus / slides' })).toBeVisible();
	await expect(page.getByRole('link', { name: 'private' })).toBeVisible();
});

test('private asks for a number until the pin', async ({ page }) => {
	await page.goto('/private');
	await expect(page.getByText('number')).toBeVisible();
	await page.locator('input[name="n"]').fill('54');
	await page.locator('input[name="n"]').press('Enter');
	await expect(page.getByRole('link', { name: 'chess amac' })).toBeVisible();
});

test('contradictions page reads the file', async ({ page }) => {
	await page.goto('/festus-preachers/contradictions');
	await expect(page.locator('h1')).toHaveText('contradictions');
	await expect(page.getByText('I found ten contradictions')).toBeVisible();
});

test('edit asks for a number until 54', async ({ page }) => {
	await page.goto('/festus-preachers/contradictions/edit');
	await expect(page.getByText('number')).toBeVisible();
	await page.locator('input[name="n"]').fill('54');
	await expect(page.locator('input[name="n"]')).toHaveValue('54');
	await expect(page.locator('textarea')).toBeVisible();
});
