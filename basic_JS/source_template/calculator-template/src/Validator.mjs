export function isNumber( number ) {
    return !isNaN (parseInt(number));
}

function isEven ( indexNum ) {
    if (indexNum === 0) {
        return true;
    } else {
        indexNum % 2 === 0 ; 
    } 
}
export function isOper ( oper ) {
    let opers = "+-*/=";
    return opers.indexOf(oper) !== -1;
}

export default {
    isNumber, 
    isOper,
    isEven
}
