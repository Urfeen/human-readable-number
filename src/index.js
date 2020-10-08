module.exports = function toReadable(number) {
    const numbers = [
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
        ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    ];

    if (number < 20) {
        for (let i = 0; ; i++) {
            if (number === numbers[0][i]) {
                return numbers[1][i];
            }
        }
    }
    else if (number > 19 && number < 100) {
        let num = number.toString().split('');
        for (let j = 0; ; j++) {
            if (+num[0] === numbers[0][j]) {
                if (+num[1] === 0) return numbers[2][j];
                else return `${numbers[2][j]} ${numbers[1][num[1]]}`;
            }
        }
    }
    else if (number > 99 && number < 1000) {
        let num = number.toString().split('');
        for (let j = 0; ; j++) {
            if (+num[0] === numbers[0][j]) {
                if (+num[1] === 0 && +num[2] === 0) return `${numbers[1][j]} hundred`;
                else if (+num[1] === 0) return `${numbers[1][j]} hundred ${numbers[1][num[2]]}`;
                else if (+num[1] === 1) return `${numbers[1][j]} hundred ${numbers[1][+num[1] + 9 + +num[2]]}`;
                else if (+num[2] === 0) return `${numbers[1][j]} hundred ${numbers[2][num[1]]}`;
                else return `${numbers[1][j]} hundred ${numbers[2][num[1]]} ${numbers[1][num[2]]}`;
            }
        }
    }
}
