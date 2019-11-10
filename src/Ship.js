function Ship(currentPort) {
    this.currentPort = currentPort;

Ship.prototype.setSail = function() {
    this.currentPort = false;
}

Ship.prototype.dock = function(newPort) {
    this.currentPort = newPort;
}
}


module.exports = Ship;


