const fs = require('fs');
const jsc = require('jsverify');
eval(fs.readFileSync('code.js') + '');
const testSort = jsc.forall("array nat", function (arr) {
    let a1 = JSON.parse(JSON.stringify(arr));
    let a2 = JSON.parse(JSON.stringify(arr));
    let result = a2.sort(function (a, b) {
        return a - b;
    });
    return JSON.stringify(insertionSortReverse(a1)) === JSON.stringify(result);
});
jsc.assert(testSort);
