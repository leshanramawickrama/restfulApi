import { Locator, Page } from '@playwright/test';

export default class SigninPage {

    readonly signupTb: Locator;
    readonly userNameTxt: Locator;
    readonly passwordTxt: Locator;
    readonly signupBtn: Locator;

    constructor (private page: Page){
        this.signupTb = page.getByRole('link', { name: 'Sign up' });
        this.userNameTxt = page.getByLabel('Username:');
        this.passwordTxt = page.getByLabel('Password:');
        this.signupBtn = page.getByRole('button', { name : 'Sign up' });
    }

    async signUp (userName:string, password:string){
        await this.signupTb.click();
        await this.userNameTxt.click();
        await this.userNameTxt.fill(userName);
        await this.passwordTxt.click();
        await this.passwordTxt.fill(password);
        await this.signupBtn.click();
    }
}