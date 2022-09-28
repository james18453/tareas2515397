//llenar tres arreglos con numeros aleactorios el tamaño de los arreglos estara, minimo 5 maximo 20 elementos.   arreglo entre 0 y 100

let a = []
let b = Math.round((Math.random()*20-5)+5)
console.log(`el tamaño del arreglo de A es de ${b}`)
for (let i = 0; i < b; i++){
    a [i]  = Math.round(Math.random()*100)
}
console.log(a)

let c = []
let d = Math.round((Math.random()*20-5)+5)
console.log(`el tamaño del arreglo de C es de ${d}`)
for (let i = 0; i < d; i++){
    c [i]  = Math.round(Math.random()*100)
}
console.log(c)

let f = []
let g = Math.round((Math.random()*20-5)+5)
console.log(`el tamaño del arreglo de F es de ${g}`)
for (let i = 0; i < g; i++){
    f [i]  = Math.round(Math.random()*100)
}
console.log(f)


//cual de los tre arreglos es el mas grande?
//rellenar los dos arreglos mas pequeños, con los datos de los arreglos mas grandes tiene demas 

if(b>d && b>g){
    console.log(`el arreglo mas grande es A con ${b}`)
    var con = a + "," + c
    var con1 = a + "," + f 
    console.log(`al ser el arreglo C mas pequeño que el arreglo A se le suman los de A y el nuevo arreglo queda ${con}`)
    console.log(`al ser el arreglo F mas pequeño que el arreglo A se le suman los de A y el nuevo arreglo queda ${con1}`)
}else if (d>b && d>g){
    console.log(`el arreglo mas grande es C con ${d}`)
    var con2 = c + "," + a 
    var con3 = c + "," + f 
    console.log(`al ser el arreglo A mas pequeño que el arreglo C se le suman los de C y el nuevo arreglo queda ${con2}`)
    console.log(`al ser el arreglo F mas pequeño que el arreglo C se le suman los de C y el nuevo arreglo queda ${con3}`)
}else{
    console.log(`el arreglo mas grande es F con ${g}`)
    var con4 = f + "," + a 
    var con5 = f + "," + c 
    console.log(`al ser el arreglo A mas pequeño que el arreglo F se le suman los de F y el nuevo arreglo queda ${con4}`)
    console.log(`al ser el arreglo C mas pequeño que el arreglo F se le suman los de F y el nuevo arreglo queda ${con5}`)
}
   
//de cada uno diga que cantinan de numeros pares y numeros impares tiene?
var con = 0
var con1 = 0
var con2  = 0
var con3 = 0
var con4 = 0
var con5 = 0
for(y=0; y<=b; y++){
if(a[y] % 2 == 0){
    con++
}else{
    con1++
}

if(c[y] % 2 == 0){
    con2++
}else{
    con3++
}

if(f[y] % 2 == 0){
    con4++
}else{
    con5++
}
}

console.log(`la cantidad de numeros par del primer arreglo es ${con}`)
console.log(`la cantidad de numeros impar del primer arreglo es ${con1}`)
console.log(`la cantidad de numeros par del segundo arreglo es ${con2}`)
console.log(`la cantidad de numeros impar del segundo arreglo es ${con3}`)
console.log(`la cantidad de numeros par del tercer arreglo es ${con4}`)
console.log(`la cantidad de numeros impar del tercer arreglo es ${con5}`)
    


//moda

var moda = 0
var moda1 = 0
var moda2 = 0
for(x=0; x<a.length; x++){
    if(a[x]==a[x+1]){
     moda++
    }
    if(c[x]==c[x+1]){
     moda1++
    }
    if(f[x]==f[x+1]){
     moda2++
    }

}
console.log(`las veces que se repite un numero en un arreglo es ${moda+1}`)
console.log(`las veces que se repite un numero en un arreglo es ${moda1+1}`)
console.log(`las veces que se repite un numero en un arreglo es ${moda2+1}`)


//mediana

var mitad = a / 2
if(mitad%2==0){
    for (let b=0; b<mitad; b++)
     var restanumeros = a[b] - a[b+1]
     console.log(`Al ser el tamaño del arreglo par, se resta los dos numeros del medio y da,${restanumeros}`)
}else{ 
    for(let j=0; j<mitad; j++)
    var nummitad = a[j]
    console.log(`Al ser el tamaño del arreglo impar, la media es el numero de la mitad ${nummitad}`) 
}









