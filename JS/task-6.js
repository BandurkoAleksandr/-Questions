function initSequenceOfBrackets () {
// Task q15
// TODO 
// уточнить насчет пробелов...
// если есть пробелы только с одной из сторон их учитывать при сравнении или просто удалять?
// уточнил, считаем только скобочки на все остальное не обращаем внимания
// переделал код, добавил функцию нахождения "чистой строки"
    let warningBox = document.querySelector('.warning-6');
    let stringOfBrackets = '(y [ (b( {} )hjk) ] l)';

    function getArrOfBrackets (str) {
        let clearString = '';
        
        for (let i = 0; i < str.length; i++) {
            let bracket = str.charCodeAt(i);
            if (bracket == 40 || bracket == 41 || bracket == 91 || bracket == 93 || bracket == 123 || bracket == 125) {
                clearString += str.charAt(i);
            }
        }
        return clearString;
    }

    function sequenceOfBrackets (fn) {
        let str = fn;
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

    let fnResult = sequenceOfBrackets(getArrOfBrackets(stringOfBrackets));
 
    warningBox.innerHTML = '<p>Incoming data: ' + stringOfBrackets + '.</p>' + '<p>Result: ' + fnResult + '.</p>';
}







