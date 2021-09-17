export function isNumber( number ) {
    return !isNaN (parseInt(number));
}

export function isOper ( oper ) {
    let opers = "+-*/=";
    return opers.indexOf(oper) !== -1;
}

export default {
    isNumber, 
    isOper
}
