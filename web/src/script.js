function submit() {
    console.log("submit!!!")
    navigator.geolocation.getCurrentPosition(function (position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        // 計算した目的地の座標を使用して処理を行う
        const ele = document.createElement('a-box');
        ele.setAttribute("material", "color: red")
        ele.setAttribute("scale", "2 1 2");
        ele.setAttribute("gps-entity-place", "latitude: " + latitude + "; longitude: " + longitude + ";");
        document.querySelector('a-scene').appendChild(ele);
    });
}
