// iOSで画面スクロールを禁止する
function disableScroll(event) {
    event.preventDefault();
}
// イベントと関数を紐付け
document.addEventListener('touchmove', disableScroll, { passive: false });
// ***************** 投稿内容記入欄 *******************
document.getElementById('submit').addEventListener('click', () => {
    console.log("comment!!!");
    let theText = "";
    const str = document.createElement('input');
    str.id = "str";
    str.type = "text";
    str.name = "str";
    document.getElementById('comment').appendChild(str);
    // 記入欄にフォーカスする
    document.getElementById('str').focus();
    // 投稿ボタン
    const submit_btn = document.createElement('input');
    submit_btn.id = "submit_btn";
    submit_btn.type = "image";
    submit_btn.alt = "send";
    submit_btn.src = "投稿アイコンのパス"
    document.getElementById('comment').appendChild(submit_btn);
    submit_btn.addEventListener('click', (event) => {
        // 入力された文字列
        theText = str.value;
        submit(theText);
        str.remove();
        submit_btn.remove();
    });
    // フォーカスが外れたら画面から消す
    // str.addEventListener('blur', (event) => {
    //     str.remove();
    //     submit_btn.remove();
    // });
});
// **************************************************
