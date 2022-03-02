/* Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case. */

const romanTable = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
];

function convertToRoman(num) {
    if (num === 0) return ' ';

    for (let i = 0; i < romanTable.length; i++) {
        if (num >= romanTable[i][0]) {
            return romanTable[i][1] + convertToRoman(num - romanTable[i][0]);
        }
    }
}

console.log(convertToRoman(1));
    
