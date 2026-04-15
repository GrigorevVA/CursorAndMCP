import { expect, test } from "@playwright/test";

test("user sees error with invalid credentials", async ({ page }) => {
  // Arrange
  const invalidUser = "wrong-user";
  const invalidPassword = "wrong-password";

  await page.goto("https://the-internet.herokuapp.com/login");

  // Act
  await page.getByLabel("Username").fill(invalidUser);
  await page.getByLabel("Password").fill(invalidPassword);
  await page.getByRole("button", { name: "Login" }).click();

  // Assert
  const flash = page.locator("#flash");

  await expect(page).toHaveURL(/login/);
  await expect(flash).toBeVisible();
  await expect(flash).toContainText("invalid");
  await expect(flash).toHaveClass(/error/);
  
// This test verifies that a user cannot log in with invalid credentials.
// It submits incorrect username and password values and checks that an error message is displayed.
// The test ensures the authentication mechanism properly rejects unauthorized access.
});