const page = require('../pages/page.js');
const homePage = require('../pages/home.page.js');
const loginPage = require('../pages/login.page.js');
const { faker } = require('@faker-js/faker');

const randomEmail = faker.internet.email();
const randomPassword = faker.internet.password();

describe('Invalid sign in', () => {
    it('should verify login error with invalid credentials', async () => {
        await page.touch(homePage.loginBtn);
        await expect(loginPage.loginTitle).toBeDisplayed();
        await expect(loginPage.loginTitle).toHaveText('Login / Sign up Form');
        await loginPage.fillCredentials(randomEmail, randomPassword);
        await page.touch(loginPage.btnLogin);
        await expect(loginPage.alertSuccess).toBeDisplayed();
        await expect(loginPage.alertSuccess).toHaveText('Error!');
    })
})
