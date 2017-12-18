const $ = require('jquery')

const getTopColor = () => {
  return $.get('https://color-swatch-api.herokuapp.com/api/v1/top_color')
}

module.exports = getTopColor
