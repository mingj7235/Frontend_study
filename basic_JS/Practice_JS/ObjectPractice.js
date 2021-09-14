let practiceObject = {
    "First-name" : "Minjae",
    LastName : "Kim",
    age : 30,
    gender : "male"
}

let personPractice = function (firstname, lastname, age, gender, attack) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.gender = gender;
    this.attack = function(weapon) {
        console.log(`${firstname} 이 ${weapon} 을 들고 공격함`)
    }

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

let p01 = new personPractice('kim', 'min', 30, 'male');

console.log(p01.attack('weapon'));