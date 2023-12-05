// UNSURE HOW TO CORRECT. I'VE TRIED A FEW DIFFERENT THINGS NOW

const fs = require('fs');
const jsc = require('jsverify');
eval(fs.readFileSync('code.js') + '');
function compareNumbers(a, b) {
    return a - b;
}
const testSort = jsc.forall("array nat", function (arr) {
    let a1 = JSON.parse(JSON.stringify(arr));
    let a2 = JSON.parse(JSON.stringify(arr));
    let result = a2.slice().sort(compareNumbers);
    return JSON.stringify(insertionSortReverse(a1)) === JSON.stringify(result);
});
jsc.assert(testSort);
