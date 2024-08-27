
$(function () {
    $('.to_top').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 1000)
    })
});

$(function(){
    $('#flnk').on('change', function(){
        const lnk = $(this).val();
        if (lnk) {
            window.open(lnk)
        }
    })
})
