window.alert("a continuacion debera ingresar 3 notas para calcular el promedio del alumno");
var nota1=parseFloat(prompt("ingrese nota1:"));
var nota2=parseFloat(prompt("ingrese nota2:"));
var nota3=parseFloat(prompt("ingrese nota3:"));

promedio=(nota1+nota2+nota3)/3;

if(promedio>=6.0){ 
       document.write("excelente tienes promedio" + promedio);
    }else if(promedio <6.0 && promedio>=5.0){
        document.write(" tienes promedio" + promedio + ". sigue adelante puedes mejorar");
    }else if(promedio>=4.0 && promedio<5.0){
        document.write(" tienes promedio" + promedio + ". debes esfrozarte mas");
    }
    else{ 
        document.write("has reprobado con promedio" + promedio + ". continua intentandolo");

    }

