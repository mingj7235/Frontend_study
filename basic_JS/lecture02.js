
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
