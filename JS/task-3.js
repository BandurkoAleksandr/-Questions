function initCombination () {
    let combinationTask = document.querySelector('.combination-task');
    let arrayOfLetters = ['a', 'b', 'c'];
    let resultOfCombinations = [];
    let template = '';
// TODO look at Lesha's code
//      rewrite code, do it more simple
    function separateLetter (arr) {
        for (let i = 0; i < arr.length; i++) {
            let currentCombination = ['0'];
            currentCombination.splice(0, 1, arr[i]);
            resultOfCombinations.push(currentCombination);
        }
        for (let j = 0; j < arr.length; j++) {
            let currentCombination = arr.slice(0);
            let reverseCurrentCombination;
            currentCombination.splice(j, 1);
            resultOfCombinations.push(currentCombination);
            reverseCurrentCombination = currentCombination.slice(0).reverse();
            resultOfCombinations.push(reverseCurrentCombination);
        }
        return resultOfCombinations;
    }

    function concatLetters (arr) {
        let separateLetters = arr.slice(0);
        let j;
        for (let i = 0; i < separateLetters.length; i++) {

            for (j = i + 1; j < separateLetters.length; j++) {
                let x = separateLetters[i];
                let y = separateLetters[j];

                if (y.length > x.length && y.indexOf(x[0], 0) === -1) {
                let b = x.concat(y);
                arr.push(b);
              }
            }
          }
        return arr;
    }

    separateLetter(arrayOfLetters);
    concatLetters(resultOfCombinations);
    
    for (let i = 0; i < resultOfCombinations.length; i++) {
    
        if (i === resultOfCombinations.length - 1) {
            template += '[' + resultOfCombinations[i] + ']';
        } else {
            template += '[' + resultOfCombinations[i] + '],';
        }
    }
    combinationTask.innerHTML = '<p>Incoming data: ' + '[' + arrayOfLetters + ']' + '.</p>' + '<p>Result: ' + '[' + template + ']' + '.</p>';
}