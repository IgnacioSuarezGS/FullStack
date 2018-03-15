var axios = require('axios');
var cher = require('cheerio');
var urlWeb = 'https://tiendas.mediamarkt.es/smartphones-libres';
var smartphones = [];


axios.get(urlWeb).then(response => {
    var $ = cher.load(response.data);
    // var result = $(".product.product10.product10Last").html();
    // $(".product.product10").each(function (index) {
    $(".product.product10").each((index, element) => {
        let smartphone = {
            name: "",
            picture: "",
            description: "",
            price: 0
        }
        // smartphone.name = $(this).find(".productName span").html();
        // smartphone.picture = $(this).find(".product10ImageProduct img").html();
        // smartphone.description = $(this).find(".productName span").html();
        // smartphone.price = $(this).find(".productName span").html();
        smartphone.name = $(element).find(".productName span").html().trim("\r\n\/").trim("");
        smartphone.picture = $(element).find(".product10ImageProduct img").attr("src").trim("\r\n\/").trim("");
        smartphone.description = $(element).find(".product10ShortDescription").text().trim("\r\n\/").trim("");
        smartphone.price = $(element).find(".productPrices").text().trim("\r\n\/").trim("");
        smartphones.push(smartphone);
    })
    console.log(smartphones);
})