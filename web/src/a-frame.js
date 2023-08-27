
// aframeMutlByte関数の定義
function aframeMutlByte() {
    // [mb-text]属性を持つ要素のループ処理
    document.querySelectorAll('[mb-text]:empty').forEach(mb_text => {
        // console.log(mb_text.dataset.text);
        const text = mb_text.dataset.text;
        const text_cnt = text.length;
        const width = text_cnt * 1.4;
        const height = 1.6;

        // canvas要素の作成と設定
        let cvs = document.createElement('canvas');
        let ctx = cvs.getContext('2d');

        cvs.width = width * 100;
        cvs.height = height * 100;
        // 文字の色
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.font = '100pt Arial';
        ctx.fillText(text, 0, 125);
        ctx.strokeText(text, 0, 125);

        // canvasの内容を画像としてエンコード
        const base64 = cvs.toDataURL("image/png");

        // テキスト要素のHTMLを更新して画像を表示
        mb_text.innerHTML = `<a-image position="0 0 0.2" scale="${width / 5} ${height / 5} 2" src="${base64}"material="transparent: false; alphaTest: 0.5;"></a-image>`;

    });
};

function vector(y, distance) {
    // Elementの作成
    const cameraRotation = document.getElementById("camera").getAttribute("rotation");
    const cameraPosition = document.getElementById("camera").getAttribute("position");

    // カメラの方角を取得
    const cameraRotationY = cameraRotation.y;

    // 方角から10メートル先の位置を計算
    const radian = cameraRotationY * (Math.PI / 180); // ラジアンに変換
    const x = Math.sin(radian) * distance;
    const z = Math.cos(radian) * distance;
    const targetPosition = `${x} ${y} ${z}`;

    return targetPosition
}

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
        const plane = document.createElement('a-plane');

        // 外枠のプロパティ設定
        entity.setAttribute("id", "entity" + i);
        entity.setAttribute("class", i);
        entity.setAttribute("hit-box", "");
        entity.setAttribute("mb-text", "");
        entity.setAttribute("data-text", str);
        entity.setAttribute("look-at", "[gps-camera]");
        entity.setAttribute("position", vector(1, -2));

        // htmlに設置
        document.getElementById('sandbox').appendChild(entity);
        // aframeMutlByte関数を呼び出して実行
        aframeMutlByte();

        // テキスト背景のプロパティ設定
        plane.setAttribute("id", "plane");
        plane.setAttribute("look-at", "[gps-camera]");
        plane.setAttribute("color", "red");
        plane.setAttribute("opacity", "1");
        plane.setAttribute("width", str.length / 2 + 1);
        plane.setAttribute("height", "1");
        plane.setAttribute("position", "0 0 -2");

        // htmlに設置
        document.getElementById("entity" + i).appendChild(plane);


        // 入力された文字列
        console.log("ID:" + entity.getAttribute('class') + "「" + str + "」が投稿されました。");

        // 30秒間目の前にオブジェクトを置く
        setTimeout(() => {
            console.log("30秒!");
            // position属性を消す
            entity.removeAttribute("position");
            plane.removeAttribute("position");
            // 現在位置でオブジェクトを固定
            entity.setAttribute("gps-entity-place", "latitude: " + latitude + "; longitude: " + longitude + ";");
            plane.setAttribute("gps-entity-place", "latitude: " + latitude + "; longitude: " + longitude + ";");
        }, 30000);
    });
};

// *** スタンプ3dオブジェクト ***********
j = 0;
function d3obj(stamp) {

    j++;

    // Elementの作成
    const model = document.createElement('a-gltf-model');

    // 属性の付与
    model.setAttribute("id", "model:" + stamp);
    model.setAttribute("class", j);
    model.setAttribute("hit-box", "");
    model.setAttribute("src", "#item:" + stamp);
    model.setAttribute("scale", "5 5 5");
    model.setAttribute("position", vector(-30, -60));

    // HTMLにアペンド
    document.getElementById('models').append(model);
}

// スタンプの削除
AFRAME.registerComponent('hit-box', {
    init: function () {
        // タップを離したときに判定 
        this.el.addEventListener('mouseup', () => {
            let setId = this.el.getAttribute('id');
            console.log(setId);
            if (setId.indexOf("entity") !== -1) {
                // 選択されたエンティティ内の文字
                let str = this.el.getAttribute('data-text');
                // 警告で「はい」を押すと選んだ投稿が消える。
                if (confirm("「" + str + "」この投稿を削除しますか？")) {
                    this.el.remove();
                    console.log("ID:" + this.el.getAttribute('class') + "「" + str + "」が削除されました。");
                };
            } else {
                // 選択されたエンティティ内の文字
                let id = this.el.getAttribute('id');
                // 警告で「はい」を押すと選んだ投稿が消える。
                if (confirm("「" + id + "」このスタンプを削除しますか？")) {
                    this.el.remove();
                    console.log("ID:" + this.el.getAttribute('class') + "「" + id + "」が削除されました。");
                };
            };
        });
    }
});