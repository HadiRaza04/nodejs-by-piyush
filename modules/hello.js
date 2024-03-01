const math = require("./math")
console.log(math.addFn(4,8));

const { sub, mul} = require("./subtract")
console.log(sub(2,7));
console.log(mul(2,7));

const {multiply, addition} = require('./multiply');
console.log(multiply(2,9));
console.log(addition(2,9));

const fs = require('fs')
console.log(fs);
