import { Locator, Page } from '@playwright/test';

export default class HomePage{

    readonly homeTb: Locator;

    constructor (private page: Page){
        this.page = page;
        this.homeTb = page.getByRole('link', { name: 'Home (current)' });
    }

    async navigateToHome (){
        await this.homeTb.click();
        await this.page.waitForTimeout(2000);
    }
    
}