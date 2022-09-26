/*
//1. Pedir 3 numeros e indicar cual de ellos es el valor del medio. Ej 11, 2 1000, el  valor del medio es 11. No use operadores lógicos
var num = []
for(i=0; i<=2; i++){
    num[i] = Math.round(Math.random()*1000)
    num.sort()
}
console.log(`los numeros son ${num} y el valor del medio es ${num[1]}`)
*/


/*
// 2. Escribe un programa que pida tres números y que escriba si son los tres iguales, si hay dos iguales o si son los tres distintos

var num = Math.round(Math.random()*100)
var num1 = Math.round(Math.random()*100)
var num2 = Math.round(Math.random()*100)
if((num == num1)&&(num == num2)){
    console.log(`los tres numeros son iguales ${num}, ${num1}, ${num2}`)
}else if((num == num1)||(num == num2)){
    console.log(`dos son parecidos ${num}, ${num1}, ${num2}`)
}else{
    console.log(`ninguno es parecido ${num}, ${num1}, ${num2} `)
}
*/


/*
//3. Pedir un número entre 0 y 9.999 y decir cuantas cifras tiene. Cuando el número exceda los límites emita un mensaje y finalice el programa
var num = Math.round(Math.random()*9999)
if(num < 9){
    console.log(`${num} es de 1 cifras`)
}else if(num < 99){
    console.log(`${num} es de 2 cifras`)
}else if(num < 999){
    console.log(`${num} es de 3 cifras`)
}else{
    console.log(`${num} es de 4 cifras`)
}
*/


/*
//4. Pedir una nota de 0 a 10 y mostrarla de la forma: Insuficiente, Suficiente, Bien, etc. Use la escala que prefiera, pero cerciórese que tiene 5 valores
var num = Math.round(Math.random()*10)
if(num <= 3){
    console.log(`la nota es ${num} esto es insuficiente`)
}else if(num <= 5){
    console.log(`la nota es ${num} esto es suficiente`)
}else if(num <= 7){
    console.log(`la nota es ${num} esto es bien`)
}else if(num <= 9){
    console.log(`la nota es ${num} esto es excelente`)
}else {
    console.log(`la nota es ${num} es la nota maxima`)
}
*/



//5. En un juego de preguntas a las que se responde “Si” o “No” gana quien responda correctamente las tres preguntas. Si se responde mal a cualquiera de ellas ya no se pregunta la siguiente y termina el juego. Las preguntas son:
/*
var no =0
var si = 1
var num1 = si
var num2 = no
var num3 = si 
con1 = 0
con2 = 0
con3 = 0
if(num1 == si){
  con1++
}
if(num2 == si){
    con2++
}
if(num3 == si){
    con3++
}
console.log(`1. Colon descubrió América?: si`)
if(con1 == 1){
    console.log("respuesta correcta")    
}else{
    console.log("respuesta incorrecta")
}
console.log(`2. La independencia de Colombia fue en el año 1810?: si`)
if(con2 == 1){
    console.log("respuesta correcta")    
}else{
    console.log("respuesta incorrecta")
}
console.log(`3. The Doors fue un grupo de rock Americano?: si`)
if(con3 == 1){
    console.log("respuesta correcta")    
}else{
    console.log("respuesta incorrecta")
}
*/


/*
//6. Pida un numero al usuario que representa días del año. Diga a que mes del año corresponde así. Si el número es menor o igual a 31 indica que esta en enero, 
//Pero si el número por ejemplo es 32 indica que es el 1 de febrero. No tenga en cuenta si el año es bisiesto, es decir siempre febrero tiene 28 días.
var num = Math.round(Math.random()*365)
if(num < 31){
    console.log(`el numero es ${num}, este numero da el mes enero`)
}else if(num < 62){
    console.log(`el numero es ${num}, este numero da el mes febrero`)
}else if(num < 93){
    console.log(`el numero es ${num}, este numero da el mes marzo`)
}else if(num < 124){
    console.log(`el numero es ${num}, este numero da el mes abril`)
}else if(num < 155){
    console.log(`el numero es ${num}, este numero da el mes mayo`)
}else if(num < 186){
    console.log(`el numero es ${num}, este numero da el mes junio`)
}else if(num < 217){
    console.log(`el numero es ${num}, este numero da el mes julio`)
}else if(num < 248){
    console.log(`el numero es ${num}, este numero da el mes agosto`)
}else if(num < 279){
    console.log(`el numero es ${num}, este numero da el mes septiembre`)
}else if(num < 310){
    console.log(`el numero es ${num}, este numero da el mes octubre`)
}else if(num < 341){
    console.log(`el numero es ${num}, este numero da el mes noviembre`)
}else if(num < 365){
    console.log(`el numero es ${num}, este numero da el mes diciembre`)
}
*/


/*
//7. Un obrero necesita calcular su salario semanal, el cual se obtiene de la sig. manera:
var horas = Math.round(Math.random()*60)
if(horas <= 40){
    console.log(`sus horas de trabajo son ${horas}, el pago es de ${horas*2600}`)
}else {
    console.log(`sus horas de trabajo son ${horas}, el pago es de ${horas*5000}`)
}
*/


/*
//8. Telefónica realiza los cálculos del costo de una llamada de teléfono siguiendo los cálculos así:Cuando se descuelga el teléfono los primeros 3 minutos (banderazo) cuestan 
//200 pesos y cada minuto adicional cuesta 50 pesos. Escriba un programa que permita calcular el costo de una llamada dados los minutos de duración.
var num = Math.round(Math.random()*10)
if(num <= 3){
    console.log(`los minutos son ${num},el valor a pagar es 300`)
}else if(num > 3){
    console.log(`los minutos son ${num},el valor a pagar es ${((num-3)*50)+300}`)
}
*/


/*
//9. Solicite una fecha al usuario. en formato día, mes y año. Dígale cuanto tiempo ha pasado desde esa fecha hasta hoy o cuanto falta para llegar a esa fecha si es posterior
const diah = 25 
const mesh = 9
const anoh = 2022
var dia = Math.round(Math.random()*31) 
var mes = Math.round(Math.random()*12)
var ano = Math.round(Math.random()*3000)
console.log(`hoy es mes:${mesh} dia:${diah} año:${anoh}`)
console.log(`la fecha ingresada es mes:${mes} dia:${dia} año:${ano}`)
if(mes <= 9){
    console.log(`los meses que hacen falta para llegar al mes de hoy es: ${mesh - mes}`)
}else{
    console.log(`los meses que hacen falta para llegar a ese mes posterior desde hoy es: ${mesh - mes}`)
}
if(dia <= 25){
    console.log(`los dias que hacen falta para llegar al dia de hoy es: ${diah - dia}`)
}else{ 
    console.log(`los dias que hacen falta para llegar a ese dia posterior desde hoy es: ${diah - dia}`) 
}
if (ano <= 2022){
    console.log(`los años que hacen falta para llegar al año de hoy es: ${anoh - ano}`)
}else{
    console.log(`los años que hacen falta para llegar a ese año posterior desde hoy es: ${anoh - ano}`)
}
*/


/*
//10. Solicite al usuario la hora en formato hh:mm:ss (hora militar, 24 horas). El programa debe responder que hora será un segundo después. Ej: ingreso 11:59:59, el programa responde 12:00:00.
var hora = Math.round(Math.random()*24)
var minutos = Math.round(Math.random()*58)
var segundos = Math.round(Math.random()*58)
console.log(`la hora ingresada es ${hora}:${minutos}:${segundos}, la hora de salida es ${hora}:${minutos}:${segundos+1}`)
*/


/*
//12. Solicite la hora en formato horas, minutos y segundos. Imprima en pantalla la hora que será dentro de 1 segundo
var hora = Math.round(Math.random()*12)
var minutos = Math.round(Math.random()*58)
var segundos = Math.round(Math.random()*58)
console.log(`la hora ingresada es ${hora}:${minutos}:${segundos}, la hora de salida es ${hora}:${minutos}:${segundos+1}`)
*/


/*
//13. Solicite al usuario una cantidad numérica que expresa segundos (medida de tiempo). Exprésela (conviértala) en horas minutos y segundos. Según el caso
var segundos = Math.round(Math.random()*1000)
console.log(`los segundos ingresados son ${segundos}`)
con = 0
if(segundos >= 59){
    for(var i=1; i<=10; i++){
    if(59 * i <= segundos){
        con++
    }
    } 
}
console.log(`estos en minutos es ${con}`)
*/



