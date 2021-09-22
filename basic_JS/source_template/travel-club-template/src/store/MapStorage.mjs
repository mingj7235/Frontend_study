//MAP 
/**
 * ES6 이후 
 * Collection 활용 
 * 
 * Collection 
 *  - Indexed Collection -> index를 활용하여 접근
 *          - Arrays
 *          - Typed Array
 * 
 *  - Keyed Collection -> key로 접근 
 *          - Objects
 *          - Map
 *          - Set
 *          - WeakMap    
 *          - WeakSet
 */

/**
 * Typed Array -> 실제 존재하는 객체는 아니고, 9개의 객체를 대표하는 총칭
 */

/**
 * Keyed Collection
 * 
 * Object는 기본적으로 key , value형태로 내부 프로퍼티를 관리하며 추가, 삭제 가능함. 
 * ES6부터 추가된 Set, Map 객체는 key와 value형태로 데이터를 관리한느데 보다 최적화 된 객체임. 
 * 
 * Object의 key값은 무조건 문자열이어야한다.
 * Map의 key값은 어떤 형태든 가능하다. 
 * 또한, Map에서 제공해주는 라이브러리를 사용하여 특정 객체의요소를 찾기에 적합하다. 
 * 
 * - Map
 *      - key와 value의 형태로 데이터를 저장.
 *      - key가 다양한 타입이 될 수 있다. (Object의 key는 문자열만 가능하다. )
 * - Set
 *      - 배열과 유사한 특징을 가지고 있지만, 중복데이터를 허용하지 않으며, 저장데이터 자체를 key로 하여 데이터를 관리함. (index가 없다.)
 */

/**
 * Singleton Pattern
 * 
 * - 인스턴스가 전체 프로그램에 한개만 있도록 하는 패턴
 * - 한개의 객체만이 들어갈 수 있도록 (DB를 연결하지 않으므로 Map에 데이터를 저장)
 */


let uniqueInstance;

class MapStorage {
    constructor () {
        if(uniqueInstance) { //변수를 if에 넣게된다면, null이거나 undefined이면 false가 된다. 어떤 참조값이 변수에 들어가있다면 true가 return된다. 
            return uniqueInstance;
        }
        this._clubMap = new Map();
        uniqueInstance = this;
        
    }
    get clubMap() {
        return this._clubMap;
    }
}

export default new MapStorage(); //export할 때 new를 해서 주는 것. 싱글톤 패턴이 때문이다. 







