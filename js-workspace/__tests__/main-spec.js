const isStartSmallerThanEnd = require('../main').isStartSmallerThanEnd;
const isInRangeOf1To1000 = require('../main').isInRangeOf1To1000;
const getMultiplicationTable = require('../main').getMultiplicationTable;
const createMultiplicationTable = require('../main').createMultiplicationTable;

it ('should return true when start number is smaller than end number', () => {
    expect(isStartSmallerThanEnd(2, 3)).toBe(true);
});

it ('should return true when start number is smaller than end number', () => {
    expect(isStartSmallerThanEnd(3, 2)).toBe(false);
});

it ('should return true when start number is equal end number', () => {
    expect(isStartSmallerThanEnd(2, 2)).toBe(true);
});



it ('should return true when start number and end number is in range of 1 to 1000', () => {
    expect(isInRangeOf1To1000(1, 500)).toBe(true);
});

it ('should return true when start number and end number is in range of 1 to 1000', () => {
    expect(isInRangeOf1To1000(1001, 500)).toBe(false);
});



it ('should create Multiplication Table', () => {
    expect(createMultiplicationTable(2, 4)).toBe('2*2=4 ' + '\n' + '2*3=6 3*3=9 ' + '\n' + '2*4=8 3*4=12 4*4=16 ' + '\n');
});