import { test, expect } from '@playwright/test';
import Common from '../src/function/common';
import Users from '../src/function/users';
import AddToCart from '../src/function/addToCart';
import userProfiles from '../test-data/users.json'
import products from '../test-data/testData.json'

test.describe.serial('Demo UI Test Suite', () => {

  test('verify user registration test', async ({ page }) => {
    
    const users = new Users(page);
    const common = new Common(page);          
    await common.openApp();
    await users.signUp();
    await users.login();
    expect(await users.getLoggedInUserName()).toContain(userProfiles.username);
  })

  test('verify add to cart test', async ({ page }) => {
    
    const users = new Users(page);
    const common = new Common(page);
    const addToCart = new AddToCart(page);          
    await common.openApp();
    await users.login();
    expect(await users.getLoggedInUserName()).toContain(userProfiles.username);
    await addToCart.addProductToCart(products.mobile.name,products.mobile.item);
    expect(await addToCart.isProductPriceDisplay(products.mobile.name,products.mobile.item,products.mobile.price)).toBeTruthy();
    await addToCart.addProductToCart(products.laptop.name,products.laptop.item);
    expect(await addToCart.isProductPriceDisplay(products.laptop.name,products.laptop.item,products.laptop.price)).toBeTruthy();
    await addToCart.goToCart();
    expect(await addToCart.isProductItemDisplay(products.laptop.item)).toBeTruthy();
    expect(await addToCart.isProductItemDisplay(products.laptop.price)).toBeTruthy();
    expect(await addToCart.isProductItemDisplay(products.mobile.item)).toBeTruthy();
    expect(await addToCart.isProductItemDisplay(products.mobile.price)).toBeTruthy();
  })

  test.afterAll(async ({ browser }) => {
    await browser.close(); 
  });

})