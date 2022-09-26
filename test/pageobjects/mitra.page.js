
const Page = require('./page');

class HomePage extends Page {
    
    get btnGabungSekarang () {
        return $('//button[contains(text(),"Daftar Sekarang")]');
    }

    get fieldCarousel () {
        return $('//div[@class="react-stacked-center-carousel "]')
    }

    get btnCaroulesNext () {
        return $('//*[@id="__next"]/div/div/section[3]/div/div/div[2]/div/div[3]/button')
    }

    get btnCaroulesPrevious () {
        return $('//*[@id="__next"]/div/div/section[3]/div/div/div[2]/div/div[2]/button')
    }
}

module.exports = new HomePage();
