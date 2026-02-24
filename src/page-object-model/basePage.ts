import test, { expect, Locator, type Page } from "@playwright/test";
import { HOME_BASE_URL } from "../../src/config/urls.ts";

export default class BasePage {
  readonly page: Page;
  readonly baseUrl: string;
  readonly homeButton: Locator;
  readonly logoutButton: Locator;

  readonly customerLoginButton: Locator;
  readonly bankManagerLoginButton: Locator;
 

  constructor(page: Page, baseUrl: string = HOME_BASE_URL) {
    this.page = page;
    this.baseUrl = baseUrl;
    // this.homeButton = page.getByRole("button", { name: "Home" });
    this.homeButton = page.locator('//*[@class="btn home"]');
    this.logoutButton = page.locator('//*[@class="btn logout"]');
    this.customerLoginButton = page.locator('//*[contains(@class,"btn-lg")][@ng-click="customer()"]');
    this.bankManagerLoginButton = page.locator('//*[contains(@class,"btn-lg")][@ng-click="manager()"]');
  }
  
}
