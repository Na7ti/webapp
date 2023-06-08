function submit(str) {
    console.log("submit!!!");
    console.log(str);

    navigator.geolocation.getCurrentPosition(function (position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        // htmlタグの作成
        const text = document.createElement('a-text');
        const plane = document.createElement('a-box');

        // 計算した目的地の座標を使用して処理を行う
        text.setAttribute("id", "text")
        text.setAttribute("value", str);
        text.setAttribute("look-at", "[gps-camera]");
        text.setAttribute("scale", "2 1 2");
        // text.setAttribute("position", "0 1 0");

        plane.setAttribute("id", "plane")
        plane.setAttribute("color", "red");
        plane.setAttribute("opacity", "0.3");
        plane.setAttribute("scale", "2 1 2");

        text.setAttribute("gps-entity-place", "latitude: " + latitude + "; longitude: " + longitude + ";");
        plane.setAttribute("gps-entity-place", "latitude: " + latitude + "; longitude: " + longitude + ";");

        document.getElementById('hit-box').appendChild(text);
        document.getElementById('hit-box').appendChild(plane);
    });
}
