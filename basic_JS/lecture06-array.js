/**
 * Array
 * 
 * - 유사한 의미를 갖는 데이터들을 모아서 관리할 수 있는 리스트 형태의 데이터 집합 
 * - JS의 배열은 길이가 고정되어있지 않음. 데이터 추가 or 삭제를 통해 크기 변경 가능 -> JAVA와 다르다. 길이가 가변적이라는 것 !
 * - Array는 index를 통해 데이터를 관리하고, 하나의 배열 변수를 이용하여 다수의 값을 관리한다. 
 * - 배열안의 요소는 데이터 타입이 달라도 상관없다. 
 */

let numbers = [10, 6, 8, 11, 20];

for (let i = 0; i < numbers.length; i ++) {
    console.log(`indes[${i}] : ${numbers[i]}`);
}

for (let value of numbers) {
    console.log(`value : ${value}`);
}

/**
 * Array 의활용
 * 
 * - 잊지말아야할것 ! JS에서 Array는 객체다! 즉, 다양한 메소드를 제공한다. 
 * - JS Array의 다양한 내장 메소드를 활용하여 요소추가, 삭제, 순회 등과같은 기능 구현 가능
 * - map(), filter(), find()같은 다양한 메소드가 있다.
 */

numbers.push(55); //요소 추가 
numbers.pop(); // 마지막 요소 제거
numbers.unshift(-55); //첫번째 요소 추가 (0번 index에 값을 추가)
numbers.shift(); //첫번째 요소 제거 


numbers.map(number => console.log(`number : ${number}`)); //map사용하여 순회
let evenNumbers = numbers.filter(number => number %2 ===0); //filter사용하여 출력
evenNumbers.map(number => console.log(`evenNumber : ${number}`)); //filter한 결과를 map을 통해 console에 찍음 

//array객체는 다양한 메소드를 내부에 가지고 있다. 









