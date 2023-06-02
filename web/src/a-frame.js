function submit(str) {
    console.log("submit!!!");
    console.log(str);
    navigator.geolocation.getCurrentPosition(function (position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        // 計算した目的地の座標を使用して処理を行う
        const text = document.createElement('a-text');
        text.setAttribute("value", str);
        text.setAttribute("look-at", "[gps-camera]");
        text.setAttribute("scale", "2 1 2");
        text.setAttribute("position", "0 1 0");
        text.setAttribute("gps-entity-place", "latitude: " + latitude + "; longitude: " + longitude + ";");
        document.querySelector('a-scene').appendChild(text);
        const plane = document.createElement('a-box');
        plane.setAttribute("color", "red");
        plane.setAttribute("scale", "2 1 2");
        plane.setAttribute("gps-entity-place", "latitude: " + latitude + "; longitude: " + longitude + ";");
        document.querySelector('a-scene').appendChild(plane);
    });
}
