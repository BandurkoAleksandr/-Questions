function initPrimeNumber () {
// Task q17
// n - количество простых чисел, которые нужно найти
    let warningBox = document.querySelector('.warning-7');
// TODO попытаться найти способ оптимизировать поиск
    function primeNumber (n) {
        let arrOfPrimeNumbers = [];

        prime: 
        for (let i = 2; true; i++) {
            
            for (let j = 2; j < i; j++) {
                if (i % j == 0) {
                    continue prime;
                }
            }
            arrOfPrimeNumbers.push(i);
            if (arrOfPrimeNumbers.length == n) {
                return arrOfPrimeNumbers;
            }
        }
    }
    // выводим результаты в виде списка...
    let result = primeNumber(100);
    let template = '';

    for (let i = 0; i < result.length; i++) {
    
        template += '<li> -- ' + result[i] + '</li>';

    }
    warningBox.innerHTML = '<ol>' + template + '</ol>';
}