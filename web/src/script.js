// iOSで画面スクロールを禁止する
function disableScroll(event) {
    event.preventDefault();
}
// イベントと関数を紐付け
document.addEventListener('touchmove', disableScroll, { passive: false });

// ***************** 投稿内容記入欄 *******************
var clicked = false;
document.getElementById('submit').addEventListener('click', () => {     // submitのclickイベント
    let theText = "";               // 文字列入力

    // submitが押されている状態なら再出現
    if (clicked) {
        str.remove();
        submit_btn.remove();
        clear_btn.remove();
    }
    clicked = true;

    // Element
    const str = document.createElement('input');            // 入力欄
    const submit_btn = document.createElement('input');     // 投稿ボタン
    const clear_btn = document.createElement('input');      // クリアボタン

    // status config
    // 入力欄
    str.id = "str";
    str.type = "text";
    str.name = "str";
    // 入力補完機能:off
    str.autocomplete = "off";

    // 投稿ボタン
    submit_btn.id = "submit_btn";
    submit_btn.type = "image";
    submit_btn.alt = "send";
    submit_btn.src = "images/send.svg";

    // クリアボタン
    clear_btn.id = "clear_btn";
    clear_btn.type = "image";
    clear_btn.alt = "clear";
    clear_btn.src = "images/close.svg";

    // commentにstrを追加
    document.getElementById('comment').appendChild(str);
    // commentにsubmit_btnの追加
    document.getElementById('comment').appendChild(submit_btn);
    // commentにclear_btnの追加
    document.getElementById('comment').appendChild(clear_btn);
    // 記入欄にフォーカスする
    document.getElementById('str').focus();

    // submit_btnのクリックイベント
    submit_btn.addEventListener('click', (event) => {
        if (str.value === "") {
            alert("内容を入力してください")
        } else {
            // 入力された文字列
            theText = str.value;
            submit(theText);
            str.remove();
            submit_btn.remove();
            clear_btn.remove();
            clicked = false;
        }
    });

    // クリアボタンのクリックイベント
    clear_btn.addEventListener('click', (event) => {
        str.remove();
        submit_btn.remove();
        clear_btn.remove();
        clicked = false;
    });

    // 投稿削除
    // a-textボタンのクリックイベント
    document.getElementById('home').addEventListener('click', () => {
        plane.remove()
        text.remove()
    })
});
// **************************************************
