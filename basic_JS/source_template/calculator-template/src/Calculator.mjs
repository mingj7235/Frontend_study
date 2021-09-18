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
    inputDatas.map( value => message += value);
    return message;
}

function calculate() { //실제로 계산을 하는 메소드
    //
}

export default {
    appendData,
    getInputDatasMessage,
    calculate
}