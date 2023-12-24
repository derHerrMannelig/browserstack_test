const page = require('../pages/page.js');
const homePage = require('../pages/home.page.js');
const webviewPage = require('../pages/webview.page.js');

describe('Webview', () => {
    it('should verify webview tab', async () => {
        await page.touch(homePage.webviewBtn);
        await expect(webviewPage.webdriverDesc).toBeDisplayed();
        await expect(webviewPage.webdriverDesc).toHaveText('Next-gen browser and mobile automation test framework for Node.js');
        await browser.saveScreenshot('./shot-webview1.png');
        await page.drag(500, 1500, 500, 500);
        await browser.saveScreenshot('./shot-webview2.png');
    })
})
