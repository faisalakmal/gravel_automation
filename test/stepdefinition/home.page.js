
const stepHomePage = require('../pageobjects/home.page');
const Page = require('../pageobjects/page');

class stepHomePages extends Page {
    async menuGabungMitra () {
        await stepHomePage.btnGabungMitra.click();
    }
}

module.exports = new stepHomePages();
