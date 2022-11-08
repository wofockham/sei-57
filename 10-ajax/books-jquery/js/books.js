const fetchCover = function (title) {
    $.ajax(`https://www.googleapis.com/books/v1/volumes?q=title:${ title }`).done(function (info) {
        const cover = info.items[0].volumeInfo.imageLinks.thumbnail;
        $('#cover').attr('src', cover);
    });
};

$('#search').on('submit', function (event) {
    event.preventDefault(); // stay on the same page -- don't submit the form to a server
    const title = $('#title').val();
    fetchCover(title);
});

