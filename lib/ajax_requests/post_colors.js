const $ = require('jquery')
import COLORS from '../data/colors'

const postColor = (color) => {
  const colorPayload = {"color":{ "value": color } }
  $.post('https://color-swatch-api.herokuapp.com/api/v1/colors', colorPayload)
}

module.exports = postColor
