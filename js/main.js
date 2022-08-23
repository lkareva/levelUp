//block-3
$(document).ready(function () {
   $('.block-3__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<div class="block-3__prev"></div>',
        nextArrow: '<div class="block-3__next"></div>',	
        appendArrows: '.block-3__slider-navigation',
        responsive: [
            {
                breakpoint: 1015,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    });
});
//

//block-5

$(document).ready(function () {
    let countdown = 30 * 60 * 1000;
    let timerId = setInterval(function(){
        countdown -= 1000;
        let min = Math.floor(countdown / (60 * 1000));
        let sec = Math.floor((countdown - (min * 60 * 1000)) / 1000);
        if (min < "10") { min = "0" + min; }
		if (sec < "10") { sec = "0" + sec; }
        if (countdown <= 0) {
            clearInterval(timerId);
        } else {
            $("#countTime").html(min + " : " + sec);
        }
    }, 1000);

    $('#form').on('submit', async function (e) {
        e.preventDefault();
        formValidate(this);
    });
    

});
//
function formValidate(form) {
    let error = 0;
    $('.req').each(function () {
        formRemoveError(this);
        if ($(this).hasClass('tell')) {
            if(tellTest($(this).val())){
                formAddError(this);
                error++;
            }
        } else {
            if($(this).val() === ''){
                formAddError(this);
                error++;
            }
        }
    })
}
function formAddError(input) {
    $(input).addClass('error');
}
function formRemoveError(input) {
    $(input).removeClass('error');
}
function tellTest(val) {
    return !/^[0-9]{1,11}$/.test(val);
}