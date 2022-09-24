
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

    // async gabungMitra () {
    //     await this.btnGabungMitra.click();
    // }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

module.exports = new HomePage();
