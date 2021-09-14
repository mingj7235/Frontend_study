/**
 * Object
 * 
 * - 객체는 이름과 값으로 구성된 Property의 집합 (이름 - key, 값 - value 라고 주로 말한다. )
 * - 문자열, 숫자, boolean, null, undefined를 제외한 모든 값은 객체다 !
 * - 전역 객체를 제외한 JS 객체는 property를 동적으로 추가하거나 삭제할 수 있다. 
 * 
 * - JS 객체는 prototype이라는 특별한 property를 포함한다. 
 */

/**
 * 객체 접근
 * 
 * - 마침표를 사용하거나, 대괄호를 사용하여 속성값에 접근한다.
 * - 객체에 없는 속성에 접근하면 undefined를 반환한다. 
 * - 객체 속상 값을 조회 할 때 || 연산자를 사용하는 방법도 많이 사용됨
 *      ex) let middle = stooge['middle-name'] || 'none';
 */

let emptyObject ={}; //객체 리터럴

let employee = { //객체 선언
    "firstName" : "Jobs",
    "last-Name" : "Steve",
    "company" : "Apple"
}

console.log(employee.company); //마침표로 접근
console.log(employee["last-Name"]); //대괄호로 접근 
        // 연산자가 속성명에 포함된 경우 [] 로만 접근 가능하다. 이 경우 - 가 들어갔기때문에, [] 표기법으로만 접근가능하다. 


/**
 * 속성값 변경
 * 
 * - 마침표나 대괄호를 사용
 */

employee.company = 'MS'; //변경하는 방법
console.log(employee.company);

// 아무것도 없는 객체에 속성을 넣는방법
emptyObject.name = 'kim'; //emptyObject에 name이라는 key에 kim이라는 value가 들어가게됨

console.log(`emptyObject.name : ${emptyObject.name}`);


/**
 * JS 에서 객체를 만드는 방법
 * 
 * - 객체 리터럴을 사용하여 생성 
 */

//객체 리터럴을 사용하여 객체 생성
let customer = {
    id : 'A1234',
    name : 'kim'
}; 

//console.log(employee);
console.log(customer);

console.log(customer.id + " : " + customer['name']);

customer.age = 20;

console.log(customer);

customer.toString = function() {
    return this.name;
};

console.log(customer);
console.log(customer.toString);

//delete customer.toString; //property 삭제하기 
delete customer.age;
console.log(customer);

//객체의 모든 프로퍼티를 찍는법

for ( const key in customer ) { //customer를 돌리면 key를 뱉어낸다. 
    console.log(key + ' : ' + customer[key]);
}

/**
 * 생성자 방식으로 객체를 만드는 법
 * 근데, ES6 이후에는 이렇게 잘 만들지는 않는다. 
 * 하지만, 공부할 필요는 있다. 
 */

let Person = function (name, id) { //생성자 함수를 통해 객체 생성
    this.name = name;
    this.id = id;
};

let person01 = new Person('kim', 'A12345');
console.log(person01);

let person02 = new Person('Lee', 'B1234');
console.log(person02);


/**
 * 구조분의 할당 
 */
let {name, id} = person01;
console.log(name, id);



