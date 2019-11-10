const Port = require("../src/Port.js");
const Ship = require("../src/Ship.js");

describe('port', () => {
    it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });
    it('the port has a name', () => {
        const port = new Port('Calais');

        expect(port.name).toBe('Calais');
    });
}); 