export function isNumber( number ) {
    return !isNaN (parseInt(number));
}

function isOdd ( indexNum ) {
    return indexNum % 2 === 1 ; // true -> odd / false -> 
}

export function isOper ( oper ) {
    let opers = "+-*/=";
    return opers.indexOf(oper) !== -1;
}

export default {
    isNumber, 
    isOper,
    isOdd
}
