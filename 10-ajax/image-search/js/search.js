'use strict';

var state = {
    nextPage: 1,
    lastPageReached: false
};

var searchFlickr = function searchFlickr(keywords) {
    if (state.lastPageReached) return;

    console.log('Searching for', keywords);

    var flickrURL = 'https://api.flickr.com/services/rest';

    $.getJSON(flickrURL, {
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        nojsoncallback: 1, // don't bother looking this up: JSONP
        page: state.nextPage++
    }).done(showImages).done(function (info) {
        console.log(info);
        if (info.photos.page >= info.photos.pages) {
            state.lastPageReached = true;
        }
    });
};

var showImages = function showImages(results) {
    var urls = _(results.photos.photo).map(generateURL);
    _(urls).each(function (url) {
        var $img = $('<img>', { src: url });
        $img.appendTo('#images');
    });
};

var generateURL = function generateURL(p) {
    return ['http://farm', p.farm, '.static.flickr.com/', p.server, '/', p.id, '_', p.secret, '_q.jpg' // change 'q' to something else for different sizes (see documentation)
    ].join('');
};

$(document).ready(function () {
    $('#search').on('submit', function (event) {
        event.preventDefault();

        $('#images').empty();
        state.nextPage = 1;
        state.lastPageReached = false;

        var searchTerms = $('#query').val();
        searchFlickr(searchTerms);
    });

    var relaxedSearchFlickr = _.debounce(searchFlickr, 4000, true);
    $(window).on('scroll', function () {
        var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        if (scrollBottom <= 500) {
            var searchTerms = $('#query').val();
            relaxedSearchFlickr(searchTerms);
        }
    });
});