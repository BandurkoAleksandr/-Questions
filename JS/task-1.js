function initKing () {
    // gets current coordinates
    let kingStep = {
    x: 0,
    y: 0
    }
    // gets all coordinates: currentKingStep function call result
    let kingSteps = [{ x: 0, y: 0 }];

    let warningBox = document.querySelector(".warning");
    let message = '';
    // get buttons
    let up = document.querySelector(".up");
    let down = document.querySelector(".down");
    let left = document.querySelector(".left");
    let right = document.querySelector(".right");
    // fn gets two arguments (x,y coordinates)
    // updates the current coordinates of the step 
    // and makes a copy, which return.
    function currentKingStep (directionX, directionY) {
        kingStep.x = kingStep.x + directionX;
        kingStep.y = kingStep.y + directionY;

        let newStep = {
            x: kingStep.x,
            y: kingStep.y
        }
        return newStep;
    }
    // fn findStep gets an array of objects
    // compares current coordinates with all available
    // and looking for matches
    function findStep (steps) {
        let currentIndex = steps.length - 1;
        let currentStep = steps[currentIndex];
        console.log(currentStep);
        for (let i = 0; i < currentIndex; i++) {
            let iterationStep = steps[i]; 
            if (currentStep.x === iterationStep.x && currentStep.y === iterationStep.y) {
                message += "<p>Я здесь уже был!!!</p>";
                warningBox.innerHTML = message;
            }
        }
    }
    // when the button is clicked, event handlers
    // push currentKingStep function call result 
    // into kingSteps array 
    // and call findStep function with kingSteps array argument
    up.addEventListener("click", function() {
        kingSteps.push(currentKingStep(0, 10));
        findStep(kingSteps);
    });

    down.addEventListener("click", function() {
        kingSteps.push(currentKingStep(0, -10));
        findStep(kingSteps);
    });

    left.addEventListener("click", function() {
        kingSteps.push(currentKingStep(-10, 0));
        findStep(kingSteps);
    });

    right.addEventListener("click", function() {
        kingSteps.push(currentKingStep(10, 0));
        findStep(kingSteps);
    });
}
// window.onload = initKing;
