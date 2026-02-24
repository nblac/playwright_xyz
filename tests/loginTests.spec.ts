import { test, expect } from '@playwright/test';
import { HOME_BASE_URL } from '../src/config/urls';
import { CustomerPageManager } from '../src/page-object-model/customer/customerPageManager';
import { BankManagerPageManager } from '../src/page-object-model/bankManager/bankManagerPageManeger';



test.describe('Navigate to homepage page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto((HOME_BASE_URL), { waitUntil: "networkidle" });
    await page.waitForLoadState("load");
  });

  // test.afterEach(async ({ page }) => {
  //   await page.goto((HOME_BASE_URL), { waitUntil: "networkidle" });
  //   await page.waitForLoadState("load");
  // });

  test('Functional test - validate the customer login type', async ({ page }) => {
    const pageManager = new CustomerPageManager(page, HOME_BASE_URL);

    await pageManager.customer().clickCustomerLoginButton();
    await expect(pageManager.customer().userNameDropdown).toBeVisible();
    await pageManager.customer().userNameDropdown.selectOption({ label: "Harry Potter" });

    await expect(pageManager.customer().loginButton).toBeVisible();
    await pageManager.customer().loginButton.click();

    await expect(pageManager.customer().transactionsButton).toBeVisible();

    await expect(pageManager.customer().logoutButton).toBeVisible();
    await pageManager.customer().logoutButton.click();
    await expect(pageManager.customer().logoutButton).toBeHidden();

  });

  test('Functional test - validate the Bankmanager login', async ({ page }) => {
    const pageManager = new BankManagerPageManager(page, HOME_BASE_URL);

    await expect(pageManager.bankManager().bankManagerLoginButton).toBeVisible();
    await pageManager.bankManager().bankManagerLoginButton.click();


    await expect(pageManager.bankManager().addCustomerButton).toBeVisible();
    await expect(pageManager.bankManager().openAccountButton).toBeVisible();
    await expect(pageManager.bankManager().customersButton).toBeVisible();


  });
});
