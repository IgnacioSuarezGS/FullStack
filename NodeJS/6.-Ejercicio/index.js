const axios = require('axios');
const cher = require('cheerio');

let mainUrl = 'https://tiendas.mediamarkt.es/smartphones-libres?perPage=50';
let examplePage = 'https://tiendas.mediamarkt.es/smartphones-libres/pagina'
let allPagesFromMediamarkt = [];
let smartphones = [];


function findPagesFromMediamarkt() {
    return axios.get(mainUrl)
        .then(response => {
            let $ = cher.load(response.data);
            let numberOfPages = parseInt($('div.pagerContainer a:nth-of-type(4)').html());
            for (let i = 0; i < 2; i++) {
                let page = i + 1;
                allPagesFromMediamarkt.push(axios.get(examplePage + page + "?perPage=50"));
            }
        })
}

findPagesFromMediamarkt()
    .then(promises => {
        // Promise.all(allPagesFromMediamarkt)
        //     .then(results => {
        //         console.log(results);
        //         // resulst[0].data
        //     })
        let i = 1;
        promises.foreach(result => {
            setTimeout((i) => {
                result.then(response => console.log(response.data));
            })
        }, 1000 * i);
    })