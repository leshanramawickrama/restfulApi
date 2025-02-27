import { Locator, Page } from '@playwright/test';
import SigninPage from '../page/signupPage';
import LoginPage from '../page/loginPage';
import CommonPage from '../page/commonPage';
import userProfiles from '../../test-data/users.json'
import * as fs from 'fs';
import * as path from 'path'; 

export default class Users {

    signinPage: SigninPage;
    loginPage: LoginPage;
    commonPage: CommonPage;

    constructor(private page: Page) {
        this.signinPage = new SigninPage(page);
        this.loginPage = new LoginPage(page);
        this.commonPage = new CommonPage(page);
    }

    async signUp (){
        const userName = userProfiles.username+Math.random().toString(5).substring(2, 10);

        const userPassword = userProfiles.password;
        await this.signinPage.signUp(userName,userPassword);
        await this.commonPage.acceptPopup();

        const jsonFilePath = path.join(__dirname, '../../test-data/users.json');
        this.writeValueToJson(jsonFilePath, 'username', userName);
    }

    async login (){
        await this.loginPage.login(userProfiles.username,userProfiles.password);
    }

    
    async writeValueToJson(filePath: string, key: string, value: any) {

        const jsonData = fs.readFileSync(filePath, 'utf-8');
        const data = JSON.parse(jsonData);
        data[key] = value;
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    }

    async getLoggedInUserName () : Promise<string> {
        const user =  await this.loginPage.getLoginUser();
        return user;
    }

}
