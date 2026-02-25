import { Page } from "@playwright/test";

import { CustomerPage } from "./customerPage.ts";

export class CustomerPageManager {

    private readonly page: Page;
    private readonly baseUrl: string;
    private readonly customerPage: CustomerPage;

    constructor(page: Page, baseUrl: string) {
        this.page = page;
        this.baseUrl = baseUrl;

        this.customerPage = new CustomerPage(this.page, this.baseUrl);
  }

  customer() {
    return this.customerPage;
  }
}