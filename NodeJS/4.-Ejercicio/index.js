var axios = require('axios');
var cher = require('cheerio');
var urlWeb = 'https://tiendas.mediamarkt.es/smartphones-libres';

axios.get(urlWeb).then(response => {
    var $ = cher.load(response.data);
    var result = $('.resumePaginator').html();
    result = result.substring(result.indexOf("de ") + 3);
    console.log(result);
})