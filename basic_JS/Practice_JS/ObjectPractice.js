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

let p02 = new personPractice('kim' , 'hye', 30, 'male');

p02.love = function(someone) {
    return someone + ' love';
}

let someone = function () {
    return 'minjae';
}

console.log(p02.lastname + ' ' + p02.love(someone()));


for (const key in p01) {
    console.log(key);
}

console.log('----------')

for (const key in p02) {
    console.log(key);
    
}

// console.log('p01 : ' + p01.love);  //undefined
// console.log('p02 : ' + p02.love('element')); //




// console.log(p02.love = function () {
//     return 'love';
// })

