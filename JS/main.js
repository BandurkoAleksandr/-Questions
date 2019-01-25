// добавить закладку(кнопку) для каждой задачи
let taskNumber = document.querySelectorAll('.task');
let tasks = document.querySelector('.tasks');
let kingTask = document.querySelector('.kingTask');
let changeElementTask = document.querySelector('.changeElementTask');
let backButton = document.querySelector('.back');

taskNumber[0].addEventListener('click', function() {
    kingTask.style.display = 'block';
    backButton.style.display = 'block';
    tasks.style.display = 'none';
    initKing();
});

taskNumber[1].addEventListener('click', function() {
    changeElementTask.style.display = 'block';
    backButton.style.display = 'block';
    tasks.style.display = 'none';
    initNumber();
});


backButton.addEventListener('click', function() {
    kingTask.style.display = 'none';
    changeElementTask.style.display = 'none';
    backButton.style.display = 'none';
    tasks.style.display = 'block';
});