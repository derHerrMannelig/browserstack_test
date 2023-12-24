class Page {
    async touch (element) {
        await browser.touchAction([
            { action: 'tap', element: await element }
        ]);
    }
    async drag (x1, y1, x2, y2) {
        await browser.touchAction([
            { action: 'press', x: x1, y: y1 },
            { action: 'wait', ms: 1000 },
            { action: 'moveTo', x: x2, y: y2 },
            { action: 'release'}
        ]);
    }
}

module.exports = new Page();