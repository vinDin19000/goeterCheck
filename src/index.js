// goeterCheck.js

const parseMarkdown = require('goeter');

function goeterCheck(markdown) {
    const html = parseMarkdown(markdown);
    console.log(html);
}

module.exports = goeterCheck;
