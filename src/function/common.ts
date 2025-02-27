import { Locator, Page } from '@playwright/test';
import CommonPage from '../page/commonPage';

export default class Common {

    commonPage: CommonPage;

    constructor(private page: Page) {
        this.commonPage = new CommonPage(page);
    }

    async openApp (){
        await this.commonPage.loginToDemoblaze();

    }
}