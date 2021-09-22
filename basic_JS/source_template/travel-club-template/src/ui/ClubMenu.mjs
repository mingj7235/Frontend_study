import {question} from 'readline-sync';

class ClubMenu {

    displayMenu () {
        console.log('....................');
        console.log('[Club menu]');
        console.log('....................');
        console.log(' 1. Register');
        console.log(' 2. Find');
        console.log(' 3. Find All');
        console.log(' 4. Modify');
        console.log(' 5. Delete');
        console.log('....................');
        console.log(' 0. Exit Program');

    }

    selectMenu () {
        let menuNumber = parseInt(question('Select : ')); //문자열로 받게 된다. 그렇기때문에 parsing 해줘야 한다. 
        if(menuNumber >= 0 && menuNumber <= 5) {
            return menuNumber;
        } else {
            console.log ('Invalid number => '  + menuNumber);
            return -1; //잘못된 종료일경우 -1을 리턴하는 것이 일반적
        }
    }

    exitProgram () {
        console.log('Program Exit. Good Bye..... ');
        process.exit(0); //종료시키는 process.exit(0)
    }

    show () {
        let inputNumber = 0;
        while(true) {
            this.displayMenu();
            inputNumber = this.selectMenu();
            switch(inputNumber) {
                case 1: break;
                case 2: break;
                case 3: break;
                case 4: break;
                case 5: break;
                case 0: this.exitProgram(); break;

            }
        }
    }
}


new ClubMenu().show();
