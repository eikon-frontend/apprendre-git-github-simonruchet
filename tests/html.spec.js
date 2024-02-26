// @ts-check
const { test, expect } = require("@playwright/test");

test("La page existe", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Apprendre Git/);
});

test("La page affiche le bon titre", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Apprendre Git/);
});

test("La langue a été correctement paramétrée (fr)", async ({ page }) => {
  await page.goto("/");
  const html = page.locator("html");
  await expect(html).toHaveAttribute("lang", "fr");
});

test("La page contient un h1", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h1")).toBeVisible();
});

test("La page contient une image", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("img")).toBeVisible();
});
