function promiseTimeout(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,ms);
    });
}


promiseTimeout(500)
    .then(()=>{
        console.log("Done!!");
        return promiseTimeout(1000);
    })
    .then(()=>{
        console.log("Also Done");
        return Promise.resolve(42);
    })
    .then((result)=>{
        console.log(result);
    })
    .catch(()=>{
        console.log("Error");
    });