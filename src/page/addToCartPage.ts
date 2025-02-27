import { Locator, Page } from '@playwright/test';

export default class AddToCartPage {

    catergoryTb: Locator;
    addToCartBtn: Locator;
    cartTb: Locator;

    constructor (private page: Page){
        this.page = page;
        this.catergoryTb;
        this.addToCartBtn = page.getByRole('link', { name: 'Add to cart' });
        this.cartTb = page.getByRole('link', { name: 'Cart' });
        const locator = page.frameLocator('#my-frame').getByRole('button', { name: 'Sign in' });
        
    }

    async addProducts (category:string, product:string){
        await this.page.getByRole('link', { name: category }).waitFor({ state: 'visible', timeout: 100000 });
        await this.page.getByRole('link', { name: category }).click();
        await this.page.getByRole('link', { name: product }).waitFor({ state: 'visible', timeout: 100000 });
        await this.page.getByRole('link', { name: product }).click();
        await this.addToCartBtn.waitFor({ state: 'visible', timeout: 20000 });
        await this.addToCartBtn.click();
    }

    async navigateToCart (){
        await this.cartTb.waitFor({ state: 'visible', timeout: 20000 });
        await this.cartTb.click();
    }

    async getPriceValue (category:string, product:string, price:string) : Promise<boolean> {
        await this.page.getByRole('link', { name: category }).click();
        const productPriceXpath = `//a[text()='${product}']/../../h5[text()='${price}']`;

        const count = await this.page.locator(productPriceXpath).count();
        console.log(`Matched Elements: ${count}`);

        await this.page.waitForSelector(productPriceXpath, { state: 'visible' });
        return await this.page.locator(productPriceXpath).isVisible();
    }

    async getProductAndPriceValue (value:string) : Promise<boolean> {
        const numericPrice = value.replace("$", "");
        const productXpath = `//tbody[@id='tbodyid']//td[contains(text(),'${numericPrice}')]`;
        await this.page.waitForSelector(productXpath, { state: 'visible' });
        return await this.page.locator(productXpath).isVisible();
    }
}   