/**
 * Modules
 * 
 * - JS의 역할이 많아지고, 코드양이 많아지면서 모듈의 개념이 생기게 되었다.
 * - ES6에 정의된 API다. 그러므로 Babel과 같은 transpiler와 함께 사용한다. 
 * - 모듈의 선언은 export
 * - 모듈의 사용은 import 
 */

function getJSON (url, callback) {
    let xhr = new XMLHttpRequest ();
    xhr.onload = function () {
        callback (this.responseText)
    };
    xhr.open('GET', url, true);
    xhr.send();
}

export function getUsefulContents (url, callback) {
    getJSON (url, data => callback(JSON.parse(data)));
}