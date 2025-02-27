import { Locator, Page } from '@playwright/test';

export default class LoginPage {


    readonly loginTb: Locator;
    readonly userNameTxt: Locator;
    readonly passwordTxt: Locator;
    readonly loginBtn: Locator;
    readonly welcomeTb: Locator;

    constructor (private page: Page){
        this.page = page;
        this.loginTb = page.getByRole('link', { name: 'Log in' });
        this.userNameTxt = page.locator('#loginusername');
        this.passwordTxt = page.locator('#loginpassword');
        this.loginBtn = page.getByRole('button', { name : 'Log in' });
        this.welcomeTb = page.locator('#nameofuser');
    }

    async login (userName:string, password:string){
        await this.loginTb.click();
        await this.userNameTxt.click();
        await this.userNameTxt.fill(userName);
        await this.passwordTxt.click();
        await this.passwordTxt.fill(password);
        await this.loginBtn.click();
    }

    async getLoginUser () : Promise<string> {
        await this.welcomeTb.waitFor({ state: 'visible' });
        const text =  await this.welcomeTb.textContent();
        return text?.trim() ?? '';
    }

}