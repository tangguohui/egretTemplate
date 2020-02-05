// SceneManager.root = this;
// SceneManager.changeScene(newScene);

export default class SceneManager {
    private static lastScene: egret.DisplayObjectContainer;
    private static _root: egret.DisplayObjectContainer;

    public static set root(root: egret.DisplayObjectContainer) {
        SceneManager._root = root;
    }

    public static changeScene(scene: egret.DisplayObjectContainer) {
        if (SceneManager._root) {
            if (SceneManager.lastScene) {
                SceneManager._root.removeChild(SceneManager.lastScene);
            }
            SceneManager._root.addChild(scene);
            SceneManager.lastScene = scene;
        }
    }
}