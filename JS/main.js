// добавить закладку(кнопку) для каждой задачи
let taskNumber = document.querySelectorAll('.task');
let tasks = document.querySelector('.tasks');
let kingTask = document.querySelector('.kingTask');
let backButton = document.querySelector('.back');

taskNumber[0].addEventListener('click', function() {
    kingTask.style.display = 'block';
    backButton.style.display = 'block';
    tasks.style.display = 'none';
});


backButton.addEventListener('click', function() {
    kingTask.style.display = 'none';
    backButton.style.display = 'none';
    tasks.style.display = 'block';
})