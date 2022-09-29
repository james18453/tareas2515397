
function receptora(callback){
    callback()
    setTimeout(() => {
        console.log("dentro de la funcion receptora")
    }, 2000);
}

/*
function funcionArgumento(){
    console.log("impresion de la funcion argumenti")
}

receptora(funcionArgumento)
*/


function receptora(cb1,cb2,parametro){
    cb1();
    setTimeout(() => {
        console.log("dentro de la funcion receptora")
    }, 0);
    cb2(parametro)
}


function funcionArgumento(parametro){
    console.log(`${parametro}impresion de la funcion argumenti`)
}

receptora(()=>console.log("funcion anonima"),funcionArgumento,100);

