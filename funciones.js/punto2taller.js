var kilometros = parseInt(prompt("Digite kilometros por hora"))
function convertirMetros(k){
    return k*1000;
}
var metros = convertirMetros(kilometros);
document.write(kilometros + " kilometros son " +metros+ " metros"+ "<br>");

var kilometros = parseInt(prompt("Digite kilometros por hora"))
function convertirMillas(k) {
    return k * 0.62;
}
var millas = convertirMillas(kilometros);
document.write(kilometros + " kilometros " +millas+ " millas");