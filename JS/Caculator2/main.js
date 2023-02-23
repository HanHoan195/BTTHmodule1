
function inputValue(value) {
    dauvao.value += value;
}
function reSet() {
    dauvao.value="";
}
function reSult() {
    let result = eval(dauvao.value)
    dauvao.value = result
}