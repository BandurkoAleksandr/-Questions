function initLuckyNumber () {

    let luckyNumberTask = document.querySelector('.lucky-number-task');
    let startNumberInput = document.querySelector('.start-number-input');
    let finishNumberInput = document.querySelector('.finish-number-input');
    let startNumberButton = document.querySelector('.start-number-button');
    let target = document.querySelector('.target');
// fn (findNumbersQuantity) takes two arguments: minimum and maximum N-digit numbers
// each number is separated into two equal parts, 
// then nested fn (findSumOfHalf) takes first or second parts of both numbers (two arguments)
// nested fn creates an array whose length is equal to the maximum sum of numbers N/2
// and assigns each cell a value of 0 (first cycle)
// the second cycle goes through all the numbers in the range 
// from minimum to maximum (passed arguments),
// finds sum of the digits of which the number consists (nested cycle)
// and increment value of cell which is equal to sum - 1
// 
// at the end we call the nested function twice
// first time with the left side of the arguments of the parent function
// second time with the right side of the arguments
// then in the cycle multiply the results of call
// and the result of each iteration is summarized with the previous one.(RESULT!!!)
    function findNumbersQuantity (min, max) {
        let halfDigitLength = max.toString().split('').map(function (i){ return +i; }).length / 2;
        let minLeft = +min.toString().slice(0, halfDigitLength);
        let minRight = +min.toString().slice(halfDigitLength);
        let maxLeft = +max.toString().slice(0, halfDigitLength);
        let maxRight = +max.toString().slice(halfDigitLength);
        let result = 0;
        
        function findSumOfHalf (minHalf, maxHalf) {
            let arrLength = 9 * maxHalf.toString().length
            let arr = [];
            for (let i = 0; i < arrLength; i++) {
                arr[i] = 0;
            }
            for (let i = minHalf; i <= maxHalf; i++) {
                let str = i.toString();
                let sum = 0;
                for(let j = 0; j < halfDigitLength; j++) {
                    sum += +str.charAt(j);
                }
                    arr[sum - 1] += 1;
            }
            return arr;
        }  
        let leftSum = findSumOfHalf(minLeft, maxLeft);
        let rightSum = findSumOfHalf(minRight, maxRight);  
        
        for (let i = 0; i < leftSum.length; i++) {
            result += leftSum[i] * rightSum[i];
        } 
        target.innerHTML = result;
    }
    startNumberButton.addEventListener('click', function () {
        let startNumber = +startNumberInput.value;
        let finishNumber = +finishNumberInput.value;
        
        if (startNumber == NaN || startNumber < 0 || startNumberInput.value == '') {
            startNumberInput.value = startNumberInput.placeholder;
            return alert('Enter a number >= 0');
        } else if  (finishNumber <= startNumber) {
            finishNumberInput.value = finishNumberInput.placeholder;
            return alert('finish number have to be > than start number');
        } else if (finishNumber > startNumber) {
            startNumberInput.value = startNumberInput.placeholder;
            finishNumberInput.value = finishNumberInput.placeholder;
            return findNumbersQuantity(startNumber, finishNumber);
        }

    });
}



