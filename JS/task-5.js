function initWordFilter () {
// Task q19
    let warningBox = document.querySelector('.warning-5');
    let wordsCombinationInput = document.querySelector('.words-for-combination');
    let wordsCombinationButton = document.querySelector('.button-for-words-combination');
    let arrayOfWords = [];
// TODO try sort!!!
// не вышло...
// попробую позже...
    function wordFilter (a, b) {
        let lastSimbol = a.length - 1;
        console.log(a.charAt(lastSimbol));
        console.log(b.charAt(0));
        console.log(a);
        console.log(b);
        if (a.charAt(lastSimbol) == b.charAt(0)) {
            return -1;
        }
        if (a.charAt(lastSimbol) != b.charAt(0)) {
            return 1;
        }
    }

    // console.log(arrayOfWords.sort(wordFilter));
    

// TODO написать проверки инпута и приступать к написанию основной функции!!!
    wordsCombinationButton.addEventListener('click', function () {
        let stringOfWords = wordsCombinationInput.value;
        arrayOfWords = stringOfWords.split(', ');
        wordsCombinationInput.value = '';
        console.log(arrayOfWords.sort(wordFilter));
    });

}





