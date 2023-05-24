$('dd').addClass('invisible')

$('#bt').on('click', function(){
    $('dd').toggleClass('invisible')
})

$('dt').on('click', function(){
    $(this).toggleClass('highlight')
})
