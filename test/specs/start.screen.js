const homePage = require('../pages/home.page.js');

describe('Start screen', () => {
    it('should verify start screen', async () => {
        await expect(homePage.webdriverLogo).toBeDisplayed();
        await expect(homePage.appDesc).toHaveText('Demo app for the appium-boilerplate');
    })
})
