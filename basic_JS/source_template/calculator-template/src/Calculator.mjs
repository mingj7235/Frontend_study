// import { isNumber, isOper } from './Validator.mjs';
import validator from './Validator.mjs'; //중괄호가 없음

// isNumber(10); //export

//validator.isNumber(10); //export default 이방식이 코드 가독성에는 더 좋다. 

let inputDatas = [] ; //사용자에게 숫자나 operation을 받을 배열

function appendData( inputData ) {  
    inputDatas.push(inputData);
}

function getInputDatasMessage () { //사용자가 키보드로 값이나 oper를 넣을 때 출력이 되도록 하는 메세지를 리턴하는 메소드
    let message = '';
    inputDatas.map( value => {
        // if(inputDatas.findIndex === 0) {
        //     message += ' ';
        // } else {
        //     message += ' ' + value;
        // }
        //message += ' ' + value;
        message += ' ' + value;
        
     });
    return message;
}

function calculate() { //실제로 계산을 하는 메소드 //validation은 숙제로 해보자.
    let result = parseInt(inputDatas[0]); //최초에 숫자일것이라고 생각하고 만듬. validation 안함    
    let currentNumber = 0;
    let currentOper = '';
    let prevOper = '';
    
    // inputDatas.forEach( value => {
    //     // if (validator.isNumber(parseInt(value))) {
    //     //     currentNumber = parseInt(value);
    //     // } else if (validator.isOper(value)) {
    //     //     currentOper = value;
    //     // }

    //     if (validator.isOdd(inputDatas.))
        
    //     switch (prevOper) { //초기화 작업을 해주기때문
    //         case '+' : 
    //             result += currentNumber;
    //             break;
    //         case '-' : 
    //             result -= currentNumber;
    //             break;
    //         case '*' : 
    //             result *= currentNumber;
    //             break;
    //         case '/' : 
    //             result /= currentNumber;
    //             break;
    //         default :
    //             break;
    //     }
    //     prevOper = currentOper; 
    //     currentOper = ''; //초기화
    // })

    for (let i = 0 ; i < inputDatas.length; i ++) {
        if (validator.isEven(i)) { 
            if(validator.isNumber(parseInt(inputDatas[i]))) {
                currentNumber = parseInt(inputDatas[i]);
            }
        }else {
            if (validator.isOper(inputDatas[i])) {
                currentOper = inputDatas[i];
            }
        }

        switch (prevOper) {
            case '+' :
                result += currentNumber;
                break;
            case '-' :
                result -= currentNumber;
                break;
            case '*' :
                result *= currentNumber;
                break;
            case '/' :
                result /= currentNumber;
                break;
        }

        prevOper = currentNumber;
        currentOper = '';

    }

    return result;
}

export default {
    appendData,
    getInputDatasMessage,
    calculate
}