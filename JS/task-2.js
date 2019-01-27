function initNumber () {
    
    let arrayOfNumbers = [4,2,3,5,4,3,4,6,5,4,3,1,4];
    let elementTask = document.querySelector('.changeElementTask');
    let incomingData = arrayOfNumbers.map(function(index) {
        return index;
    });
//TODO попробовать пройти с конца массива и уменьшить количесство проверок... Тупо начать с конца!!!
    function changeNumber (arr) {
        let j;
        for (let i = 0; i < arr.length; i++) {

            for (j = i + 1; j < arr.length; j++) {
              if (arr[j] > arr[i]) {
                arr[i] = arr[j];
                break;
              }
            }
            if (j == arr.length) {
                arr[i] = 0;
            } 
          }
        return arr;
    }
    changeNumber(arrayOfNumbers);
    
    elementTask.innerHTML = '<p>Incoming data: ' + incomingData + '.</p>' + '<p>Result: ' + arrayOfNumbers + '.</p>';

}
// window.onload = initNumber;



