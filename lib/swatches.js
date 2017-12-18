const $ = require('jquery')
import COLORS from './data/colors'

$('button').click(function(){
  const userText = $('textarea').val().toLowerCase()
  const splitText = userText.split(' ')
  const uniqueText = unique(splitText)
  const colorArray = []
  colorSifter(uniqueText, colorArray)

  colorAppender(colorArray)
})


const unique = (array) => {
  return array.filter(function(element, index, self){
    return index === self.indexOf(element);
  })
}

const colorSifter = (array, colorArray) => {
  array.forEach(function(word){
    if (COLORS[word]) {
      colorArray.push(word)
    }
  })
  return colorArray
}

const colorAppender = (arrayOfColors) => {
  arrayOfColors.forEach(function(color){
    let hexValue = COLORS[color]
    $('article.colorized-text')
    .append(`<div class="swatch" style="background-color:${hexValue};"></div>`)
  })
}
