const $ = require('jquery')
import COLORS from './data/colors'

$('button').click(function(){
  const userText = $('textarea').val().toLowerCase()
  const splitText = userText.split(' ')
  const colorArray = []

  const uniqueText = unique(splitText)

  uniqueText.forEach(function(word){
    if (COLORS[word]) {
      colorArray.push(word)
    }
  })

  colorArray.forEach(function(color){
    let hexValue = COLORS[color]
    $('article.colorized-text')
    .append(`<div class="swatch" style="background-color:${hexValue};"></div>`)
  })
})


const unique = (array) => {
  return array.filter(function(element, index, self){
    return index === self.indexOf(element);
  })
}
