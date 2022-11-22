// Promises are an evolution of callbacks:
// a way to handle or process data from an asynchronous process, whenever that finishes.

// recreate cat in JS:

const fs = require('fs');

// fs.readFile('flintstones.txt', 'utf-8', (err, content) => { // error first pattern
//     if (err) {
//         throw err; // dramatic return
//     }

//     console.log(content);
// });

// A Promise wrapper around the above fs.readFile

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

// Promises let us handle success AND error seperately (in .then and .catch, respectively)
readFile('flintstones.txt').then((data) => {
    console.log(data);
}).catch((err) => {
    console.log('something bad happen', err);
});

// You can attach multiple callbacks: .then().then().then().then().catch().catch()

// You can attach your .then callbacks later (and they'll still run!)

const flintstonesPromise = readFile('flintstones.txt');

flintstonesPromise.then((c) => {
    console.log( c.toUpperCase() );
});

setTimeout(() => {
    flintstonesPromise.then((content) => {
        console.log('this is happening 11 seconds after the file was opened BUT WE CAN STILL THE DATA');
        console.log(content);
    });
}, 11000);