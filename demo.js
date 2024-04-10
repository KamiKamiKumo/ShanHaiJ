	//以下是在百度map上抄的一个demo，用来借鉴格式

	//定义一个控件类
	function ZoomControl() {
		this.defaultAnchor = BMAP_ANCHOR_TOP_RIGHT;
		this.defaultOffset = new BMapGL.Size(10, 5)
	}
	//通过JavaScript的prototype属性继承于BMap.Control
	ZoomControl.prototype = new BMapGL.Control();

	//自定义控件必须实现自己的initialize方法，并且将控件的DOM元素返回
	//在本方法中创建个div元素作为控件的容器，并将其添加到地图容器中
	ZoomControl.prototype.initialize = function (map) {
		//创建一个dom元素
		var div = document.createElement('div');
		//添加文字说明
		div.appendChild(document.createTextNode('放大2级'));
		// 设置样式
		div.style.cursor = "pointer";
		div.style.padding = "7px 10px";
		div.style.boxShadow = "0 2px 6px 0 rgba(27, 142, 236, 0.5)";
		div.style.borderRadius = "5px";
		div.style.backgroundColor = "white";
		// 绑定事件,点击一次放大两级
		div.onclick = function (e) {
			map.setZoom(map.getZoom() + 2);
		}
		// 添加DOM元素到地图中
		map.getContainer().appendChild(div);
		// 将DOM元素返回
		return div;
	}
	//创建控件元素
	var myZoomCtrl = new ZoomControl();
	//添加到地图中
	map.addControl(myZoomCtrl);