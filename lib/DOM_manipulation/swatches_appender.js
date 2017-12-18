const $ = require('jquery')
import COLORS from '../data/colors'

const colorAppender = (arrayOfColors) => {
  arrayOfColors.forEach(function(color){
    let hexValue = COLORS[color]
    $('article.colorized-text')
    .append(`<div class="swatch" style="background-color:${hexValue};"></div>`)
  })
}

module.exports = colorAppender
