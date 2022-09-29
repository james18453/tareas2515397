//asincronismo con promesas


/*
function saySomething(x) {
    return new Promise((resolve,reject) => {
        reject();
    setTimeout(() => {
    reject();
    }, 2000);
    });
}
async function talk(x) {
    try {
    const words = await saySomething(x);
    console.log(words);
    } catch (error) {
        console.log('error',error)
    }
    
    }    
    talk(2);
    talk(4);
    talk(8);

    function sumaArreglo(vector){  
        let s=0;      
            for (let i = 0; i < vector.length; i++) {
                s+=vector[i];                    
            }
            console.log(s);
        }

   

    function promisoria(vec){
        return new Promise(function(resolve, reject){
            setTimeout(() => {
                if(vec instanceof Array){                                        
                    resolve(sumaArreglo(vec))                
                }
                else reject(new Error('!Debe ser arreglo'))    
            }, 2000);
            
    })
}

async function prueba(vector){
    try{
        const suma= await promisoria(vector);
       // console.log('Ir adelantando trabajo mientras se cumple la promesa')
        
        //console.log(suma)
    }catch(Error){
        console.log('Fallo')
    }
//console.log(suma);
}


let vectorReal=[1,2,3];
prueba(vectorReal);
*/


/*
let counter=0;

function forCounter(x){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            counter+=1;
           resolve(`ready ${x} counter ${counter} `) 
        }, 2000);
    })
}

async function solucion(x){
const local=await forCounter(x);
console.log(local);
}

for (let i = 0; i < 9; i++) {
    solucion(i);}
*/


/*
function promisoria(x){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(`semaj se fue por el agua en ${x}`);
        }, 2000);
    })
}

async function usarPromesa(parametro){    
    const reciboPromesa=await promisoria(parametro);
    console.log(reciboPromesa)
    console.log('Alistando ingredientes, esperando el agua');
}

usarPromesa('a pie');


*/