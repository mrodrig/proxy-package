const fs = require('fs'),
    axios = require('axios'),
    cheerio = require('cheerio'),
    html = fs.readFileSync('./test.html').toString();

function fetchAndUpdateElement(element, url) {
    axios.get(url)
        .then((response) => {
            element.removeAttr('src');

        })
        .catch((err) => {
            // Error occurred fetching resource; network or server error or not needed?...
        })
}

let $ = cheerio.load(html);
$('script')
    .forEach(fetchAndUpdateElement)
