
const allureReporter = require('@wdio/allure-reporter').default
const page_homePage = require('../pageobjects/home.page');
const step_homePage = require('../stepdefinition/home.page');
const step_inspirasiPage = require('../stepdefinition/inspirasi.page')

describe('Gravel Home Page', () => {
    before(async () => {
        await browser.maximizeWindow();
        await page_homePage.open();
    });

    it('should be open the Gravel home page', async () => {
        await step_homePage.menuHome();
    });

    it('should be open the Gabung Jadi Mitra page', async () => {
        await step_homePage.menuGabungMitra();
    });

    it('should be open the Inspirasi page', async () => {
        await step_homePage.menuInspirasi();
        await step_inspirasiPage.searchInspirasi();
    });

    it('should be open the Karir page', async () => {
        await step_homePage.menuKarir();
    });

    it('should be open the Playtore page', async () => {
        await step_homePage.menuPlayStore();
    });

    it('should be open the Appstore page', async () => {
        await step_homePage.menuAppStore();
    });

    it('should be change the language into english', async () => {
        await step_homePage.changeToEn();
        await browser.pause(5000)
    });

    allureReporter.addFeature('Feature');
});
