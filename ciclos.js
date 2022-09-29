/*
//1. Determinar los divisores de un número introducido por teclado
var num = Math.round(Math.random()*20)
var con = []
var num1 = [1,2,3,4,5,6,7,8,9,10]
for(i=0; i<num1.length; i++){
    if(num % num1[i] == 0){
        con[i]= num1[i]
    }
}
console.log(`los numeros divisores de ${num} son ${con}`)
*/


/*
//2. Determinar si un numero es o no es primo
var num = Math.round(Math.random()*50)
var a = 0
console.log(`el numero es ${num}`)
for(i=1; i<=num; i++){
   if(num % 1 == 0){
    a++;
   }     
}
if(a != 2){
    console.log("no es primo")
}else{
    console.log("es primo")
}
*/


/*
//3. Determinar si un número es o no es perfecto. Un numero es perfecto si la suma de sus divisores sin incluir el propio número es igual a este 
var num = Math.round(Math.random()*50)
var con = 0
console.log(`el numero es ${num }`)
for(i=1; i<=num; i++){
    if( num % i == 0 ){
    con = con + 1;
    }
}

if(con == num){
    console.log("es perfecto")
}else{
    console.log("no es perfecto")
}
*/


/*
//4. Determinar cuales y cuantos números perfectos hay entre 1 y 1000?
var numero = 1000
var contador = 0
for (x = 1; x <= numero; x++) {
	if (x) {
	contador++;
	}
}
	
if (numero == 0 || numero == 1 || numero == 4) {
    console.log(contador)
		}
for ( x = 2; x < numero / 2; x++) {
			
	if (numero % x == 0){
		 console.log(`primo ${x}`)
}else{
    console.log(`no primo ${x}`)
}
}
*/


//12. Escribir un programa que visualice la siguiente figura, utilizando ciclos. El usuario decide cuantas líneas quiere imprimir

for(var i=0; i<=10; i++){
    console.log("*")
}