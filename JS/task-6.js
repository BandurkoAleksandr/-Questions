function initSequenceOfBrackets () {
// Task q15
// TODO 
// уточнить насчет пробелов...
// если есть пробелы только с одной из сторон их учитывать при сравнении или просто удалять?
    let warningBox = document.querySelector('.warning-6');
    let stringOfBrackets = '( [ (( {} )) ] )';

    function sequenceOfBrackets (str) {
        let left = 0;
        let right = str.length - 1;
        let result = '';

        for (let i = 0; i < str.length / 2; i++) {
            if (str.charCodeAt(left) == 40 && str.charCodeAt(right) == 41) {
                left++;
                right--;
            } else if (str.charCodeAt(left) == 91 && str.charCodeAt(right) == 93) {
                left++;
                right--;
            } else if (str.charCodeAt(left) == 123 && str.charCodeAt(right) == 125) {
                left++;
                right--;
            } else if (str.charCodeAt(left) == 32 && str.charCodeAt(right) == 32) {
                left++;
                right--;
            } else {
                return result = 'wrong sequence';
            }
            
        }
        return result = 'all chiki-puki';

    }
    let fnResult = sequenceOfBrackets(stringOfBrackets);

    warningBox.innerHTML = '<p>Incoming data: ' + stringOfBrackets + '.</p>' + '<p>Result: ' + fnResult + '.</p>';
    // console.log(sequenceOfBrackets(stringOfBrackets));
    // console.log(sequenceOfBrackets(stringOfBrackets).charCodeAt(1));
    // console.log(sequenceOfBrackets(stringOfBrackets).charCodeAt(sequenceOfBrackets(stringOfBrackets).length - 1));
}