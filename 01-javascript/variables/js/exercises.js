console.log('hello world');

// The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

//     Store the following into variables: number of children, partner's name, geographic location, job title.
//     Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

const children = 4;
const partnerName = 'Wayne';
const geoLocation = 'Fiji';
const jobTitle = 'undertaker';

// Traditional Javascript:
// const fortune = 'You will be a ' + jobTitle + ' in ' + geoLocation + ', and married to ' + partnerName + ' with ' + children + ' kids.';

// Modern JS: ES2015: Interpolation
const fortune = `You will be a ${ jobTitle } in ${ geoLocation }, and married to ${ partnerName } with ${ children } kids.`;
console.log(fortune);

// The Age Calculator

// Forgot how old someone is? Calculate it!

//     Store the current year in a variable.
//     Store their birth year in a variable.
//     Calculate their 2 possible ages based on the stored values.
//     Output them to the screen like so: "They are either NN or NN", substituting the values.

const currentYear = 2022;
const birthYear = 1999;

const ageAfterBirthday = currentYear - birthYear;
const ageBeforeBirthday = ageAfterBirthday - 1;

console.log(`They are either ${ ageBeforeBirthday } or ${ ageAfterBirthday }`);