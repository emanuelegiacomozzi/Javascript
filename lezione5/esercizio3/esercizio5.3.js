

let job1 = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("result of job 1");
        }, 1000);
    });
}


let job2 = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("result of job 2");
        }, 1000);
    });
}

let promise = job1();

promise.then((data1)=>{
    console.log("data1", data1);
    return "hello world"
}).then((data2)=>{
    console.log("data2", data2);
    return job2()
}).then((data3)=>{
    console.log("data3", data3);
});

