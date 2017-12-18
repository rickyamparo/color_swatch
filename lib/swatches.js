const $ = require('jquery')
import COLORS from './data/colors'
import swatchHelpers from './helpers/swatches_helpers'

$('button').click(function(){
  createSwatches()
})

$('textarea').keydown(function(){
  if (event.which == 13) {
    createSwatches()
  }
})

const createSwatches = () => {
  const userText = $('textarea').val().toLowerCase()
  const splitText = userText.split(' ')
  const colorArray = []

  swatchHelpers.colorSifter(splitText, colorArray)
  const uniqueText = swatchHelpers.unique(colorArray)
  colorAppender(uniqueText)
}


const colorAppender = (arrayOfColors) => {
  arrayOfColors.forEach(function(color){
    let hexValue = COLORS[color]
    $('article.colorized-text')
    .append(`<div class="swatch" style="background-color:${hexValue};"></div>`)
  })
}
