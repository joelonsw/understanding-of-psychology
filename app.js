const wall = document.getElementById("jsWall");
const picture1 = document.getElementById("jsPicture1");
const picture2 = document.getElementById("jsPicture2");
const picture3 = document.getElementById("jsPicture3");
const description1 = document.getElementById("jsDescription1");
const description2 = document.getElementById("jsDescription2");
const description3 = document.getElementById("jsDescription3");
const singlePicture = document.getElementById("jsSinglePicture");
const singlePictureBackBtn = document.getElementById("jsSinglePictureBackBtn");
const pictureFrame = document.getElementById("jsSinglePictureFrame");

import { Muller } from './muller.js';
import { Ponzo } from './ponzo.js';
import { Ehrenstein } from './ehrenstein.js';

class App {
    constructor() {
        this.writeDescription();
        picture1.addEventListener("click", this.clickPicture1.bind(this));
        picture2.addEventListener("click", this.clickPicture2.bind(this));
        picture3.addEventListener("click", this.clickPicture3.bind(this));
        singlePictureBackBtn.addEventListener("click", this.clickBack);

        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        pictureFrame.appendChild(this.canvas);
        this.muller = new Muller (description1.innerHTML, this.canvas, this.ctx);
        this.ponzo = new Ponzo (description2.innerHTML, this.canvas, this.ctx);
        this.ehrenstein = new Ehrenstein (description3.innerHTML, this.canvas, this.ctx);
    }

    writeDescription() {
        description1.innerHTML = "<br> Müller-Lyer Illusion <br> <strong> 1889 </strong>";
        description2.innerHTML = "<br> Ponzo Illusion <br> <strong> 1911 </strong>";
        description3.innerHTML = "<br> Ehrenstein Illusion <br> <strong> 1841 </strong>";
    }

    /** Muller 그리기 */
    clickPicture1() {
        wall.style.display = "none";
        singlePicture.style.display = "flex";
        this.ponzo.stop();
        this.ehrenstein.stop();
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.beginPath();
        this.muller.writeDescription();
        this.muller.animate();
    }

    /** Ponzo 그리기 */
    clickPicture2() {
        wall.style.display = "none";
        singlePicture.style.display = "flex";
        this.muller.stop();
        this.ehrenstein.stop();
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.beginPath();
        this.ponzo.writeDescription();
        this.ponzo.animate();
    }

    /** Ehrenstein 그리기 */
    clickPicture3() {
        wall.style.display = "none";
        singlePicture.style.display = "flex";
        this.muller.stop();
        this.ponzo.stop();
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.beginPath();
        this.ehrenstein.writeDescription();
        this.ehrenstein.animate();
    }

    clickBack() {
        wall.style.display = "flex";
        singlePicture.style.display = "none";
    }
}

window.onload = () => {
    new App();
}