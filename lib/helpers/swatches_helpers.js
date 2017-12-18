import COLORS from '../data/colors'
import postColor from '../ajax_requests/post_colors'

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

module.exports = {unique, colorSifter}
