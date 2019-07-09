function isStartSmallerThanEnd (start, end) {
    return start <= end;
}

function isInRangeOf1To1000 (start, end) {
    return (start > 0 && start <= 1000 && end > 0 && end <= 1000);
}

function createMultiplicationTable (start, end) {
    var str = ''
    var j = end
    for (let i = end - start; i >= 0; i--){
        for(let j = start; j <= end - i; j ++){
            str += j + '*' + (end - i) + '=' + (j*(end - i)) + ' '
        }
        str += '\n'
    }
    return str;
}

exports.isStartSmallerThanEnd = isStartSmallerThanEnd;
exports.isInRangeOf1To1000 = isInRangeOf1To1000;
exports.createMultiplicationTable = createMultiplicationTable;