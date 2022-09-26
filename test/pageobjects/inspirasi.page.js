
const Page = require('./page');

class HomePage extends Page {
    
    get btnGabungSekarang () {
        return $('//button[contains(text(),"Daftar Sekarang")]');
    }
}

module.exports = new HomePage();
