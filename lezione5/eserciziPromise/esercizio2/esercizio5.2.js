let job = (data) =>{
    return data
}

let job2 = (data) =>{
    return new Promise((resolve,reject)=>{
        if(typeof job(data) === "number" && (job(data) % 2 == 0)){
        setTimeout(()=>{
            resolve("pari");
        }, 2000);
        }else if(typeof job(data) === "number" && (job(data) % 2 == 1)){
            setTimeout(()=>{
                resolve("dispari");
            }, 1000);
        }else{
            reject("errore")
        }
    });
}

let data ="10";

let promise = job2(data);

promise.then((data2)=>{
    console.log(data2);
}).catch((err)=>{
    console.log(err);
});


