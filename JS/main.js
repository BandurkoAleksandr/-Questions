// добавить закладку(кнопку) для каждой задачи
let taskDetails = document.querySelectorAll('.task-details');
let tasks = document.querySelector('.tasks');
let backButton = document.querySelector('.back');
let initTasks = [initKing, initNumber, initCombination, initLuckyNumber];

tasks.addEventListener('click', function(e) {
    // console.log(e.target.getAttribute('i'));
    for (let i = 0; i < taskDetails.length; i++) {
        if (+e.target.getAttribute('i') == i) {
            index = e.target.getAttribute('i');
            taskDetails[index].style.display = 'block';
            backButton.style.display = 'block';
            tasks.style.display = 'none';
            initTasks[i]();
        }
    }
});

backButton.addEventListener('click', function() {
    for (let i = 0; i < taskDetails.length; i++) {
        taskDetails[i].style.display = 'none';
    }
    backButton.style.display = 'none';
    tasks.style.display = 'block';
});


