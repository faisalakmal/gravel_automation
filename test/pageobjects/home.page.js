
const Page = require('./page');

class HomePage extends Page {

    get titleGravel () {
        return $('//title');
    }
    
    get btnGabungMitra () {
        return $('//div[@class="css-s5dbyh"]/a[contains(@href, "mitra")]');
    }

    get btnInspirasi () {
        return $('//div[@class="css-s5dbyh"]//a[contains(@href, "blog")]');
    }

    get btnKarir () {
        return $('//div[@class="css-s5dbyh"]//a[contains(@href, "careers")]');
    }

    get btnPlayStore () {
        return $('//div[@class="desktop"]//a[1]');
    }

    get btnAppStore () {
        return $('//div[@class="desktop"]//a[2]');
    }

    get btnLanguage () {
        return $('//div[@aria-label="Without label" and .="ID"]');
    }

    get ddLanguageId () {
        return $('//li[@role="option"]//a[normalize-space()="ID"]')
    }

    get ddLanguageEn () {
        return $('//li[@role="option"]//a[normalize-space()="EN"]')
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

module.exports = new HomePage();
