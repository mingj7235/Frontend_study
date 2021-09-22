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

}


export default ClubWindow;