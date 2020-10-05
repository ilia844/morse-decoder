const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    function getSymbolArr(expr) {
        const SHIFT = 10;
        let index = 0;  
        let arr = [];

        while (index < expr.length) {
            arr.push(expr.substring(index, index + SHIFT));
            index += SHIFT;
        }
        return arr;
    }
    
    function trimZeros(str) {
        while (str[0] === '0') {
            str = str.slice(1);    
        }
        return str;
    }

    function getSymbol(str) {
        let morse = '';
        if (str === '**********') {
            return ' ';
        } else {
            str = trimZeros(str);
            let index = 0;
            while (index < str.length) {
                if (str.substring(index, index + 2) === '10') {
                    morse += '.';
                } else if (str.substring(index, index + 2) === '11') {
                    morse += '-';
                }
                index += 2;
            }
            return MORSE_TABLE[morse];
        }
    }

    let result = '';
    let symbolArr = getSymbolArr(expr);
    for (let item of symbolArr) {
        result += getSymbol(item);
    }
    
    return result;
}

module.exports = {
    decode
}