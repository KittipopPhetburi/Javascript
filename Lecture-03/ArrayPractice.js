let value1 = ['Apple',1,9];
let value2 = ['Fries',2,true];
let value3 = ['Mars',9,'Apple'];


for(let i = 0; i<value1.length;i++){
    for(let n = 0; n < value1.length;n++){
        if(value1[i] === value2[n]){
            console.log("Array " + i + " " + value1[i] + "\nArray " + n + " " +value2[n] )
        }
        else if(value1[i] === value3[n]){
            console.log("Array " + i + " " + value1[i] + "\nArray " + n + " " +value3[n] )
        }
    }
}

