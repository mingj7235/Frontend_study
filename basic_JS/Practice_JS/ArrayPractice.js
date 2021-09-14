let arrays = [1, 2, 'abc', true, 4, 5];

//arrays.map(value => console.log(value));

let datas = arrays.filter(num => parseInt(num) % 2 == 0);

datas.map(value => console.log(value));

