class Common {
    getEvent(e) {
        const ev = e || window.event;
        return ev;
    }
    addEvent(element, type, fn) {
        //判断浏览器是否支持这个方法
        if (element.addEventListener) {
            element.addEventListener(type, fn, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, fn);
        } else {
            element["on" + type] = fn;
        }
    }
    //定义为任意的一个元素解绑对应的事件
    removeEvent(element, type, fnName) {
        //判断浏览器是否支持这个方法
        if (element.removeEventListener) {
            element.removeEventListener(type, fnName);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, fnName);
        } else {
            element["on" + click] = null;
        }
    }
}
export default new Common();