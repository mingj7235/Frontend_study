let arrays = [1, 2, 'abc', true, 4, 5];

//arrays.map(value => console.log(value));

let datas = arrays.filter(num => parseInt(num) % 2 == 0);

datas.map(value => console.log(value));


let numbersArray = [2, 3, 4, 5, 6, 7];

for (let i = 0; i < numbersArray.length; i++) {
    console.log(`${i} 번째 값 : ${numbersArray[i]}`);
}