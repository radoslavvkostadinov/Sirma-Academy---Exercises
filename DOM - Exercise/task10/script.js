
function calculate() {
    let radius = document.getElementById('radius').value;
    let volume=(4/3*Math.PI*Math.pow(radius,3)).toFixed(4);
    let result = document.getElementById('volume');
    result.value = volume;
}

function reset() {
    document.getElementById('radius').value = '';
    document.getElementById('volume').value = "0.0000";
}