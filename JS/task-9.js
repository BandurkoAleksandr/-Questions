function initIsPeriodicSequence () {
// Task 21
    let warningBox = document.querySelector('.warning-9');
    let isPeriodicSequenceInput = document.querySelector('.is-periodic-sequence');
    let isPeriodicSequenceButton = document.querySelector('.button-for-periodic-sequence');


    function isPeriodicSequence (str) {
        let result = '';
        let currentSequence = '';
        let wordLength;
        // ищем длину слова и производим первые проверки
        // как только нашли длину слова, выходим из цикла
        for (let i = 0; i < str.length; i++) {
            currentSequence += str[i];
            let index = str.indexOf(currentSequence, i + 1);

            if (index == -1) {
                return result = 'non-periodic sequence';
            } else if (index == currentSequence.length) {
                wordLength = index;
                break;
            }
        }
        // зная длину слова, проверяем состоит ли строка из слов одинаковой длины
        if (str.length % wordLength != 0) {
            return result = 'non-periodic sequence';
        }
        // получаем слово из которого должна состоять последовательность
        let word = str.substring(0, wordLength); 
        // получаем массив состоящий из пустых ячеек и инородных слов
        let arr = str.split(word);
        console.log(word);
        console.log(arr);
        // проверяем на инородные слова и анаграммы
        for (let j = 0; j < arr.length; j++) {
            if (arr[j].length != 0) {
                return result = 'non-periodic sequence';
            }
        }
        return result = 'periodic sequence of words: ' + word;
    }

// нет проверок на ввод строки
    isPeriodicSequenceButton.addEventListener('click', function () {
        let stringOfWords = isPeriodicSequenceInput.value;
        isPeriodicSequenceInput.value = '';
        let fnResult = isPeriodicSequence(stringOfWords);
        warningBox.innerHTML = '<p>Incoming data: ' + stringOfWords + '.</p>' + '<p>Result: ' + fnResult + '.</p>';
    });

}