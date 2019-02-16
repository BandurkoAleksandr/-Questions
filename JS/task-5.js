function initWordFilter () {
// Task q19
    let warningBox = document.querySelector('.warning-5');
    let wordsCombinationInput = document.querySelector('.words-for-combination');
    let wordsCombinationButton = document.querySelector('.button-for-words-combination');
    
// TODO пересмотреть код, 
// переписать последнюю проверку на читаемый код!
// проверить код, что если будет строка типа аб, бв, вд, дб, бс, са как код поведет себя?
// оптимизировать код, если нужно переписать!!!
    function wordFilter (arr) {
        let resultArr = [];
        resultArr.push(arr[arr.length - 1]);
        arr.splice(arr.length - 1);
        let result = '';
        
        function subWordFilter () {
            for (let i = 0; i < arr.length; i++) {
                console.log(arr);
                console.log(resultArr);
                let currentWord = resultArr[resultArr.length - 1];
                console.log(currentWord);
                console.log(currentWord.length);
                let lastSimbol = currentWord.length - 1;
                console.log(lastSimbol);
                console.log(currentWord[lastSimbol]);
                console.log(arr[i][0]);
                if (currentWord[lastSimbol] == arr[i][0]) {
                    resultArr.push(arr[i]);
                    arr.splice(i, 1);
                    subWordFilter();
                }
                
            }
            return resultArr;
        }
        subWordFilter();
        if  (resultArr[0][0] == resultArr[resultArr.length - 1][resultArr[resultArr.length - 1].length - 1]) {
            return result = 'da';
        }
        return resultArr;
    }
   
    

// TODO написать проверки инпута и приступать к написанию основной функции!!!
    wordsCombinationButton.addEventListener('click', function () {
        let stringOfWords = wordsCombinationInput.value;
        let arrayOfWords = stringOfWords.split(', ');
        wordsCombinationInput.value = '';
        console.log(wordFilter(arrayOfWords));
    });

}





