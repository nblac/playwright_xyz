import { Locator, Page } from "@playwright/test";
import BasePage from "../basePage";

export class CustomerPage extends BasePage {
    readonly userNameDropdown: Locator;
    readonly loginButton: Locator;

    readonly accountSelector: Locator;
    readonly transactionsButton: Locator;

    constructor(page: Page, baseUrl: string) {
        super(page, baseUrl);

        this.userNameDropdown = page.locator('//*[@id="userSelect"]');
        this.loginButton = page.locator('//*[@class="btn btn-default"][@type="submit"]');
        this.accountSelector = page.locator('//*[@id="accountSelect"]');
        this.transactionsButton = page.locator('//*[@ng-click="transactions()"]');

    }

    async customerLogin(customerName: string) {
        await this.customerLoginButton.click();
        await this.userNameDropdown.selectOption({ label: customerName });
        await this.loginButton.click();
    }

}