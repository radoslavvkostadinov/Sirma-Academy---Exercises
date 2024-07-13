let width = document.querySelector('p.width');
let height = document.querySelector('p.height');
window.onload = function () {
    console.log(width.style);
    width.innerHTML = `Window Inner / Outer Width: ${window.innerWidth} / ${window.outerWidth}`;
    height.innerHTML = `Window Inner / Outer Height: ${window.innerHeight} / ${window.outerHeight}`;

}
window.onresize = function() {
    width.innerHTML = `Window Inner / Outer Width: ${window.innerWidth} / ${window.outerWidth}`;
    height.innerHTML = `Window Inner / Outer Height: ${window.innerHeight} / ${window.outerHeight}`;
}