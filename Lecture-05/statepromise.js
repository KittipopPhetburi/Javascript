const promise = new Promise((resolve,reject)=>{
    const res = true;

    if(res){
        resolve("Resolved");
    }
    else {
        reject(Error('error'));
    }
    
});

promise.then((res)=> console.log(res),(err)=>alert(err));