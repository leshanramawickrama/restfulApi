import { Locator, Page } from '@playwright/test';
import env from '../../test-data/env.json';

export default class CommonPage {

    constructor (private page: Page){
        this.page = page;
    }

    async acceptPopup (){
        await this.page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.dismiss().catch(() => {});
        });
        await this.page.waitForTimeout(2000);
    }

    async loginToDemoblaze (){
        await this.page.goto(env.ui.url, { timeout: 60000 });
    }
      
}