//var meta = document.querySelector('meta[name="description"]').content
//console.log(meta)

fetch("https://budweiser.com/pt-br/fwc22")
    //.then(result => result.text())
    .then(html => {
        console.log(html);
           const $ = cheerio.load(html);
           const title = $('meta[property="og:title"]').attr('content') || $('title').text() || $('meta[name="title"]').attr('content')
           const description = $('meta[property="og:description"]').attr('content') || $('meta[name="description"]').attr('content')
           const url = $('meta[property="og:url"]').attr('content')
           const site_name = $('meta[property="og:site_name"]').attr('content')
           const image = $('meta[property="og:image"]').attr('content') || $('meta[property="og:image:url"]').attr('content')
           const icon = $('link[rel="icon"]').attr('href') || $('link[rel="shortcut icon"]').attr('href')
           const keywords = $('meta[property="og:keywords"]').attr('content') || $('meta[name="keywords"]').attr('content')
       // do something with the variables
    }).catch(error => {
        console.log(error);
    })
    
/*
const request = require("request-promise");
const cheerio = require('cheerio') 
    const URL = 'http://budweiser.com/pt-bt/fwc22'
    async function acesso(){
        const response = await request(URL)
        console.log(description)
    }
    acesso()
*/
    