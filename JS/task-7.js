function initPrimeNumber () {
// Task q17
// n - количество простых чисел, которые нужно найти
    let warningBox = document.querySelector('.warning-7');
// TODO попытаться найти способ оптимизировать поиск
// вывести результаты в виде списка...
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
    console.log(primeNumber(100));

}