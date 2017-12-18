const $ = require('jquery')
import COLORS from './data/colors'
import swatchHelpers from './helpers/swatches_helpers'
import colorAppender from './DOM_manipulation/swatches_appender'
import topColorAppender from './DOM_manipulation/top_color_appender'

$(document).ready(function(){

  findTopColor()

  $('button').click(function(){
    createSwatches()
  })

  $('textarea').keydown(function(){
    if (event.which == 13) { createSwatches() }
  })

})

const createSwatches = () => {
  const userText = $('textarea').val().toLowerCase()
  const splitText = userText.split(' ')
  const colorArray = []

  swatchHelpers.colorSifter(splitText, colorArray)
  const uniqueText = swatchHelpers.unique(colorArray)
  colorAppender(uniqueText)
}

const findTopColor = () => {
  $.get('https://color-swatch-api.herokuapp.com/api/v1/top_color', function(data) {
    topColorAppender(data)
  })
}
