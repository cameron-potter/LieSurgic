window.requestAnimFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
        window.setTimeout(callback, 1000 / 60);
};

function character () {
    this.lndgFr = 20;
    this.iv = 40;
    this.onSurface = false;
    this.state();
    this.animation();
    
}

character.prototype.state = function () {
    this.onSurface && this.iv == 0 ? this.state =  'running' : null;
    this.iv > 0 ? this.state = 'jumping' : null;
    this.iv < 0 ? this.state = 'falling' : null;
    // fromSurface <= this.lndgFr && iv <= 0 ? this.state = 'landing' : null;
    // return 'who';
}


character.prototype.animation = function () {
    switch(this.state) {
        case 'running':
            this.animation = 'running';
        break;

        case 'jumping':
            this.animation = 'like a fox';
        break;

        case 'falling':
            this.animation = 'falling';
        break;

        case 'landing':
            this.animation = 'landing';
        break;

        default:

        break
    }
}

cameron = new character();

console.log(cameron.animation);

window.onload = function () {

    start();
};

function start() {

    character = new character();
    update();
}

function update() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    cloth.update();
    cloth.draw();

    requestAnimFrame(update);
}

// this.iv || iv . needs to decrease each 60fps. 