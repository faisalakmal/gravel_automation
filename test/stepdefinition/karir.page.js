
const stepHomePage = require('../pageobjects/home.page');
const Page = require('../pageobjects/page');

class stepMitraPages extends Page {
    async menuGabungMitra () {
        await stepHomePage.btnGabungMitra.click();
    }
}

module.exports = new stepMitraPages();
