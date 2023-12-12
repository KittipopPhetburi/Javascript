const cat = {
    name: "Pipey",
    age: 8,
    whatName(){
        return this.name;
    },
    whatAge(){
        return this.age;
    },
};

console.log(cat.whatName());

cat.name = "Nezzer";
console.log(cat.whatName());

console.log(cat.whatAge());

cat.age = 4;
console.log(cat.whatAge());