const mongoose = require('mongoose');
const Vocab = mongoose.model('Vocab');

exports.readWords = (req, res) => {
    Vocab.find({}, (err, words) => {
        if (err) res.send(err);
        res.json(words);
    });
};