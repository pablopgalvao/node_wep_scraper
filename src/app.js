const axios = require('axios')
const cheerio = require('cheerio')


var subdom = {
    HOME: "/pt-br/fwc22",
    SCAN: "/pt-br/fwc22/scan",
    CONGRATS: "/pt-br/fwc22/scan/parabens",
    REGISTER: "/pt-br/user/sso/register",
    RESET: "/pt-br/user/sso/updatepassword",
    LOGIN: "/pt-br/user/sso/login",
    CONFIRMSIGNUP: "/pt-br/user/sso/confirmsignup",
    RESULT_PRIZE: "/pt-br/fwc22/resultado",
    PROFILE_E_NUMBERS: "/es-ar/fwc22/cupons",
    CONTACT_US: "/pt-br/fwc22/faleconosco",
    PRIVACY_POLICY: "/pt-br/fwc22/politica-de-privacidade",
    TERMS_AND_CONDITIONS: "/pt-br/fwc22/termos-e-condicoes",
    RULES: "/pt-br/fwc22/regulamento",
    EDIT_PROFILE: "/pt-br/user/sso/profile",
    PRIZES: "/pt-br/fwc22/premios",
    HOW_IT_WORKS: "/pt-br/fcw22/como-funciona",
    FAQ: "/pt-br/fwc22/perguntas-frequentes",
    VENCEDORES: "/pt-br/fwc22/vencedores",
}


Object.keys(subdom).forEach(function(item) {
    console.log(item + " - " + subdom[item])
    //console.log(`https://budweiser.com/es-ar/fwc22` + subdom[item] )
})


const fetchData = async(url) => {
    const result = await axios.get(url)
    return result.data
}

const main = async () => {
    const content = await fetchData(URL)
    const $ = cheerio.load(content)
    let budweiser = []
    $('h2').each((i,e) => {
        //const h2 = (`H2 número ${i}: \n ${$(e).text()}` + '\n')
    })
    const  h1 = $('h1').text()

    const metadescription = $('meta[property="og:description"]').attr('content') || $('meta[name="description"]').attr('content')
    const metatitle = $('meta[property="og:title"]').attr('content') || $('title').text() || $('meta[name="title"]').attr('content')
    const url = $('meta[property="og:url"]').attr('content')
    const site_name = $('meta[property="og:site_name"]').attr('content')
    const robots = $('meta[name="robots"]').attr('content')
    /* console.log('H1: \n' + h1 + '\n')
    //console.log(h2 + '\n')
    console.log('META TITULO:  \n' + metatitle + '\n')
    console.log('META DESCRIÇÃO:  \n' + metadescription + '\n')
    console.log('META URL:  \n' + url + '\n')
    console.log('SITE NAME:  \n' + site_name + '\n')
    console.log('SITE ROBOTS:  \n' + robots + '\n') */
    //console.log(metadescription,metatitle,url,site_name, robots)
    
    const data = {Heading_1: h1,metadescription,metatitle,url,site_name, robots}
    budweiser.push(data)
    //console.log(budweiser)
}
main()