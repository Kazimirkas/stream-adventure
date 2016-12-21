const split = require('split');
const through2 = require('through2');
let isOddFlag = true;

process.stdin
    .pipe(split())
    .pipe(through2(function (line, _, next) {
        const res = isOddFlag ? line.toString().toLowerCase() : line.toString().toUpperCase()
        this.push(`${res}\n`);
        isOddFlag = !isOddFlag;
        next();
    })).pipe(process.stdout);
;
