
const Page = require('./page');

class InspirasiPage extends Page {
    
    get searchInspirasi () {
        return $('//input[@id="outlined-adornment-weight"]')
    }
}

module.exports = new InspirasiPage();
