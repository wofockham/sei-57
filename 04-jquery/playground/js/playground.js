$(document).ready(function () {
    $('#name').on('keyup', function () {
        const name = $(this).val();
        $('header h1').text('Welcome ' + name);
    }).on('focus', function () {
        $('header').addClass('active');
    }).on('blur', function () {
        $('header').removeClass('active');
    });

    $('#toggle').on('click', function () {
        $('img').fadeToggle(800);
    });

    $(window).on('mousemove', function (event) {
        const shade = Math.floor( (event.clientY / window.innerHeight) * 256  );
        const color = `rgb(200, 200, ${ shade })`;
        $('body').css('background-color', color);
    });
});