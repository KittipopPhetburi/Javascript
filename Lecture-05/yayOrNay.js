function yayOtNay(){
    return new Promise((resolve,reject)=>{
        const val = Math.round(Math.random()*1);
        console.log(val);
        val ? resolve("Lucky") : reject("Nope");
    });
}

async function msg(){
    try{
        const msg = await yayOtNay();
        console.log(msg);
    }catch(err){
        console.log(err);
    }
}
msg();
msg();
msg();
msg();
msg();
msg();
msg();
msg();
msg();
msg();
msg();
msg();
msg();
msg();
msg();
msg();
msg();
msg();
msg();