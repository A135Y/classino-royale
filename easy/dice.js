// write your classes:


class Die{
    constructor(sides){
        if(!this.sides == 'number') throw new Error('sides must be greater than 3 and less than 21')
        if(this.sides < 4 || this.sides > 20){
            throw new Error('sides must be greater than 3 and less than 21') 
        }
        this.sides = sides
    }

    roll(){
    return Math.floor(Math.random()*this.sides)
    }
}

const newDie =new Die(16)
console.log(newDie.roll());


class Cup {
    
    constructor(dice){
        for(let i = 0; i < this.dice.length; i++){
            this.sides = this.dice[i]
        }
        this.dice = dice
     }
     
     spill(){
         for(let i = 0; i < this.dice.length; i++){
             this.dice[i] = Math.floor(Math.random()*this.dice[i]+1)
         }
       return this.dice
     }
}


// test your classes with console.log
// to show they work as intended:



// ## Easy: Dice

// Write two classes: `Die` and `Cup`. (Die is the singular form of the word dice.)

// ### Die

// The constructor of `Die` accepts an integer `sides` where `4 <= sides <= 20`. `Die` should have a `sides` property and a method `roll()` which returns a random integer `n` where `1 <= n <= sides`.

// ```js
// const die = new Die(6)

// die.sides // => 6

// die.roll() // => random int from 1, 2, 3, 4, 5, 6
// ```

// If the number of sides is invalid, throw an error:
// ```js
// throw new Error('sides must be greater than 3 and less than 21')
// ```

// ### Cup

// A cup contains several dice which can all be rolled at the same time. Each cup object should have one property and one method:

//  - `dice` | *array* | An array of `dice` objects representing dice contained in the cup.
//  - `spill()` | returns an array where the `i`th entry is a random integer representing the rolled value of the `i`th die.
 
// The constructor of `Cup` accepts an array of integers corresponding to the number of sides of each die in the cup.

// For example,
// ```js
// const cup = new Cup([4, 6, 10])

// cup.spill() // => e.g. [4, 1, 7] or [1, 6, 9], etc.

// cup.dice[2].sides // => 10

// cup.dice[0].roll() // => random int from 1, 2, 3, 4