function initCombination () {

    let arrayOfLetters = ['a', 'b', 'c'];
    let resultOfCombinations = [];
    // let currentCombination = ['0'];

    function separateLetter (arr) {
        for (let i = 0; i < arr.length; i++) {
            let currentCombination = ['0'];
            currentCombination.splice(0, 1, arr[i]);
            resultOfCombinations.push(currentCombination);
        }
        return resultOfCombinations;
    }
    separateLetter(arrayOfLetters);
    // console.log(currentCombination);
    // console.log(resultOfCombinations);

    // function allPosibleCombinations (arr) {

    // }

}