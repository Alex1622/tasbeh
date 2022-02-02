const display = document.querySelector('.display');
const add = document.querySelector('.button-add');
const res = document.querySelector('.res');

add.addEventListener('click', function () {
    display.textContent++;
    if (display.textContent == 34){
        display.textContent = 1
    }else {
        res.addEventListener('click', function () {
            display.textContent = 0
        })
    }
});

window.addEventListener('blur', function () {
    document.querySelector('title').textContent = 'Come Back!'
});
window.addEventListener('focus', function () {
    document.querySelector('title').textContent = 'Tasbeh'
});