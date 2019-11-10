function Ship(startingPort, newPort) {
    this.startingPort = startingPort;
    this.newPort = newPort;

Ship.prototype.setSail = function(portName) {
    this.newPort = portName;
}
}


module.exports = Ship;
