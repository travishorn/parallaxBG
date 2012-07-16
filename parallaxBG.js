window.onscroll = function() {
  var top  = (document.documentElement.scrollTop  || document.body.scrollTop)  * -0.5,
      left = (document.documentElement.scrollLeft || document.body.scrollLeft) * -0.5;
	
	document.body.style.backgroundPosition = left + 'px ' + top + 'px';
};