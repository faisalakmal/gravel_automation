
const allureReporter = require('@wdio/allure-reporter').default
const page = require('../pageobjects/page');
const homePage = require('../pageobjects/home.page');
const stepHomePage = require('../stepdefinition/home.page');

describe('Gravel Home Page', () => {
    // beforeEach(async () => {
    //     await browser.maximizeWindow();
    // });

    it.only('should be open the Gravel home page and verify the title', async () => {
        await homePage.open();
        await browser.pause(1000);
        await expect(homePage.titleGravel).toHaveTitle('Gravel - Tukang Proyek Mudah & Aman');
    });

    it.only('should be open the Gabung Jadi Mitra page and verify the url', async () => {
        await stepHomePage.menuGabungMitra();
        const paramUrl = await browser.getUrl();
        console.log(paramUrl)

        await expect(homePage.open('mitra')).toHaveUrlContaining('mitra');
        // await expect(homePage.open).toHaveUrlContaining('/mitra')
    });

    it('should be open the Inspirasi page and verify the url', async () => {
        await stepHomePage.menuInspirasi();

        await browser.pause(1000);
    });

    it('should be open the Karir page and verify the url', async () => {
        await stepHomePage.menuKarir();

        await browser.switchWindow('');
        await browser.pause(2500);
    });

    it.skip('should be change the language into english and verify it', async () => {
        await homePage();
    })

    allureReporter.addFeature('Feature');
});
