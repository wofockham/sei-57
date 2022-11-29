const Crawler = require('crawler');

const isCrawlable = (url) => {
    const terribleSites = ['archive.today', 'ghostarchive.org', 'web.archive.org', 'microsoft.com', 'wordpress.com', 'shkspr.mobi'];

    // magic
    const terribleSiteDetected = terribleSites.some((awfulSite) => {
        return url.includes(awfulSite);
    });

    return !terribleSiteDetected;

    // 1 liner: heavy magic
    // return ! terribleSites.some( awfulSite => url.includes(awfulSite) );

};

const c = new Crawler({
    rateLimit: 1000,
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:107.0) Gecko/20100101 Firefox/107.0',
    callback: (err, res, done) => {
        if (typeof res.$ === 'function') {
            console.log(res.request.uri.href); // log out the current page
            const title = res.$('title').text();
            console.log(title);
            console.log(); // blank line for readability
    
            const $links = res.$('a[href^=http]'); // select external links
            $links.each(function () {
                const href = res.$(this).attr('href');
                if (isCrawlable(href)) {
                    c.queue(href);
                }
            });
        }

        done(); // we have to call this every time the callback runs or the crawling will stop.
    }
});

// process.argv contains command line arguments (and some other crap)
c.queue(process.argv[2] || 'https://lobste.rs/');