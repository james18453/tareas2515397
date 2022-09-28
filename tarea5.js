var pob = Math.round((Math.random()*10000-1000)+1000)
var nac = Math.round(Math.random()*10)
var mur = Math.round((Math.random()*3-1)+1)
var nu = 0
var nu1 = 0

function muerte(mur,pob){
   var muert = ((pob%mur)*pob)
   nu = muert
   return muert 
}

function nacimiento(nac,pob){
   var nacimient = ((nac%pob)*pob)
   nu1 = nacimient
   return nacimient 
}


function crecimiento(nu1,nu,pob){
   var  crec = ((nu1/nu)/pob) 
   return crec
}




console.log(muerte(mur,pob))
console.log(nacimiento(nac,pob))
console.log(crecimiento(nu1,nu,pob))




































    

///////////////////////////////////

//dos promesas con el ejercicio 
//al 10% de la poblacion final entregar una casa, hacer una promesa que calcule la cantidad que va a tener casa
//tymeaout 5000  5 segundos


// crecimiento neto en el 10 periodo, porciento que crecio 









