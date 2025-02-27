import { Locator, Page } from '@playwright/test';
import AddToCartPage from '../page/addToCartPage';
import CommonPage from '../page/commonPage';
import HomePage from '../page/homePage';

export default class AddToCart {

    addToCartPage: AddToCartPage;
    commonPage: CommonPage;
    homePage: HomePage;

    constructor(private page: Page) {
        this.addToCartPage = new AddToCartPage(page);
        this.commonPage = new CommonPage(page);
        this.homePage = new HomePage(page);
    }

    async addProductToCart (category:string, product:string){
        await this.homePage.navigateToHome();
        await this.addToCartPage.addProducts(category,product);
        await this.commonPage.acceptPopup();
    }

    async goToCart (){
        await this.addToCartPage.navigateToCart();
    }

    async isProductPriceDisplay (category:string, product:string, price:string) : Promise<boolean> {
        await this.homePage.navigateToHome();
        return await this.addToCartPage.getPriceValue(category,product,price);
    }

    async isProductItemDisplay (value:string) : Promise<boolean> {
        return await this.addToCartPage.getProductAndPriceValue(value);
    }
}
