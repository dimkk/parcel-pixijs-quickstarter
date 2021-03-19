// https://github.com/kittykatattack/learningPixi

import * as PIXI from 'pixi.js';
import {frame} from '../assets/loader'


export class GameApp {

    private app: PIXI.Application;

    constructor(parent: HTMLElement, width: number, height: number) {

        this.app = new PIXI.Application({width, height, backgroundColor : 0x000000});
        parent.replaceChild(this.app.view, parent.lastElementChild); // Hack for parcel HMR

        console.log(frame)
        this.app.loader
            .add(frame.snake)
            .load(() => {
                let sprite = new PIXI.Sprite(this.app.loader.resources[frame.snake].texture)
                this.app.stage.addChild(sprite)
            })

    }


}
