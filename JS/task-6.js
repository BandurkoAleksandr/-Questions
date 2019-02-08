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
            let bracket = str.charAt(i);
            if (bracket == '(' || bracket == ')' || bracket == '[' || bracket == ']' || bracket == '{' || bracket == '}') {
                clearString += bracket;
            }
        }
        return clearString;
    }
// очередная попытка что то упростить... 
// поменял юникод на символы.
// отказался от массива.
// узнать что если строка будет формата ({[((){})]})???
// спросить может в первой функции лучше возвращать массив скобок, а не строку...
    function sequenceOfBrackets (fn) {
        let str = fn;
        let left = 0;
        let strLeft = str.charAt(left);
        let right = str.length - 1;
        let strRight = str.charAt(right);
        let result = '';
        
        for (let i = 0; i < str.length / 2; i++) {
            
            if (strLeft == '(' && strRight == ')') {
                left++;
                right--;
            } else if (strLeft == '[' && strRight == ']') {
                left++;
                right--;
            } else if (strLeft == '{' && strRight == '}') {
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







