function promiseTimeout(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,ms);
    })
}

async function longRunningOperation(){
    return 42;
}

async function run(){
    console.log("Start");
    await promiseTimeout(2000);
    const response = await longRunningOperation();
    await promiseTimeout(2000);

    console.log(response);
    await promiseTimeout(2000);

    console.log("Stop");
}

run();