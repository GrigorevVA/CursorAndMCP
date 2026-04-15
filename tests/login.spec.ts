import { expect, test } from "@playwright/test";

test("user sees error with invalid credentials", async ({ page }) => {
  // Arrange
  await page.goto("https://the-internet.herokuapp.com/login");

  // Act
  await page.getByLabel("Username").fill("wrong-user");
  await page.getByLabel("Password").fill("wrong-password");
  await page.getByRole("button", { name: "Login" }).click();

  // Assert
  await expect(page.locator("#flash")).toContainText("Your username is invalid!");
});

