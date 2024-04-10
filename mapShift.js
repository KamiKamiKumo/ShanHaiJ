// 地图类型切换，用按钮点击事件控制normal地图和卫星地图，初始为normal地图
function MapShift() {
    this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT
    this.defaultOffset = new BMapGL.Size(10, 5)
}
MapShift.prototype = new BMapGL.Control()
MapShift.prototype.initialize = function (map) {
    var btn = document.createElement('button')
    let num = 0
    btn.appendChild(document.createTextNode('切换地图图层'))
    btn.style.cursor = "pointer";
    btn.style.padding = "7px 10px";
    btn.style.boxShadow = "0 2px 6px 0 rgba(27, 142, 236, 0.5)";
    btn.style.borderRadius = "5px";
    btn.style.backgroundColor = "white";
    btn.onclick = function (e) {
        num += 1
        if (num % 2 === 0) {
            map.setMapType(BMAP_NORMAL_MAP);
        }
        else {
            map.setMapType(BMAP_SATELLITE_MAP);
        }
    }
    map.getContainer().appendChild(btn)
    return btn
}
var myMapShift = new MapShift()
map.addControl(myMapShift)