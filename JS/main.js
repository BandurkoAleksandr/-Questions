window.onload = function() {

let kingStep = {
    x: 0,
    y: 0
}
let kingSteps = [{ x: 0, y: 0 }];

let warningBox = document.querySelector(".warning");
let up = document.querySelector(".up");
let down = document.querySelector(".down");
let left = document.querySelector(".left");
let right = document.querySelector(".right");

let step = (function(directionX, directionY) {
    kingStep.x = kingStep.x + directionX;
    kingStep.y = kingStep.y + directionY;

    let newStep = {
        x: kingStep.x,
        y: kingStep.y
    }
    return newStep;
});
let currentKingStep = step;

let findStep = (function() {
    let currentIndex = kingSteps.length - 1;
    if (kingSteps.length > 1) {
        let currentStep = kingSteps[currentIndex];

        for(let i = 0; i < currentIndex; i++) {
            let iterationStep = kingSteps[i]; 
            if (currentStep.x === iterationStep.x && currentStep.y === iterationStep.y) {
                console.log("Я здесь уже был!!!");
            }
        }
    }
});


up.addEventListener("click", function() {
    kingSteps.push(currentKingStep(0, 10));
    findStep();
});

down.addEventListener("click", function() {
    kingSteps.push(currentKingStep(0, -10));
    findStep();
});

left.addEventListener("click", function() {
    kingSteps.push(currentKingStep(-10, 0));
    findStep();
});

right.addEventListener("click", function() {
    kingSteps.push(currentKingStep(10, 0));
    findStep();
});

}