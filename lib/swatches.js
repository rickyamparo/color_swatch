const $ = require('jquery')

$('button').click(function(){
  const userText = $('textarea').val()
  alert(userText)
})
