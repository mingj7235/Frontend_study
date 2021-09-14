/**
 * class
 * 
 * - ES5 까지는 생성자 함수와 프로토타입을 통해 클래스 형태를 구현함
 * - EX6부터는 class키워드를 통해 클래스를 정의한다. 
 * 
 * - 함수와 동일하게 클래스 선언, 클래스 표현으로 클래스를 정의할수 있음.
 * - 함수와 달리 호이스팅 되지않는다. 
 * - class, constructor, extends등의 키워드가 추가되었다. set, get 메소드도 사용가능 
 *      => 객체지향적 프로그램이 가능해짐
 */

class Person {
    constructor (name, id){ //생성자
        this.name = name;
        this.id = id;
    }
    toString() { //class내에 method 선언
        return this.name;
    }
}

let p01 = new Person('kim', 'A1234');
console.log(p01); //toString() 이 안보임

console.log(p01.toString());

