import { question } from 'readline-sync';
import calculator from './Calculator.mjs';

function showPrompt () {
    while(true) {
        let inputData = question('Enter number or Operation : ');

        if(inputData !== '=') {
            calculator.appendData(inputData);
            console.log(calculator.getInputDatasMessage());
        }else {
            //result print ( = 이 아닌경우므로)
            console.log(calculator.getInputDatasMessage() + ' = ' + calculator.calculate());
            break;
        }
    }
}

showPrompt();

function calculateExecution() {
    while(true) {
        let inputData = question('Enter logics : ');

        if () {
            //functions
        } else {
            //functions 
        }
    }
}

calculateExecution ();