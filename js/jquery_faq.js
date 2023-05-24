$('dd').addClass('invisible')

$('#bt').on('click', function(){
    $('dd').toggleClass('invisible')
})

$('dt').on('click', function(){
    $(this).toggleClass('highlight')
})

$('#bt1').on('click', function(){
    let lastLi1 = $('#national-parks').children()
    let lastLi2 = $('#state-parks-texas').children()
    let lastLi3 = $('#randomN').children()
    lastLi1.last().toggleClass('highlight')
    lastLi2.last().toggleClass('highlight')
    lastLi3.last().toggleClass('highlight')
})

$('#nationalH').on('click', function(){
    let bold1 = $('#national-parks').children()
    $(this).each(function(){
            bold1.toggleClass('bold')
        })
})
$('#stateH').on('click', function(){
    let bold2 = $('#state-parks-texas').children()
    $(this).each(function(){
        bold2.toggleClass('bold')
    })
})
$('#randomH').on('click', function(){
    let bold3 = $('#randomN').children()
    $(this).each(function(){
        bold3.toggleClass('bold')
    })
})

$('li').on('click', function(){
    $(this).parent().children().first().toggleClass('blue')
})