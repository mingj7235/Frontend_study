import mapStorage from "./MapStorage.mjs";
//import TravelClub from "../entity/TravelClub.mjs"; 테스트를 위해 임포트했었음

class TravelClubStore {

    constructor(){
        this._clubMap = mapStorage.clubMap; //get method 를 통해 호출하는 것임을 확실히 !

    }
    //저장된 TravelClub 수를 반환
    count () {
        return this._clubMap.size; //map 객체가 가지고 있는 프로퍼티인 size를 호출하는 것임. 
    }

    //클럽 명으로 해당 클럽이 존재하는지 안하는지를 구분하는 메소드 
    exist(name) {
        return this._clubMap.has(name); //map 객체의 has 프로퍼티를 호출함. 
    }

    //저장하는 메소드
    store (newClub) { //newClub 객체를 파라미터로 받는다. 
        if (this.exist(newClub.name)) { //해당 이름을 가진 클럽이 있다면 null을 return
            return null;
        }
        this._clubMap.set(newClub.name, newClub); //새로운 클럽이라면, set을 사용하여 name을 key값으로, newClub을 value로 넣어주고 name을 return 한다. 
        return newClub.name;
    }

    //하나의 클럽을 검색
    retrieve(name) {
        return this._clubMap.get(name); 
    }

    //클럽 전체를 검색 
    retrieveAll () {
        return this._clubMap.values(); //values 메소드 : map객체가 가지고 잇는 전체 value들을 collection 으로 return 한다. 
    }

    //업데이트
    update (newClub) { // 여기서는 intro만 바뀌도록할건데, coordinator에서 설정할 것이다. 
        this._clubMap.set(newClub.name, newClub);
    }

    //삭제 메소드 
    delete (name) {
        this._clubMap.delete(name); //delete method -> map에 있는 프로퍼티 
    }
}

export default new TravelClubStore(); //생성해서 넘겨줄 것임 
/**
 * 만약에, TravelClubStore() 클래스를 선언하는 곳에서 export default를 한다면 사용하는 쪽에서 new 해서 사용해야한다.
 * 그런데 이렇게 말미에 new로 export를 해주면 사용하는 측에서 new 하지 않고 사용가능하다. 
 */


//CURD 테스트

// let newClub1 = new TravelClub('TestClub1', 'TestIntro');
// let newClub2 = new TravelClub('TestClub2', 'TestIntro');
// let newClub3 = new TravelClub('TestClub3', 'TestIntro');
// let travelClubStore = new TravelClubStore();

// travelClubStore.store(newClub1);
// travelClubStore.store(newClub2);
// travelClubStore.store(newClub3);

// travelClubStore.update(new TravelClub('TestClub2', 'UpdateIntro'));

// console.log(travelClubStore.count());
// console.log(travelClubStore.retrieve('TestClub1'))
// console.log(travelClubStore.retrieveAll());




