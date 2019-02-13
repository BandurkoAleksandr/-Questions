function initIsPeriodicSequence () {
// Task 21
    let warningBox = document.querySelector('.warning-9');
    let isPeriodicSequenceInput = document.querySelector('.is-periodic-sequence');
    let isPeriodicSequenceButton = document.querySelector('.button-for-periodic-sequence');
// передаем в метод sort()
    function compareNumeric(a, b) {
        return a - b;
    }
// получаем количество слов в стороке
    function numberOfWords (str) {
        let arr = str.split('').sort();
        let obj = {};
        let result = [];

        for (let i = 0; i < arr.length; i++) {
            let key = arr[i];
            if (!obj[key]) {
                obj[key] = 0;
            }
            obj[key] += 1;
        }
        for (let key in obj) {
            result.push(obj[key]);
        }
        return result = result.sort(compareNumeric)[0];
    }
// Определяем, является ли периодической последовательностью строка символов
    function isPeriodicSequence (str, fn) {
        let quantity = fn(str);
        let arr = str.split('');
        let wordLength = arr.length / quantity;
        console.log(quantity);
        console.log(arr.length);
        console.log(wordLength);
        let arrOfWords = [];
        let result = '';
        // отсеиваем варианты, кроме строки состоящей из разных анаграмм
        if (quantity < 2 || wordLength % 1 != 0) {
            return result = 'non-periodic sequence';
        }
        // получаем массив слов из которых состоит строка(возможны анаграммы)
        for (let i = 0; i < quantity; i++) {
            arrOfWords.push(arr.splice(0, wordLength).join(''));
        }
        console.log(arrOfWords);
        // сравниваем слова друг с другом
        for (let j = 0; j < arrOfWords.length - 1; j++) {
            let x = arrOfWords[j].localeCompare(arrOfWords[j + 1]);
            if (x != 0) {
                 return result = 'non-periodic sequence';
            } else {
                result = 'periodic sequence of words: ' + arrOfWords[0];
            }
            
        }
        return result;
    }

// нет проверок на ввод строки
    isPeriodicSequenceButton.addEventListener('click', function () {
        let stringOfWords = isPeriodicSequenceInput.value;
        isPeriodicSequenceInput.value = '';
        let fnResult = isPeriodicSequence(stringOfWords, numberOfWords);
        warningBox.innerHTML = '<p>Incoming data: ' + stringOfWords + '.</p>' + '<p>Result: ' + fnResult + '.</p>';
    });

}