// 自定义一个折线轨迹
// 声明一个Polyline对象，不需要调用Map.addOverlay()添加到地图中，创建对象即可。
var path = [{
    'lng': 116.297611,
    'lat': 40.047363
}, {
    'lng': 116.302839,
    'lat': 40.048219
}, {
    'lng': 116.308301,
    'lat': 40.050566
}, {
    'lng': 116.305732,
    'lat': 40.054957
}, {
    'lng': 116.304754,
    'lat': 40.057953
}, {
    'lng': 116.306487,
    'lat': 40.058312
}, {
    'lng': 116.307223,
    'lat': 40.056379
}];
var point = [];
for (var i = 0; i < path.length; i++) {
    point.push(new BMapGL.Point(path[i].lng, path[i].lat));
}
var pl = new BMapGL.Polyline(point);
setTimeout('start()', 3000);


// 创建个轨迹动画对象，并配置参数
// 轨迹动画的构造参数接受3个参数。参数1为当前地图对象；参数2为折线对象；参数3为配置对象，详情可以参考下文的类参考。
function start () {
    trackAni = new BMapGLLib.TrackAnimation(map, pl, {
        overallView: true, // 动画完成后自动调整视野到总览
        tilt: 30,          // 轨迹播放的角度，默认为55
        duration: 20000,   // 动画持续时长，默认为10000，单位ms
        delay: 3000        // 动画开始的延迟，默认0，单位ms
    });
    trackAni.start();
}


// 启动动画
// 为了保证效果，建议地图渲染完成后，再由其他方式触发动画播放。
// trackAni.start();


// 强制停止动画
// 动画播放过程中，可以调用方法停止取消。
// trackAni.cancel();         // 强制停止动画