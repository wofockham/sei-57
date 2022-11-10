// # Arrays!

// Log out the answers to all of the following questions!

// Here is some data that you can work with. 

var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var bumpyArr = ["hello", "maytag", [[[["sigmonster"]], "swizzle"]]];
var uncompactedArr = [ "hello", false, NaN, undefined, "quantom bogo-sort" ];

var arrToTransform = [[ "age", "location" ], [ NaN, undefined ]];

// - Create an array of every five numbers between 30 and 101
console.log( _.range(30, 101, 5) );

// - Turn ` bumpyArr ` into one flat array (no nested arrays)
console.log( _(bumpyArr).flatten() );

// - Remove all of the falsey elements in the ` uncompactedArr `
console.log( _(uncompactedArr).compact() );

// - Find all of the unique elements in the following arrays - ` [ 1, 25, 100 ] `, ` [ 1, 14, 25 ] ` and ` 24, Infinity, -0 `
const uniques = _.union([1, 25, 100], [1, 14, 25], [24, Infinity, -0]);
console.log(uniques);

// - Find the index of the first element in ` numbers ` that is over 7 and is even
const firstIndex = _(numbers).findIndex(function (n) {
    return (n > 7) && (n % 2 === 0);
});
console.log( firstIndex, numbers[firstIndex] );

// - Turn ` arrToTransform ` into an object that looks like this - ` { age: NaN, location: undefined } `
console.log( _.object( arrToTransform[0], arrToTransform[1] ) );

// ## Remember!

// You have the [documentation!](https://underscorejs.org/)