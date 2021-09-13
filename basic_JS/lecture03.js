/**
 * Functions
 * 
 * - 독립된 목적의 작업 수행을 위한 코드의 블록
 * - JS의 function은 코드의 집합을 나타내는 '자료형'이고, '객체'다 
 * - JS의 function은 일급 객체 (first-class 객체) -> 변수에 담거나, 전달인자와 반환값으로 전달도 가능하다. 오오...
 *      -> data type이 된다고 생각하면 간단하다. 
 *      -> JS의 fuction의 특징이다. 
 * 
 * ** JS에서 어떤 객체에 소속되어 호출되는 함수는 메소드라고 불린다. 
 * 
 * 
 */


/**
 * Function을 정의하는 방식이 4가지가 있다. 
 * 
 * - 함수 선언문
 * - 함수 표현식
 * - Function constructor 함수 -> 이방법은 사용하지 않는다. 복잡하고 어려움
 * - arrow function 
 * 
 * 
 * 함수 표현식 에의한 정의가 권장이된다.
 * 왜? 함수 선언문 방식은 함수의 hosting이 적용이 되기 때문이다. 
 *
 */

/**
 * 1. 함수 선언문
 * function 함수이름 (매개변수1, ....) {
 *      함수 logic
 * }
 * 
 * -> 전역객체에 들어가게 된다. 그러므로 이방법은 잘 사용되지 않는다. 
 * 
 */

/**
 * 2. 함수 표현식 - 이방식을 가장 많이 쓴다. 
 * let 함수 이름 = function (매개변수 1, ...) {
 *      함수 logic
 * }
 */

//함수 선언문

function func1 (n) {
    let sum = 0;

    for (let number = 1; number <= n; number++) {
        sum += number;
    }

    console.log(sum);
}

func1(10);

// 함수 표현식
let func2 = function (n) { //JS의 독특한 방법. 이방법을 많이 사용한다. 
    let sum = 0;

    for (let number = 1; number <= n; number ++) {
        sum += number;
    }
    console.log(sum);
}

func2(20);

/**
 * 
 * Function의 Parameter
 * 
 */

function sum (x, y, z) {
    let result = x + y + z;
    return result;
}

//함수를 호출할 때, 정의된 parameter와 전달인자의 갯수가 일치하지 않아도 호출 가능하다. 에러를 안뱉는다. 다만 NaN을 뱉을 뿐
console.log(sum(10)) ; //NaN 
console.log(sum(10,20,30)); //60 

/**
 * function은 arguments라는 프로퍼티를 기본적으로 가지고있다.
 * arguments 프로퍼티는 함수의 parameter를 배열로 가지고 있다. 
 */

function sumArgu (x,y,z) {
    let result = 0;
    for(let i = 0; i< arguments.length; i++) { //arguments 프로퍼티 
        result += arguments[i];
    }

    return result;
}

console.log(sumArgu[10]); //10
console.log(sumArgu[10, 20]); //30
console.log(sumArgu[10,20,30]);//60


/**
 * JS의 function의 parameter는 default valuef를 지정할 수 있다.
 * 이를 디폴트 매개변수라고 한다.
 */

function sumDefault (x, y =0, z = 0) { //미리 이렇게 parameter를 디폴트로 지정해 놓는다. 
    return x + y + z;
}

/**
 * JS의 function의 parameter는 rest parameter라는 개념도 있다.
 * 나머지 파라미터라는 개념인데, 이는 배열로 들어가게된다.
 * - 주의 : 파라미터선언의 마지막 부분에만 rest parameter를 사용할 수있다. 
 */

function minus (totalValue, ...minusValues) { //...minusValues가 rest parameter인데, 배열의 형태로 들어가게된다.
    for (let value of minusValues) {
        totalValue -= value;
    }

    return totalValue;
}

console.log(minus(100, 10)) ; //90
console.log(minus(100, 10, 20)); // 70
                //100은 tatolValue, 10과 20은 rest parameter의 배열요소가된다. 


/**
 * Arrow Function
 * 
 * - ES6 부터 사용가능
 * - function 키워드 대신, 화살표(=>)를 사용하여 함수를 선언하는 방식이다. 
 * - function의 body가 한줄 구문으로 이루어졌을 경우 {}를 생략 가능하고, 암묵적으로 return을 수행한다. 
 *          {}를 사용해야할때는 return구문을 적어야한다. 
 * - Arrow function은 익명함수로써 (함수정의시 이름이 없음. 그 이름을 통해서 호출 할 수 없다.) 
 *       생성자의 역할로 사용할 수 없고, 메소드로 사용하지 않는다. 그렇기에 콜백에서 많이 사용됨. 
 * - rest parameter, default paremter, 그리고 destructuring을 지원한다. 
 */

//ES5
var arr = [1, 2, 3].map(function(x){return x * x;});

//ES6
const arr = [1, 2, 3].map(x => x * x);























