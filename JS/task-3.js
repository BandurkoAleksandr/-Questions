function initCombination () {
    let combinationTask = document.querySelector('.combination-task');
    let arrayOfLetters = ['a', 'b', 'c'];
    let resultOfCombinations = [];
    let template = '';
// fn combinator takes two arguments
// at first time:
// first argument is empty array, or empty string
// second argument  is array, it is required.
// (if the function called with only second argument
// it will be work and first argument 
// will be assigned automatically)
// Then in the body of the cycle 
// declare two variables, which will be used 
// as arguments for the recursive call of combinator.
// first variable is a string, that concatenates itself
// and the element of the stock array
// second variable is an object which 
// consists of a copy(stock array - current element) => (every iteration)

    function combinator (arr1, arr2) {
        if (arr2 == undefined || arr2 == "") {
            arr2 = arr1;
            arr1 = "";
        }
        for (let i = 0; i < arr2.length; i++) {
            let firstArg = arr1 + arr2[i];
            let secondArg = arr2.slice(0,i).concat(arr2.slice(i + 1));
            resultOfCombinations.push(firstArg);
            // console.log(typeof(arr2[i]));
            // console.log(typeof(arr1));
            // console.log(firstArg);
            // console.log(secondArg);
            if (firstArg.length != arr1.length + arr2.length) {
                combinator(firstArg, secondArg);
            }
        }
    }
    combinator(arrayOfLetters);
    
    for (let i = 0; i < resultOfCombinations.length; i++) {
    
        if (i === resultOfCombinations.length - 1) {
            template += '[' + resultOfCombinations[i] + ']';
        } else {
            template += '[' + resultOfCombinations[i] + '],';
        }
    }
    combinationTask.innerHTML = '<p>Incoming data: ' + '[' + arrayOfLetters + ']' + '.</p>' + '<p>Result: ' + '[' + template + ']' + '.</p>';
}