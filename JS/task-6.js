function initSequenceOfBrackets () {
// Task q15
// TODO 
// уточнить насчет пробелов...
// если есть пробелы только с одной из сторон их учитывать при сравнении или просто удалять?
// уточнил, считаем только скобочки на все остальное не обращаем внимания

    let warningBox = document.querySelector('.warning-6');
    let stringOfBrackets = '(y{} [ ()  (b( {} )hjk) ] () l)';
// переделал код, добавил функцию нахождения "чистой строки"
    function getArrOfBrackets (str) {
        let clearArr = [];
        
        for (let i = 0; i < str.length; i++) {
            let bracket = str.charAt(i);
            if (bracket == '(' || bracket == ')' || bracket == '[' || bracket == ']' || bracket == '{' || bracket == '}') {
                clearArr.push(bracket);
            }
        }
        return clearArr;
    }
// функция делит массив пополам и сравнивает левую и правую части
// подходит для формата ({[()]}),
// но не подходит для формата ({[((){})]}) где между скобок могут находиться отдельно закрытые скобки.
    // function sequenceOfBrackets (fn) {
    //     let arr = fn;
    //     let left = 0;
    //     let right = arr.length - 1;
    //     let result = '';
        
    //     for (let i = 0; i < arr.length / 2; i++) {
            
    //         if (arr[left] == '(' && arr[right] == ')') {
    //             left++;
    //             right--;
    //         } else if (arr[left] == '[' && arr[right] == ']') {
    //             left++;
    //             right--;
    //         } else if (arr[left] == '{' && arr[right] == '}') {
    //             left++;
    //             right--;
    //         } else {
    //             return result = 'wrong sequence';
    //         }
    //     }
    //     return result = 'all chiki-puki';
    // }

// узнать что если строка будет формата ({[((){})]})???
// попытка сделать проверки подобного формата ({[((){})]})
    function sequenceOfBrackets (fn) {
        let arr = fn;

        for (let i = 0; i < arr.length; i++) {
            console.log(arr);
            if (arr[i] == '(' && arr[i+1] == ')') {
                arr.splice(i, 2);
                i--;
                i--;
            } else if (arr[i] == '[' && arr[i+1] == ']') {
                arr.splice(i, 2);
                i--;
                i--;
            } else if (arr[i] == '{' && arr[i+1] == '}') {
                arr.splice(i, 2);
                i--;
                i--;
            } else  if (arr.length == 0) {
                return result = 'all chiki-puki';
            }
        }
        return result = 'wrong sequence';
    }
    let fnResult = sequenceOfBrackets(getArrOfBrackets(stringOfBrackets));
 
    warningBox.innerHTML = '<p>Incoming data: ' + stringOfBrackets + '.</p>' + '<p>Result: ' + fnResult + '.</p>';
}







