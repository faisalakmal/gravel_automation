
const page_homePage = require('../pageobjects/home.page');
const page_mitraPage = require('../pageobjects/mitra.page');
const Page = require('../pageobjects/page');

class stepHomePage extends Page {
    async menuHome () {
        const title = await browser.getTitle();
        await expect(browser).toHaveUrlContaining('');
        await expect(title).toBe('Gravel - Tukang Proyek Mudah & Aman');
    }

    async menuGabungMitra () {
        await page_homePage.btnGabungMitra.click();
        await expect(browser).toHaveUrlContaining('/mitra');
        await page_mitraPage.btnGabungSekarang.click();
        await browser.switchWindow('https://play.google.com/');
        await expect(browser).toHaveUrlContaining('/store/apps/details?id=com.graveltechnology.kernet');
        await browser.closeWindow();
        await browser.switchWindow('/mitra');
        await expect(page_mitraPage.fieldCarousel).toBeDisplayed();
    }

    async menuInspirasi () {
        await page_homePage.btnInspirasi.click();
        await expect(browser).toHaveUrlContaining('/blog');
    }

    async menuKarir () {
        await page_homePage.btnKarir.click();
        await browser.switchWindow('https://careers.smartrecruiters.com/');
        await expect(browser).toHaveUrl('https://careers.smartrecruiters.com/gravel');
        await browser.closeWindow();
        await browser.switchWindow('/blog');
    }

    async menuPlayStore () {
        await page_homePage.btnPlayStore.click();
        await browser.switchWindow('https://play.google.com/');
        await expect(browser).toHaveUrl('https://play.google.com/store/apps/details?id=com.graveltechnology.kernet');
        await browser.closeWindow();
        await browser.switchWindow('');
    }

    async menuAppStore () {
        await page_homePage.btnAppStore.click();
        await browser.switchWindow('https://apps.apple.com/');
        await expect(browser).toHaveUrl('https://apps.apple.com/id/app/gravel/id1586769860?l=id');
        await browser.closeWindow();
        await browser.switchWindow('');
    }

    async changeToIn () {
        await page_homePage.btnLanguage.click();
        await browser.pause(3000);
        await page_homePage.ddLanguageId.click();
        await expect(browser).toHaveUrlContaining('/id');
    }

    async changeToEn () {
        await page_homePage.btnLanguage.click();
        await browser.pause(3000);
        await page_homePage.ddLanguageEn.click();
        await expect(browser).toHaveUrlContaining('/en');
    }
}

module.exports = new stepHomePage();
