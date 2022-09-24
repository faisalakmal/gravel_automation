
const homePage = require('../pageobjects/home.page');
const stepHomePage = require('../stepdefinition/home.page');

describe('Gravel Home Page', () => {
    it.skip('should be open the Gravel home page and verify the title', async () => {
        await homePage.open();
        await browser.maximizeWindow();

        await expect(homePage.titleGravel).toHaveTitle('Gravel - Tukang Proyek Mudah & Aman');
    });

    it('should be open the Gabung Jadi Mitra page and verify the title', async () => {
        // const btnGabungJadiMitra = $('//div[@class="css-s5dbyh"]/a[contains(@href, "mitra")]')
        await homePage.open();
        await browser.maximizeWindow();
        await browser.pause(3000);

        // btnGabungJadiMitra.click();
        await stepHomePage.menuGabungMitra();
        await browser.pause(3000);
    });
});
