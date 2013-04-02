$(document).ready(function() {
	$('#campus_tours_list').hide();
	$('#campus_tours_button').click(function(){
		$('#campus_tours_button_section').hide();
		$('#campus_tours_list').show();
	});
	
  function filterPath(string) {
  return string
    .replace(/^\//,'')
    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
    .replace(/\/$/,'');
  }
  var locationPath = filterPath(location.pathname);
  var scrollElem = scrollableElement('html', 'body');
  $('a[href*=#top]').each(function() {
    var thisPath = filterPath(this.pathname) || locationPath;
    if (  locationPath == thisPath
    && (location.hostname == this.hostname || !this.hostname)
    && this.hash.replace(/#/,'') ) {
      var $target = $(this.hash), target = this.hash;
      if (target) {
        var targetOffset = $target.offset().top;
        $(this).click(function(event) {
          event.preventDefault();
          $(scrollElem).animate({scrollTop: targetOffset}, 400, function() {
            location.hash = target;
          });
        });
      }
    }
  });
  // use the first element that is "scrollable"
  function scrollableElement(els) {
    for (var i = 0, argLength = arguments.length; i <argLength; i++) {
      var el = arguments[i],
          $scrollElement = $(el);
      if ($scrollElement.scrollTop()> 0) {
        return el;
      } else {
        $scrollElement.scrollTop(1);
        var isScrollable = $scrollElement.scrollTop()> 0;
        $scrollElement.scrollTop(0);
        if (isScrollable) {
          return el;
        }
      }
    }
    return [];
  }
});

$(document).ready(function(){ $(".drawer").click(function(){ $(".info").slideToggle("fast"); $(this).toggleClass("active"); return false; }); });


$(document).ready(function($) {
       $('#accordion dd').hide();
       $('#accordion dt a').click(function(){
          if ($(this).hasClass('selected')) {
               $(this).removeClass('selected');
               $(this).parent().next().slideUp();
          } else {
               $('#accordion dt a').removeClass('selected');
               $(this).addClass('selected');
               $('#accordion dd').slideUp();
               $(this).parent().next().slideDown();
          }
          return false;
       });
});