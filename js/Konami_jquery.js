$( "#deal" ).hide()

let keyCombo = []


$(document).keyup(function(event){
    if(event.key === "ArrowUp") {
        keyCombo.push(event.key)
        console.log(keyCombo)
    }
    if(event.key === "ArrowDown") {
        keyCombo.push(event.key)
        console.log(keyCombo)
    }
    if(event.key === "ArrowLeft") {
        keyCombo.push(event.key)
        console.log(keyCombo)
    }
    if(event.key === "ArrowRight") {
        keyCombo.push(event.key)
        console.log(keyCombo)
    }
    if(event.key === "b") {
        keyCombo.push(event.key)
        console.log(keyCombo)
    }
    if(event.key === "a") {
        keyCombo.push(event.key)
        console.log(keyCombo)
    }
});


$(document).keyup(function(event) {
    if (event.key === "Enter") {
        if(change(keyCombo) === true) {
            $( "#cover" ).removeClass( "d-none" );
            $( "#video" ).removeClass( "d-none" );
            $( "#video" ).append("<iframe width=\"100%\" height=\"300\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1242868615&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true\"></iframe><div style=\"font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;\"><a href=\"https://soundcloud.com/rick-astley-official\" title=\"Rick Astley\" target=\"_blank\" style=\"color: #cccccc; text-decoration: none;\">Rick Astley</a> · <a href=\"https://soundcloud.com/rick-astley-official/never-gonna-give-you-up-4\" title=\"Never Gonna Give You Up\" target=\"_blank\" style=\"color: #cccccc; text-decoration: none;\">Never Gonna Give You Up</a></div>")
            $( "#question" ).addClass( "d-none" )
            $( "#deal" ).slideDown( 12000 );
        }
    }
    // keyCombo = ''
});
function change (arr) {
    console.log(arr.join(''));
    let arrString = arr.join('')

    if(arrString === 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba') {
        return true
    }
}


//
// console.log(clearArr())
// console.log(keyCombo);
// console.log(code);

// $( "#video" ).removeClass( "test" );
