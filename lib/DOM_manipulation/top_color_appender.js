const $ = require('jquery')

const topColorAppender = (data) => {
  $('span.top-color').append(data.value + " Color Count:" + data.color_count)
}

module.exports = topColorAppender
