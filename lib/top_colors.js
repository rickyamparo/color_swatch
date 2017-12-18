const $ = require('jquery')

let colorValue;
let colorCount;


$('span.top-color').ready(function(){
  $.get('https://color-swatch-api.herokuapp.com/api/v1/top_color', function(data) {
    $('span.top-color').append(data.value + " Color Count:" + data.color_count)
  })
})
