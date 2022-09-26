
const stepHomePage = require('../pageobjects/home.page');
const Page = require('../pageobjects/page');

class stepHomePages extends Page {
    async menuGabungMitra () {
        await stepHomePage.btnGabungMitra.click();
    }

    async menuInspirasi () {
        await stepHomePage.btnInspirasi.click();
    }

    async menuKarir () {
        await stepHomePage.btnKarir.click();
    }

    async menuPlayStore () {
        await stepHomePage.btnPlayStore.click();
    }

    async menuAppStore () {
        await stepHomePage.btnAppStore.click();
    }
}

module.exports = new stepHomePages();
