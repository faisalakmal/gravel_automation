
const page_inspirasiPage = require('../pageobjects/inspirasi.page');
const Page = require('../pageobjects/page');

class stepMitraPages extends Page {
    async searchInspirasi () {
        await page_inspirasiPage.searchInspirasi.setValue('Perpustakaan');
        await browser.keys('\uE007');
        await expect(page_inspirasiPage.searchInspirasi).toHaveValue('Perpustakaan');
        await page_inspirasiPage.searchInspirasi.clearValue();
    }
}

module.exports = new stepMitraPages();
