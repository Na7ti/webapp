// 投稿数のカウント
i = 0;
// submit関数
function submit(str) {
    
    // 現在位置の取得開始
    navigator.geolocation.getCurrentPosition(function (position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        // コメント回数のインクリメント
        i++;
        
        // htmlタグの作成
        const entity = document.createElement('a-entity');
        const text = document.createElement('a-text');
        const plane = document.createElement('a-plane');
        
        // 外枠のプロパティ設定
        entity.setAttribute("id", "entity" + i);
        entity.setAttribute("hit-box", "");
        
        // 出力されるテキストのプロパティ設定
        text.setAttribute("id", "text");
        text.setAttribute("value", str);
        text.setAttribute("align", "center");
        text.setAttribute("look-at", "[gps-camera]");
        text.setAttribute("scale", "2 1 2");
        text.setAttribute("z-offset", "0.5");
        text.setAttribute("gps-entity-place", "latitude: " + latitude + "; longitude: " + longitude + ";");
        
        // テキスト背景のプロパティ設定
        plane.setAttribute("id", "plane");
        plane.setAttribute("look-at", "[gps-camera]");
        plane.setAttribute("color", "red");
        plane.setAttribute("width", "3");
        plane.setAttribute("height", "1");
        plane.setAttribute("gps-entity-place", "latitude: " + latitude + "; longitude: " + longitude + ";");
        
        // htmlに設置
        document.getElementById('sandbox').appendChild(entity);
        document.getElementById('entity' + i).appendChild(text);
        document.getElementById('entity' + i).appendChild(plane);
    });
    // 入力された文字列
    console.log("「"+str+"」が投稿されました。");
}

// 投稿の削除
AFRAME.registerComponent('hit-box', {
    init: function () {
        // タップを離したときに判定
        this.el.addEventListener('mouseup', () => {
            let echildren = this.el.children;
            // 選択されたエンティティ内の文字
            let str = echildren[0].getAttribute('value')
            // 警告で「はい」を押すと選んだ投稿が消える。
            if (confirm("「" + str + "」この投稿を削除しますか？")) {
                this.el.remove();
                console.log("「" + str + "」が削除されました。");
            };
        });
    }
});