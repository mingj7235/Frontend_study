import {question} from 'readline-sync'
import TravelClub from '../entity/TravelClub.mjs';
import ClubCoordinator from '../service/ClubCoordinator.mjs';

class ClubWindow {

    constructor() {
        this._clubCoordinator = new ClubCoordinator();
    }

    register() {
        let newClub = null;
        while(true) {
            let clubName = question ('Write club name (0. club menu) : ');
            if(clubName === '0' || clubName === null || clubName ==='') {
                break;
            }

            if (this._clubCoordinator.exist(clubName)){
                console.log(`Club name alread exists => ${clubName}`);
                continue; //다시 입력을 받을 수 있도록 돌아가게 함 
            }

            let intro = question ('Write club intro (0. club menu) : ');
            if(intro ==='0') {
                break;
            }

            newClub = new TravelClub(clubName, intro);
            this._clubCoordinator.register(newClub);
            console.log(`Registered Club => ${clubName}`);
        }
    }

    findAll () {
        if(!this._clubCoordinator.hasClubs()) {
            console.log('No clubs in the storage');
            return;
        }

        let allClubs = this._clubCoordinator.findAll();
        console.log('............Found Clubs............');
        for (let value of allClubs) {
            console.log('..........................');
            console.log(`club Name : ${value.name}`);
            console.log(`club Intro : ${value.intro}`);
            console.log(`Founded Date : ${value.foundedDate}`);

        }
    }

    findOne() { //내부적으로 사용
        let foundClub = null;
        if (!this._clubCoordinator.hasClubs()) {
            console.log('No clubs in the storage !');
            return null; 
        }

        while (true) {
            let clubName = question('Club name to find (0. Club menu) : ');
            if (clubName ==='0') {
                break;
            }

            if(this._clubCoordinator.exist(clubName)) {
                foundClub = this._clubCoordinator.find(clubName);
                break;
            } else {
                console.log(`No ${clubName} club in the storage`);
            }
        }
        return foundClub;
    }

    find() {
        let foundClub = this.findOne();

        if(foundClub) { //null이거나 undefined 라면 false가 return
            console.log('..........................');
            console.log(`club Name : ${foundClub.name}`);
            console.log(`club Intro : ${foundClub.intro}`);
            console.log(`Founded Date : ${foundClub.foundedDate}`);
        } 
        // else {
        //     console.log(` No ${foundClub.name} club in the storage`);
        // }
    }

    modify() {
        let targetClub = this.findOne();

        let newIntro = question('New intro (0. Club menu) : ');

        if (newIntro === '0') {
            return;
        }
        this._clubCoordinator.modify(targetClub.name, newIntro);
        console.log(`${targetClub.name} club intro changed -> ${newIntro}`);

    }

    remove () {
        let targetClub = this.findOne();
        let confirmStr = question(' Remove this club ? ( Y: yes, N: no )');
        if(confirmStr.toLowerCase() === 'y' || confirmStr.toLowerCase() === 'yes') {
            this._clubCoordinator.remove(targetClub.name);
            console.log(`Removed the club => ${targetClub.name}`);
        } else {
            console.log(`Removing cancelled => ${targetClub.name}`);
        }
    }
}


export default ClubWindow;