$(document).ready(function () {
    // Parallax

    // Cacheing
    const $kitty = $('.kitty-js');
    const $body = $('body');

    $(window).on('scroll', () => {
        const scrollTop = $(window).scrollTop();
        $kitty.css('background-position-y', -scrollTop * 2);
        $body.css('background-position-y', scrollTop / 3);
    });

    // Bubbles:
    $(window).on('mousemove', (e) => {
        const { pageX:x, pageY:y } = e; // Destructuring with renaming.

        const size = Math.random() * 10;

        const $bubble = $('<div class="bubble" />').css({
            left: x,
            top: y,
            height: size + 'em',
            width: size + 'em'
        });

        $bubble.animate({top: -200}, 4000, () => {
            $bubble.remove();
        });

        $bubble.appendTo('body');
    });
});