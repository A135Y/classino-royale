// write your classes:
class Card {
    constructor(suit,val){
        this.suit = suit;
        this.val = val;
        this.faceUp = false;
        this.abbreviaiton = abbreviaiton;
        this.title = title;
        this.colour = colour;
        this.rank = rank;
    }

    flip(){

    }

    show(){

    }

    hide(){

    }

}


class Deck{

    constructor(cards){
        this.cards = cards;
    }

    flip(){

    }

    deal(){

    }

    random(){

    }

    pick(suit,val){

    }

    cut(n){

    }

    riffle(){

    }

    shuffle(){

    }
}

// test your classes with console.log
// to show they work as intended:


// Write two classes: `Card` and `Deck`.

// ### Card

// `Card`'s constructor should have two parameters: `suit` and `val`. Possible values for `suit` are `D`, `H`, `C`, `S` (corresponding to diamonds, hearts, clubs and spades). Possible values for `val` are `A`, `2`, ..., `10`, `J`, `Q`, `K` (the first is ace; the latter three are jack, queen and king). We assume there are no jokers.

// **Properties**

//  - `suit` | *string* | The suit of the card
//  - `val` | *string* | The value of the card
//  - `faceUp` | *boolean* | Whether the card is currently facing up (default `false`)

// **Getters**

//  - `abbreviation` | *string* | E.g. `'7H'` or `KC`
//  - `title` | *string* | E.g. `'7 of Hearts'` of `'King of Clubs'`
//  - `colour` | *string* | either `'red'` or `'black'`
//  - `rank` | *number* | The numerical rank of the card. E.g. `'7H'` has rank `7` and `QD` has rank `12`

// **methods**

//  - `flip()` | Flips the card over (toggles `faceUp`)
//  - `show()` | Sets the card facing up
//  - `hide()` | Sets the card facing down

// ### Deck

// **Properties**

//  - `cards` | *array* | An array of 52 distinct cards. `cards[0]` is the top card; `cards[51]` is the bottom card.

// **Methods**

//  - `flip()` | Turns the deck over. Imagine thie in your mind: the order of the cards and `faceUp` property of each card should update accordingly (the bottom card becomes the top card, etc).
//  - `deal()` | Removes the **top** card from the deck and returns it.
//  - `random()` | Removes a random card from the deck and returns it.
//  - `pick(suit, val)` | Removes the card of given suit and val from the deck and returns it. 
//  - `cut(n)` | Splits the deck into two stacks of length `n` and `52 - n` and places the bottom stack on top.
//  - `riffle()` | Splits the deck into two stacks of equal height and interleaves them (https://www.youtube.com/watch?v=JmbVNyIiD54). Assume that the bottom card in the top stack is the first to fall. If the number of cards left in the deck is odd, the top stack should contain one extra card.
//  - `shuffle()` | Randomises the order of the cards.

// ## Extension

// Use private properties and methods to make all attributes and getters return the string `'?'` if the card is not facing up.
