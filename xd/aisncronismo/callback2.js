function trabajoArreglos(cb1,cb2,vec){
    vec=[]
    setTimeout(()=>{
        console.log(vec)
    },1000);
    vec=cb1(vec);
    console.log(cb2(vec));
}

