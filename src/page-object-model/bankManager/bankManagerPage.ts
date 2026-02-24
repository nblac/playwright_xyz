import { expect, Locator, Page } from "@playwright/test";
import BasePage from "../basePage";

export class BankManagerPage extends BasePage {
    readonly addCustomerButton: Locator;
    readonly openAccountButton: Locator;
    readonly customersButton: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly postCodeInput: Locator;
    readonly addCustomerSubmitButton: Locator;


    constructor(page: Page, baseUrl: string) {
        super(page, baseUrl);

        this.addCustomerButton = page.locator('//*[@ng-click="addCust()"]');
        this.openAccountButton = page.locator('//*[@ng-click="openAccount()"]');
        this.customersButton = page.locator('//*[@ng-click="showCust()"]');
        this.firstNameInput = page.locator('//*[@placeholder="First Name"]');
        this.lastNameInput = page.locator('//*[@placeholder="Last Name"]');
        this.postCodeInput = page.locator('//*[@placeholder="Post Code"]');
        this.addCustomerSubmitButton = page.locator('//*[@type="submit"]');

    }

    async addNewCustomer(firstName: string, lastName: string, postCode: string) {
        await this.addCustomerButton.click();
        expect(this.firstNameInput).toBeVisible();
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postCodeInput.fill(postCode);
        await this.addCustomerSubmitButton.click();
    }

}