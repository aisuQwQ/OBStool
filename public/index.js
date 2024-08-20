/// <reference lib="dom"/>
const clock = document.querySelector("#clock");

globalThis.setInterval(() => {
    const date = new Date();
    const s = date.toTimeString().split(" ")[0];
    clock.innerHTML = s;
}, 1000);

//0-144
//0-1080

class ICON {
    ZoneX = 144;
    ZoneY = 1080;
    constructor(id, x = 0, y = 0) {
        this.id = id;
        this.dom = document.querySelector(id);
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = 100;
        this.task();
    }
    task() {
        globalThis.setInterval(() => {
            this.x = (this.x + 0.2) % ((this.ZoneX - this.width) * 2);
            let x = this.x;
            if (x > this.ZoneX - this.width) {
                x = this.ZoneX - this.width - (x - (this.ZoneX - this.width));
            }
            this.y = (this.y + 1) % ((this.ZoneY - this.height) * 2);
            let y = this.y;
            if (y > this.ZoneY - this.height) {
                y = this.ZoneY - this.height - (y - (this.ZoneY - this.height));
            }
            this.dom.style.left = `${x}px`;
            this.dom.style.top = `${y}px`;
        }, 20);
    }
}

new ICON("#huohuo");
new ICON("#yunli", 44, 1620);
