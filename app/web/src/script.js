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
    submit_btn.addEventListener('click', () => {
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
    clear_btn.addEventListener('click', () => {
        str.remove();
        submit_btn.remove();
        clear_btn.remove();
        clicked = false;
    });
});

// *************** スタンプ画面 *****************

// ボタン要素の取得
const stamp = document.getElementById('stamp');

// コンテンツ要素の取得
const win = document.getElementById('window');

// ボタンのクリックイベントリスナーの追加
stamp.addEventListener('click', function () {
    // コンテンツの表示状態を切り替える
    if (win.style.display === 'none') {
        win.style.display = 'block';  // 表示する
    } else {
        win.style.display = 'none';   // 非表示にする
    }
});

var li = document.querySelectorAll('.stamp_li');
for (var i = 0; i < li.length; i++) {
    li[i].addEventListener('click', function () {
        // thisはli[i]にあたる
        console.log("stamp:" + this.id);
        d3obj(this.id);
    });
};

// *************** サイドメニュー *********************

$(function () {
    $(".btn-gnavi").on("click", function () {
        var rightVal = 0;
        if ($(this).hasClass("open")) {
            rightVal = -300;
            $(this).removeClass("open");
        } else {
            $(this).addClass("open");
        }

        $("#global-navi").stop().animate({
            right: rightVal
        }, 500);
    });

    $(".debug").on("click", function () {
        const pre = document.createElement('pre');
        pre.id = "position_view";
        const el = document.getElementById('position_view')
        if ($(this).hasClass("true")) {
            clear();
            el.remove();
            $(this).removeClass("true");
        } else {
            $(this).addClass("true");
            document.querySelector('body').appendChild(pre);
            sleep(0.5, test());
        }
    });
});

//スタンプ画面の非表示

// document.querySelectorAll('a-scene').addEventListener('click', () => {
//     console.log('閉じる')
//     const btn = document.getElementById('btn-gnavi');
//     if (win.style === 'block') {
//         win.style.display = 'none'
//         rightVal = -300;
//         btn.removeClass('open');

//     }
//     // document.getElementById('global-navi').stop().animate({
//     //     right: rightVal
//     // }, 500);
// });
