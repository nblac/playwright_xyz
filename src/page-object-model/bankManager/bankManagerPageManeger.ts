import { Page } from "@playwright/test";

import { BankManagerPage } from "./bankManagerPage.ts";

export class BankManagerPageManager {

    private readonly page: Page;
    private readonly baseUrl: string;
    private readonly bankManagerPage: BankManagerPage;

    constructor(page: Page, baseUrl: string) {
        this.page = page;
        this.baseUrl = baseUrl;

        this.bankManagerPage = new BankManagerPage(this.page, this.baseUrl);
  }

  bankManager() {
    return this.bankManagerPage;
  }
}