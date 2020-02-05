export default class LoadingUI extends egret.Sprite implements RES.PromiseTaskReporter {

    public constructor() {
        super();
        this.once(egret.Event.ADDED_TO_STAGE, this.createView, this);
    }

    private textField: egret.TextField;

    private createView() {
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = this.stage.stageHeight / 2;
        this.textField.width = this.stage.stageWidth;
        this.textField.textAlign = 'center';
    }

    public onProgress(current: number, total: number) {
        this.textField.text = `Loading...${current}/${total}`;
    }
}