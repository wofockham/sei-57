// 1. callbacks
// 2. promises: .then
// 3. await promises -- write code that looks synchronous

const fs = require('fs');

const readFile = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf-8', (err, content) => {
            if (err) {
                return reject(err); // invoke all the .catch callbacks
            }

            resolve(content);
        })
    })
};

readFile('flintstones.txt').then((data) => {
    console.log(data);
});

// You can await the results of a promise IF the await is in an async function
const logFlintstones = async () => {
    const data = await readFile('flintstones.txt');
    console.log(data);
};

logFlintstones();

/////////////////////////////////////////////////////////////////////
const axios = require('axios');

axios.get('http://numbersapi.com/random/trivia').then((response) => {
    console.log(response.data);
});

const numberFact = async () => {
    const response = await axios.get('http://numbersapi.com/random/trivia');
    console.log(response.data);
};

numberFact();