/**
 * [checkBrowser 浏览器类型检测]
 * @return {[Object]} [返回一个对象,包含浏览器信息]
 */
function checkBrowser(){
	// Opera 8.0+
	var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

	// Firefox 1.0+
	var isFirefox = typeof InstallTrigger !== 'undefined';

	// Safari 3.0+ "[object HTMLElementConstructor]" 
	var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

	// Internet Explorer 6-11
	// var isIE = /*@cc_on!@*/false || !!document.documentMode;
	var myNav = navigator.userAgent.toLowerCase();
  	var isIE = (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;

	// Edge 20+
	var isEdge = !isIE && !!window.StyleMedia;

	// Chrome 1+
	var isChrome = !!window.chrome && !!window.chrome.webstore;

	// Blink engine detection
	var isBlink = (isChrome || isOpera) && !!window.CSS;

	return {
		isOpera,
		isFirefox,
		isSafari,
		isIE,
		isEdge,
		isChrome,
		isBlink
	}
}