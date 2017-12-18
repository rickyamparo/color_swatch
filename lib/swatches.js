const $ = require('jquery')
import COLORS from './data/colors'

$('button').click(function(){
  const userText = $('textarea').val().toLowerCase()
  const splitText = userText.split(' ')
  const colorArray = []

  colorSifter(splitText, colorArray)
  const uniqueText = unique(colorArray)
  colorAppender(uniqueText)
})

$('textarea').keydown(function(){
  if (event.which == 13) {
    const userText = $('textarea').val().toLowerCase()
    const splitText = userText.split(' ')
    const colorArray = []

    colorSifter(splitText, colorArray)
    const uniqueText = unique(colorArray)
    colorAppender(uniqueText)
  }
})


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

const postColor = (color) => {
  const colorPayload = {"color":{ "value": color } }
  $.post('https://color-swatch-api.herokuapp.com/api/v1/colors', colorPayload)
}
