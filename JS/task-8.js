function initDeletionOfNumbers () {
// Task q20
    let warningBox = document.querySelector('.warning-8');
    let aNumberInput = document.querySelector('.A-number-input');
    let bNumberInput = document.querySelector('.B-number-input');
    let numbersButton = document.querySelector('.numbers-button');

    function deletionOfNumbers (a, b) {
        let indexB = 0;
        let result = '';
        for (let i = 0; i < a.length; i++) {
            let index = b.indexOf(a.charAt(i), indexB);
            if (index > -1) {
                indexB = index;
            } else {
                return result = 'NO';
            }
        }
        return result = 'Yes';  
    }
    // get A and B numbers
    // then if all is good, call the deletionOfNumbers function
    // with numbers A, B as arguments
    numbersButton.addEventListener('click', function () {
        
        let aNumber = aNumberInput.value;
        let bNumber = bNumberInput.value;
        
        if (aNumber == NaN || aNumber < 0 || aNumberInput.value == '' || aNumber.indexOf('.') > 0) {
            aNumberInput.value = aNumberInput.placeholder;
            return alert('Enter an integer >= 0');
        } else if  (bNumber.length <= aNumber.length || bNumber.indexOf('.') > 0) {
            bNumberInput.value = bNumberInput.placeholder;
            return alert('B number have to be an integer and longest than start number');
        } else if (bNumber.length > aNumber.length) {
            aNumberInput.value = aNumberInput.placeholder;
            bNumberInput.value = bNumberInput.placeholder;
            let fnResult = deletionOfNumbers(aNumber, bNumber);
            warningBox.innerHTML = '<p>Result: ' + fnResult + '.</p>';
        }
    });

}















// function initDeletionOfNumbers () {
//     // Task q20
//         let warningBox = document.querySelector('.warning-8');
//         let aNumberInput = document.querySelector('.A-number-input');
//         let bNumberInput = document.querySelector('.B-number-input');
//         let numbersButton = document.querySelector('.numbers-button');
    
//         function deletionOfNumbers (a, b) {
//             let result = '';
//             let j;
            
//             for (let i = 0; i < a.length; i++) {
//                 console.log("f", a, b);
//                 for (j = 0; j < b.length; j++) {
//                     if (b[j] == a[i]) {
//                         b.splice(0, j + 1);
//                         a.splice(i, 1);
//                         console.log(a, a.length, b);
//                         deletionOfNumbers(a, b);
//                     }
//                 }
//             }
//             if (a.length != 0) {
//                 return result = 'NO';
//             }
//             return result = 'Yes';  
//         }
//         // get A and B numbers
//         // then if all is good, call the deletionOfNumbers function
//         // with numbers A, B as arguments
//         numbersButton.addEventListener('click', function () {
            
//             let aNumber = aNumberInput.value.split('');
//             let bNumber = bNumberInput.value.split('');
            
//             if (aNumber == NaN || aNumber < 0 || aNumberInput.value == '' || aNumber.indexOf('.') > 0) {
//                 aNumberInput.value = aNumberInput.placeholder;
//                 return alert('Enter an integer >= 0');
//             } else if  (bNumber.length <= aNumber.length || bNumber.indexOf('.') > 0) {
//                 bNumberInput.value = bNumberInput.placeholder;
//                 return alert('B number have to be an integer and longest than start number');
//             } else if (bNumber.length > aNumber.length) {
//                 aNumberInput.value = aNumberInput.placeholder;
//                 bNumberInput.value = bNumberInput.placeholder;
//                 let fnResult = deletionOfNumbers(aNumber, bNumber);
//                 warningBox.innerHTML = '<p>Result: ' + fnResult + '.</p>';
//             }
//         });
    
//     }