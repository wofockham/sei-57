const $links = $('a');

for (let i = 0; i < $links.length; i++) {
    const link = $links[i]; // retrieve the vanilla DOM node
    const $link = $(link);  // turn the DOM node back into a jQuery object

    const href = $link.attr('href'); // getter
    const thumbnailURL = youtube.generateThumbnailUrl(href);

    const $image = $('<img>'); // detached DOM node
    $image.attr('src', thumbnailURL); // setter

    $link.prepend($image); // attach the image to the DOM
}

// Goals: aim for this level:
// $('a').each(function () {
//     const href = $(this).attr('href');
//     const thumbnailURL = youtube.generateThumbnailUrl(href);
//     $('<img>').attr('src', thumbnailURL).prependTo(this); // chaining
// });
