//root of html = document
alert('test');
const canvas = document.querySelector( selectors: 'canvas' );
const context = canvas.getContext('2d');
const img = document.querySelector(selectors: 'img');
const width = 360;
const height = 640;

//context.fillStyle = 'black';
//context.fillRect( x: 100, y: 100, w: 100, h: 100);

const d = {
    x:0
    y:0
    w:360
    h:640
};

const s = {
    x:0
    y:0
    w:360
    h:640
};

class Background {
    x = 0;
    y = 0;
    w = 0;
    h = 0;
    constructor(x,y,w,h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    draw() {
        context.drawImage(img, d.x, d.y, d.w, d.h, s.x, s.y, s.w, s.h);
    }
}

const bg= new Background(x: 0, y: 0, w:360, h:640);
bg.draw();

