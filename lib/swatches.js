const $ = require('jquery')
import COLORS from './data/colors'
import postColor from './ajax_requests/post_colors'

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

  colorSifter(splitText, colorArray)
  const uniqueText = unique(colorArray)
  colorAppender(uniqueText)
}

const unique = (array) => {
  return array.filter(function(element, index, self){
    return index === self.indexOf(element);
  })
}

const colorSifter = (array, colorArray) => {
  array.forEach(function(word){
    if (COLORS[word]) {
      postColor(word)
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
