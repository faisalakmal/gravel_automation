
const page_mitraPage = require('../pageobjects/mitra.page');
const Page = require('../pageobjects/page');

class stepMitraPages extends Page {
    async btnGabungSekarang () {
        await page_mitraPage.btnGabungSekarang.click();
        await browser.switchWindow('https://play.google.com/');
        await expect(browser).toHaveUrl('https://play.google.com/store/apps/details?id=com.graveltechnology.kernet');
        await browser.closeWindow();
        await browser.switchWindow();
    }
}

module.exports = new stepMitraPages();
