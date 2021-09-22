import clubStore from '../store/TravelClubStore.mjs';

//import TravelClub from '../entity/TravelClub.mjs'; //test 를 위함

class ClubCoordinator {

    constructor () {
        this._clubStore = clubStore;
    }

    hasClubs() {
        if(this._clubStore.count() !== 0) {
            return true;
        }
        return false;
    }

    exist(name) {
        return this._clubStore.exist(name);
    }

    register(newClub) {
        return this._clubStore.store(newClub);
    }

    find(name) {
        return this._clubStore.retrieve(name);
    }

    findAll () {
        return this._clubStore.retrieveAll();
    }

    modify (name, intro) {
        if(!this._clubStore.exist(name)) { //해당하는 이름의 club이 있는지 확인 없다면 return해버린다.
            return;
        }
        let foundClub = this._clubStore.retrieve(name);
        foundClub.intro = intro;
        this._clubStore.update(foundClub);
    }

    remove (name) {
        if(!this._clubStore.exist(name)) {
            return;
        }

        this._clubStore.delete(name);
    }
}

export default ClubCoordinator;


//Test

// let newClub = new TravelClub('TestClub', 'Test intro');

// let coordinator = new ClubCoordinator();

// coordinator.register(newClub);
// console.log(coordinator.find(newClub.name));
// console.log(coordinator.findAll());