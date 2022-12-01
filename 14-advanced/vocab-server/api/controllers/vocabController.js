const mongoose = require('mongoose');
const Vocab = mongoose.model('Vocab');

exports.readWords = (req, res) => {
    Vocab.find({}, (err, words) => {
        if (err) res.send(err);
        res.json(words);
    });
};

exports.createWord = (req, res) => {
    const newWord = new Vocab(req.body);
    newWord.save((err, word) => {
        if (err) res.send(err);
        res.json(word);
    });
};

exports.readWord = (req, res) => {
    Vocab.findById(req.params.wordId, (err, word) => {
        if (err) res.send(err);
        res.json(word);
    });
};

exports.updateWord = (req, res) => {
    Vocab.findOneAndUpdate(
        { _id: req.params.wordId },
        req.body,
        { new: true },
        (err, word) => {
            if (err) res.send(err);
            res.json(word);
        }
    );
};

exports.destroyWord = (req, res) => {
    Vocab.deleteOne({ _id: req.params.wordId }, (err) => {
        if (err) res.send(err);
        res.json({
            message: 'Word successfully deleted',
            _id: req.params.wordId
        });
    });
}