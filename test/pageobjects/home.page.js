
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
        return $('//a[normalize-space()="Play Store"]');
    }

    get btnAppStore () {
        return $('//a[normalize-space()="App Store"]');
    }

    get btnLanguage () {
        return $('//div[@aria-label="Without label" and .="ID"]');
    }

    /**
    button //div[@aria-label='Without label' and .='ID']
    pilihan //li[@role='option']//a[normalize-space()='ID']
    **/

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

module.exports = new HomePage();
