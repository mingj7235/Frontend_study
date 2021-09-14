let practiceObject = {
    "First-name" : "Minjae",
    LastName : "Kim",
    age : 30,
    gender : "male"
}


for (const key in practiceObject) {
    console.log(key);
}

for (const key in practiceObject) {
    console.log(`key : ${practiceObject[key]}`);
}

practiceObject.walk = function (item) {
    console.log(`${this["First-name"]} 은 ${item}을 들고 걷는다. `)
}

practiceObject.walk('abc');

console.log(practiceObject);