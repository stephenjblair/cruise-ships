const Ship = require("../src/Ship.js");

describe('ship', () => {
    it('can be instantiated', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
    it('has a starting port', () => {
        const ship = new Ship('Dover');
        expect(ship.startingPort).toBe('Dover');
    });
    it('can set sail to another port', () => {
        const ship = new Ship('Dover');
        
        ship.setSail('Calais');

        expect(ship.newPort).toBe('Calais');
    });
}); 
