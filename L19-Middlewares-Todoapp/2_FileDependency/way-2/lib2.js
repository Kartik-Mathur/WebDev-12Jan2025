const lib1 = require('./lib1')

console.log("Inside lib2");

let b = 2;

module.exports = {
    b,
    lib1
}
