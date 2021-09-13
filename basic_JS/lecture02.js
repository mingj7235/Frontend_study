
/**
 * JS는 동적 타입 체계 -> 변수에 타입을 지정하지 않는다.
 * 할당되는 값의 타입에 따라 변수의 타입을 자동적으로 결정한다. 
 * 그러므로 검증을 해야하는 부분이 많아진다.
 * 유연하다는 장점 또한 있다. 
 * 변수에는 privitive type 뿐 아니라, Object type이 들어갈수도있다.
 *  -> 함수, 배열, 클래스들이 들어갈 수 있다는 말이다. 
 *  -> type을 잘 핸들링 할 수 있어야 한다. 
 */
let myVariable = 10

let letter = 'js'
let booleantype = true

/**
 * let 
 * 
 * - ES6 에 추가된 변수 선언 
 * 
 * var : 함수나 전역의 범위(scope)를 갖는다. 
 * 
 * let : 선언된 블록 단위로 scope를 유지한다. (지역변수라고 생각하면될듯 )
 * 
 * let 변수는 전역 객체의 속성을 생성하지 않고, hosting이 적용되지 않는다.
 * 주로 let으로 변수를 선언한다. 
 * 
 * 
 */

/**
 * hosting
 */

function hostingVar () {
    console.log(text);  // undefined
    var text = "ES6 var";
    console.log(text); // ES6 var
}

function hostingLet () {
    console.log(text); //ReferenceError : text is not defined
    let text = "ES6 let";
    console.log(text); // ES6 let
}


/**
 * const
 * 
 * - ES6 부터 추가되었음. 상수를 정의할 때 사용
 * - 상수 : java의 public static final ...
 * 
 * - let과 같이 블록범위 (block-scope)를 가지고, 선언과 동시에 초기화한다.
 */

const PI = 3.1415; // const는 선언과 동시에 초기화를 해야한다.

const PI;
PI = 3.142323; //(x) 변수의 선언과, 값을 할당하는걸 이렇게 따로하면안된다. 
                //선언과 초기화를 함께 해야한다. 
// Missing initializer in const declaration

const MY_MATH = {
    pi : 3.14
};

MY_MATH.pi = 3.2314; // (o) 값을 바꾸는 것은 이상이없다. 

const MY_ARRAY = [];

MY_MATH.push("test"); //(o)
MY_MATH = ["test"]; //(x)
        //Uncaught TypeError : Assignment to constant variable. 


/**
 * Primitive Types 
 * 
 * - 6가지 타입이있다. 
 * 
 * - 1. 숫자형 : 실수와 정수를 구분하지 않는다. 
 *      모든 숫자를 8 byte의 실수 형태로 처리함
 *      숫자 데이터 타입의 연산 처리시 실수 형태로 연산이 이루어지기때문에 결과 오류발생 가능
 * 
 */

//부동 소수점 연산 오류

let x = 0.3 - 0.2;
let y = 0.2 - 0.1;

console.log(x == y); //false
console.log(x); //0.09999999999999998
console.log(y); //0.

/**
 * JS는 숫자와 관련된 특별한 상수가 존재한다. 
 *      - NaN (Not a Number) : 계산식의 결과가 숫자가 아님을 나타내는 상수
 *      - Infinity : 무한대를 나타내는 상수. 어떤 수를 0으로 나누거나, Infinity를 어떠한 수로 나눈식의 결과
 */

// Infinity, NaN

console.log(100/0); // Infinity
console.log(Infinity / 100); //Infinity

console.log(0 / 0); // NaN
console.log(parseInt('1A')) // 1 .. JS는 진짜 막나가는구나.. 그냥 숫자들어가면 문자를 무시해버림..
console.log(parseInt('A')) /NaN

/**
 * 
 * - 2. 문자열 : JS의 문자열은 16비트의 Unicode문자체계를 사용함
 *      char와 같은 단일문자 타입은 없고, 'a'와 같은 형태도 문자열로 표현됨
 *      '', "" 모두사용가능
 *
 */

/**
 * - 3. Boolean 타입 : true, false 값
 * 
 * - 4. null : 값이 없거나 비어있음
 * 
 * - 5. undefined : 값이 초기화 되지 않았음 (정의되지 않음)
 * 
 * - null과 undefined는 의미가 비슷하지만, 값을 할당하지 않은 변수는 undefined가 할당이되고, 
 *   코드에서 명시적으로 값이 없음을 나타낼 때는 null을 사용함 
 * - 사실, null은 object타입이면서, 아무것도 참조하지 않은것
 * - undefined는 값이 초기화되지 않았음을 의미함 
 * 
 * - 6. Symbol타입은 변경 불가능한 원시타입의 값이고 ES6부터 추가된 원시타입
 *      -> 객체의 프로퍼티가 선언될때 사용. 많이는 사용안됨 
 * 

 * 
 */
//boolean, null, undefined

let undefinedVariable;
let nullValue = null;

let x = 10;
let y = 12;

console.log(n1 == n2); //false
console.log(undefinedVariable); //undefined
console.log(nullValue); // null


/**
 * Operators
 * 
 * - 유의점
 * 
 * - == 과 ===의 차이 
 */

//Operator

let num = 10;
let str = "10";
/**
 * ==, ===의 차이점은 자료형 까지 비교하는지 아닌지의 여부다. 
 * ===은 자료형까지 비교해준다. 
 */
console.log ("num == str : " + (num == str)); // true ..오 개신기해
console.log ("num === str :" + (num === str)); // false

str = "30";

console.log("num != str:" + (num != str)); // true
console.log("num !== str:" + (num !== str)); //true 
/**
 * JS에서는 === or !==을 많이 사용한다. .
 * 논리적 비교를 위해서는 이걸 사용해야한다. 이게 습관화되어야한다 ㅋㅋㅋㅋㅋ 미틴
 * 
 */















































