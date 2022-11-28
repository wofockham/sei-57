const express = require('express');
const ejs = require('ejs');
const yahooStockPrices = require('yahoo-stock-prices'); // thanks Joshua!

const server = express();
server.set('view-engine', ejs);
server.use(express.static('public'));

const PORT = 8888;

server.get('/', (req, res) => {
    res.render('home.ejs');
});

server.get('/info', async (req, res) => {
    const price = await yahooStockPrices.getCurrentPrice(req.query.symbol);
    res.render('info.ejs', { symbol: req.query.symbol, price: price });
})

server.listen(PORT, () => console.log(`Server running at http://localhost:${ PORT }/`));