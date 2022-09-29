setTimeout(()=>{
    console.log("yo amo soacha");
},3000);



function externa(){
    console.log("funcion externa al setTimeOut")
}

const funcionExt=()=>{
    console.log("funcion externa flecha")
}

setTiemout(()=>{
    console.log("amo soacha")
},2000);

setTimeout(function(){
    console.log("funcion clasica")
},3000)

setTimeout(externa,5000);
setTimeout(funcionExt,5000);

setInterval(()=>{
    console.log("se repite")
},3000);

let timerID = SETiNTERVAL (() => console.log("amo el sena "),2000);

//despues de 7 segusdos parar
   setTiemout(()=>{
    clearInterval(timerID);
    //console.log("stop")
   },7000);
   
   



//hacer un contador de 1 hasta 10
//donde cada numero se muestre dos segundos 



for(var i=0; i<10; i++){
    setTimeout(()=>{
        console.log(i)
    },2000)
}



for(let i=0; i<10; i++){
    setTimeout(()=>{
        console.log(i)
    },(i*1000));
}
    


