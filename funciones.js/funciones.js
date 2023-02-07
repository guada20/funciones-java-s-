//crear tarea pedir nomre
/*function pedirNombre(){
     return prompt("Digite su nombre");
}
//ejecutar tarea
var nombre = pedirNombre();
function mostrarNombre( nom ){
    document.write("su nombre es : "+nom)
}

mostrarNombre(nombre);*/
/*
function suma(n1,n2){
    return n1 + n2;
}
var suma1= suma(3,4)
document.write("la suma es " + suma1 + "<br>");
document.write("la suma es " + suma(5,8) + "<br>");
document.write("la suma es " + suma(10,20) + "<br>");
*/
function multiOperacion(n1,n2,signo){
    if(signo== "+"){
        return n1+ n2;
    }else if (signo== "-"){
        return n1-n2;

    }else if (signo == "*"){
        return n1*n2;
    }else{
        return n1/n2
    }
    
}
document.write("El resultado es : " +multiOperacion(4,5,"*") + "<br>")
document.write("El resultado es : " +multiOperacion(4,5,"+") + "<br>")
document.write("El resultado es : " +multiOperacion(4,5,"-") + "<br>")
document.write("El resultado es : " +multiOperacion(4,5,"/") + "<br>")
