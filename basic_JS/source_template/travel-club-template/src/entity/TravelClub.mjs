class TravelClub {

    //클래스의 구성요소

    //1. 데이터 속성 
    //2. 메소드
    //3. 초기화 메소드 (Initialized constructor) -> 생성자

    constructor(name, intro) {
        this._name = name
        this._intro = intro;
        this._foundedDate = new Date();
    }

    get name () {
        return this._name;
    }

    set name (name) {
        this._name = name;
    }
    
    get intro () {
        return this._intro;
    }

    set intro (intro){
        this._intro = intro
    }
}

// let newClub = new TravelClub('Test club', 'Test intro');
// console.log(newClub.name);
// console.log(newClub);

// newClub.name = 'New name'; //setter 사용
// console.log(newClub);

export default TravelClub;