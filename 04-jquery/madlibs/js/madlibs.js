const $button = $('#lib-button');

const makeMadLib = function () {
    const noun = $('#noun').val(); // just a string
    const adjective = $('#adjective').val();
    const name = $('#person').val();

    const story = `${ name } really likes ${ adjective } ${ noun }`;

    $('#story').prepend(`<p>${story}</p>`);
};

$button.on('touch', makeMadLib);