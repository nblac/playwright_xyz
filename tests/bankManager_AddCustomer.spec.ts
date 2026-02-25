import { test, expect } from '@playwright/test';
import { HOME_BASE_URL } from '../src/config/urls';
import { CustomerPageManager } from '../src/page-object-model/customer/customerPageManager';
import { BankManagerPageManager } from '../src/page-object-model/bankManager/bankManagerPageManeger';



test.describe('Navigate to homepage page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto((HOME_BASE_URL), { waitUntil: "networkidle" });
    await page.waitForLoadState("load");
  });

  const firstName = "Rubeus";
  const lastName = "Hagrid";
  const postCode = "M54321";
  
  test('Functional test - Bank Manager Add new customer', async ({ page }) => {
    const pageManager = new BankManagerPageManager(page, HOME_BASE_URL);

    await expect(pageManager.bankManager().bankManagerLoginButton).toBeVisible();
    await pageManager.bankManager().bankManagerLoginButton.click();

    await expect(pageManager.bankManager().addCustomerButton).toBeVisible();
    await pageManager.bankManager().addNewCustomer(firstName, lastName, postCode);

   await test.step('Validate the alert message', async () => {
    // validate the alert message
    page.on('dialog', async dialog => {
      expect(dialog.message()).toContain("Customer added successfully with customer id");
      await dialog.accept();
    });
   });

   await test.step('Validate the new customer is added in the customers list', async () => {
    await pageManager.bankManager().customersButton.click();
    const newCustomer = page.locator('tbody tr:last-child td:nth-child(1)');
    await expect(newCustomer).toHaveText(firstName);
   });

  });

});

