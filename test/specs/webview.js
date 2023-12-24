const homePage = require('../pages/home.page.js');
const webviewPage = require('../pages/webview.page.js');

describe('Webview', () => {
    it('should verify webview tab', async () => {
        await browser.touchAction([
            { action: 'tap', element: await homePage.webviewBtn }
        ]);
        await expect(webviewPage.webdriverDesc).toBeDisplayed();
        await expect(webviewPage.webdriverDesc).toHaveText('Next-gen browser and mobile automation test framework for Node.js');
        await browser.saveScreenshot('./shot-webview1.png');
        await browser.touchAction([
            { action: 'press', x: 500, y: 1500 },
            { action: 'wait', ms: 1000 },
            { action: 'moveTo', x: 500, y: 500 },
            { action: 'release'}
        ]);
        await browser.saveScreenshot('./shot-webview2.png');
    })
})
