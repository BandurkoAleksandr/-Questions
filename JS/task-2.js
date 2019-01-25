function initNumber () {

    let arrayOfNumbers = [1, 3, 2, 5, 3, 4];
    let elementTask = document.querySelector('.changeElementTask');
    let incomingData = arrayOfNumbers.map(function(index) {
        return index;
    });

    function changeNumber (arr) {
        let j;
        for (let i = 0; i < arr.length; i++) {

            for(j = i + 1; j < arr.length; j++) {
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



