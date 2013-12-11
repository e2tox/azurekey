var key = require('../lib/azurekey');

var repetitions = 2000000;

console.time('generated ' + repetitions + ' keys');

for (var i = 0; i < repetitions; i++) {
    key.generate();
}

console.timeEnd('generated ' + repetitions + ' keys');