  html = document.getElementsByTagName('html')[0];
  body = document.getElementsByTagName('body')[0];

  window.onscroll = function() {
    if (body.scrollTop == 0) { var top = Math.round(html.scrollTop * -0.5); }
    else { var top =  Math.round(body.scrollTop * -0.5); }
    
    if (body.scrollLeft == 0) { var left = Math.round(html.scrollLeft * -0.5); }
    else { var left = Math.round(body.scrollLeft * -0.5); }

    body.style.backgroundPosition = left + "px " + top + "px";
  };
