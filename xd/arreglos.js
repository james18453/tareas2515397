let vector=[];
let tam=Math.round((Math.random()*20-10)+10);
console.log(`Valor de variable tam:${tam}`);

for (let i = 0; i < tam ; i++) {
    vector[i]=Math.round(Math.random()*100);    
}
//let num= Math.round(Math.random()*100);    
console.log(vector);
console.log(`Tamaño del vector:${vector.length}`);


 for (let i = 0; i < vector.length; i++) {
    if (vector[i]%2==0) {
        console.log(`${vector[i]} es par`)
    } else {
        console.log(`${vector[i]} es impar`)
    } 
 }
 let cuadrados=[];
 for (let i = 0; i < vector.length; i++) {
    cuadrados[i]=Math.pow(vector[i],2);
 }
 console.log(cuadrados);


 /*arreglos*/
/* hacer cambios en loas arreglos
var nombres = ['juan','james','luisa','pedro']; 
var bebidas = new Array('coca','agua','cafe');
console.log(nombres[1]);
console.log(bebidas[2]);

nombres[0] = 'push'
bebidas[2] = 'te'
console.log(nombres[0]);
console.log(bebidas[2]);
*/

/*recorrer arreglos
for(var i = 0; i <= nombre.length -1; 1++){
    console.log(nombre[i])
}

vegetales.forEach(function(elementos, indice){
    console.log(elementos, indice)
})
*/
