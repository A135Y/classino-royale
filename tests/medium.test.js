const {Machine,Player} = require ('../medium/slots')

test('Players balance should change acording to the outcome of the game', () => {
const machine = new Machine(2,10,100);
const player = new Player('Muggins', 30)
player.play(machine)
expect(player.balance).toBe(28)
})
