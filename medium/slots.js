// write your classes:
class Machine {

    constructor(costToPlay,smallPayout,bigPayout){
        this.costToPlay = costToPlay;
        this.smallPayout = smallPayout;
        this.bigPayout = bigPayout;
    }

    spin(){
        let alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M',
                 'N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
let result = [];
while(result.length < 3){
    result.push(alpha[Math.floor(Math.random()* alpha.length)])
}
    console.log(result)
    if(result[0] == result[1] && result[0] == result[2]) return this.bigPayout;
    
    if(result[0] == result[1] || result[0] == result[2] || 
       result[1] == result[2]) return this.smallPayout; 
    if(result[0] !== result[1] && result[0] !== result[2] && result[1] !== result[2]) return 0;

}

}


class Player {
    
    constructor(name, balance){
        this.name = name;
        this.balance = balance;
    }


    play(machine){
        if(this.balance < machine.costToPlay) console.log("You're Too Broke To Gamble");
        this.balance -= machine.costToPlay;
        if(machine.spin() == machine.smallPayout){
            this.balance += machine.smallPayout;
            return this;
        } else if(machine.spin() == machine.bigPayout){
            this.balance += machine.bigPayout;
            return this;
        }
        else{
            return this;
        }
    }
}


// test your classes with console.log
// to show they work as intended:


// ## Medium: Slot machine

// Write two classes: `Player` and `Machine`.

// ### Machine

// `Machine` should have properties of `costToPlay`, `smallPayout`, and `bigPayout`. It should have a method called `spin()` which logs to the console a string of length 3 made from random, uppercase alphabet characters (e.g. `'ABC'`). If the letters are all distinct, `spin()` returns `0`; if exactly two are the same, it returns `smallPayout`; if all three are the same, it returns `bigPayout`.

// ### Player

// `Player` should have properties of `name` and `balance`, representing how much money the player has left. It should have a method of `play(machine)` where `machine` is an instance of `Machine`. When the method is called, the player should lose the `cost` of the machine and gain the (possibly `0`) payout. If the player's balance is less than the cost to play, log a message to the console and do nothing. 

// ```js
// const machine = new Machine(2, 10, 100)
// machine.spin() // e.g. 'PPK' => 10

// const player = new Player('Muggins', 30)

// player.play(machine) // 'ABC' => player.balance === 28
// player.play(machine) // 'XYX' => player.balance === 36
// player.play(machine) // 'QQQ' => player.balance === 134
// ```
