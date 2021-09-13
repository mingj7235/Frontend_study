// // 함수 선언문 : 전역객체로 인식되므로, hosting 이된다. 

// //testFunc(); // 선언보다 위에있으나 사용해도 작동한다.

// function testFunc01 () { //함수선언문이 되면 전역객체가 된다. 즉, 어디서나 호출이 가능하며, 동일한 이름의 함수가 만들어진다면 데이터가 중복이 될 수 있다는 말이다. 
//                                     //그렇기때문에, 일반적으로 함수 선언문은 잘 사용하지 않도록 권장되었었다.
//                                     //하지만, 모듈화를 해서 사용하는 요즘은, 함수 선언문이든 함수표현식이든 사용해도 무방하다. 
//     console.log("Test Function");
// }

// testFunc01();

// //testFunc02(); //선언보다 위에있으므로 초기화가 되지않았다는 예외가 뜬다. 함수표현식! 

// // 함수 표현식
// let testFunc02 = function() {
//     console.log ("Test Function2");
// }

// testFunc02();

// //new Function() : 이방법은 문자열로 선언해야해서 잘 사용안함
/**
 * 실습. Calculator 만들기
 */

const readLine = require('readLine-sync')

function showPrompt () {
    console.clear();
    const testStr = readLine.question('Enter test message : ');
    console.log(testStr);
}

showPrompt();

























