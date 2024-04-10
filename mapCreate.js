// GL版命名空间为BMapGL
// 按住鼠标右键，修改倾斜角和角度
var map = new BMapGL.Map("allmap");    // 创建Map实例
// map.centerAndZoom(new BMapGL.Point(115.957605, 39.069355), 17);  // 初始化地图,设置中心点坐标和地图级别
map.centerAndZoom(new BMapGL.Point(116.297611, 40.047363), 17);
map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

var scaleCtrl = new BMapGL.ScaleControl();  // 添加比例尺控件
map.addControl(scaleCtrl);
var zoomCtrl = new BMapGL.ZoomControl();  // 添加缩放控件
map.addControl(zoomCtrl);
// var locationCtrl = new BMapGL.LocationControl();  // 添加定位控件
// map.addControl(locationCtrl);
var cityCtrl = new BMapGL.CityListControl({
    // 控件的停靠位置（可选，默认左上角）
    anchor: BMAP_ANCHOR_TOP_LEFT,
    // 控件基于停靠位置的偏移量（可选）
    offset: new BMapGL.Size(120, 5)
});  // 添加城市列表控件
map.addControl(cityCtrl);