const page = require('../pages/page.js');
const homePage = require('../pages/home.page.js');
const dragPage = require('../pages/drag.page.js');

describe('Drag', () => {
    it('should verify drag minigame', async () => {
        await page.touch(homePage.dragBtn);
        await expect(dragPage.dragTitle).toBeDisplayed();
        await expect(dragPage.dragTitle).toHaveText('Drag and Drop');
        await page.drag(200, 1600, 300, 800);
        await page.drag(350, 1600, 750, 1050);
        await page.drag(550, 1600, 750, 600);
        await page.drag(750, 1600, 550, 600);
        await page.drag(900, 1600, 550, 1050);
        await page.drag(250, 1750, 750, 800);
        await page.drag(450, 1750, 550, 800);
        await page.drag(650, 1750, 300, 600);
        await page.drag(800, 1750, 300, 1050);
        await expect(dragPage.dragCongrats).toBeDisplayed();
        await expect(dragPage.dragCongrats).toHaveText('Congratulations');
        await page.touch(dragPage.retryBtn);
        await expect(dragPage.dragTitle).toBeDisplayed();
        await expect(dragPage.dragTitle).toHaveText('Drag and Drop');
    })
})
