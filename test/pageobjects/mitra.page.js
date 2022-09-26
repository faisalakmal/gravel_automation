
const Page = require('./page');

class MitraPage extends Page {
    
    get btnGabungSekarang () {
        return $('//button[contains(text(),"Daftar Sekarang")]');
    }

    get fieldCarousel () {
        return $('//div[@class="react-stacked-center-carousel "]')
    }
}

module.exports = new MitraPage();
