var btn = document.getElementById('button');
var color = document.querySelector('span');
btn.addEventListener('click', changeColor);

function changeColor() {
    var x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

    var output = []
    for (let i = 0; i < 6; i++) {
        output += x[Math.floor(Math.random() * 15)];
    }
    color.innerText = "#" + output
    document.body.style.background = "#" + output
}