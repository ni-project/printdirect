
$(document).ready(function() {

    $('select').selectric();

    offerContainerSetWidth();

    $('.owl-carousel').owlCarousel({
        margin: 0,
        loop: false,
        autoWidth: true
    });

});

$(document).on('click', '.js-control-button-handler', function() {
    var direction = $(this).data('control'),
        formControl = $(this).closest('.js-control-button-container').find('.js-form-control'),
        currentCount = parseInt(formControl.val());

    switch (direction) {
        case 'min' :
            currentCount = currentCount - 1;
            break;

        case 'max' :
            currentCount = currentCount + 1;
            break;

    }

    if ( currentCount <= 0 ) {

        currentCount = 1;

    } else if ( currentCount >= 1000 ) {

        currentCount = 999;

    }

    formControl.val(currentCount);
});

$(document).on('click', '.js-button-favorites', function() {
    var buttonMobile = $(this).closest('.cart').find('.js-cart-button-favorites-handler');

    $(this).toggleClass('active');

    buttonMobile.toggleClass('active');

    if ( buttonMobile.hasClass('active') ) {
        buttonMobile.text('В избранном');
    } else {
        buttonMobile.text('В избранное');
    }
});

$(document).on('click', '.js-cart-button-remove-handler', function() {
    var cartListContainer = $(this).closest('.cart-list'),
        cartCount = cartListContainer.find('.cart').length;

    $(this).closest('.cart').remove();

    if ( cartCount == 1 ) { cartListContainer.remove(); }
});

$(document).on('click', '.js-cart-button-favorites-handler', function() {
    $(this).toggleClass('active');

    if ( $(this).hasClass('active') ) {
        $(this).text('В избранном');
    } else {
        $(this).text('В избранное');
    }

    $(this).closest('.cart').find('.js-button-favorites').toggleClass('active');
});

function offerContainerSetWidth() {
    var win_x = document.documentElement.clientWidth;
    var contentPadding = win_x > 750 ? 48 : 0;

    if ( win_x < 1000 ) {

        $('.offer-wrapper').css({ width: (win_x - contentPadding) + 'px' });

    } else {
        $('.offer-wrapper').css({ width: '100%' });
    }
}

$(window).resize(function() {

    offerContainerSetWidth();

});
