import 'es6-promise/auto'

import { createBitmapByName } from './utils';
import LoadingUI from './ui/LoadingUI';

class Main extends egret.DisplayObjectContainer {
    
    public constructor() {
        super();
        this.once(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init() {
        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }
        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        this.runGame().catch(e => {
            console.log(e);
        });
    }

    private async runGame() {
        await this.loadResource();
        this.createGameScene();
    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.addChild(loadingView);
            await RES.loadConfig('assets/res.json', 'assets/');
            await RES.loadGroup('preload', 0, loadingView);
            this.removeChild(loadingView);
        } catch(e) {
            console.error(e);
        }
    }

    private createGameScene() {
        const stageW = this.stage.stageWidth;
        const stageH = this.stage.stageHeight;

        const bg = createBitmapByName('bg');
        bg.width = stageW;
        bg.height = stageH;
        this.addChild(bg);

        const btn = new egret.Sprite();
        
        const btnBg =  createBitmapByName('btn');
        btn.addChild(btnBg);

        const btnTxt = new egret.TextField();
        btnTxt.text = 'Tap play hit sound';
        btnTxt.size = 40;
        btnTxt.textColor = 0xff0000;
        btn.addChild(btnTxt);

        btnBg.width = btnTxt.width + 40;
        btnBg.height = btnTxt.height + 20;
        btnTxt.x = 20;
        btnTxt.y = 10;

        btn.x = stageW / 2 - btn.width / 2;
        btn.y = 60;
        btn.alpha = 0;
        this.addChild(btn);

        this.startAnimation(btn);

        bg.touchEnabled = true;
        bg.once(egret.TouchEvent.TOUCH_TAP, () => {
            const sound: egret.Sound = RES.getRes('bg_sound');
            const soundChannel: egret.SoundChannel = sound.play();
            soundChannel.volume = .3;
        }, this);

        btn.touchEnabled = true;
        const hitSound: egret.Sound = RES.getRes('hit_sound');
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            hitSound.play(0, 1);
        }, this);
    }

    private startAnimation(btn: egret.Sprite) {
        const tw = egret.Tween.get(btn, {loop:true});
        tw.to({'alpha': 1}, 1000);
        tw.wait(3000);
        tw.to({'alpha': 0}, 1000);
    }

}

(window as any).Main = Main;