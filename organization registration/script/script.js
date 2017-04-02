// volunteer registration form validation
function validateName(name){
		var re = /^[A-z ]+$/;	// 15:04
		return re.test(name);
	}

	function validateEmail(email){
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}


  //<!-- Custom Theme JavaScript -->

  // Closes the sidebar menu
  $("#menu-close").click(function(e) {
      e.preventDefault();
      $("#sidebar-wrapper").toggleClass("active");
  });
  // Opens the sidebar menu
  $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#sidebar-wrapper").toggleClass("active");
  });

  // Scrolls to the selected menu item on the page
  $(function(){$('a[href*=#]:not([href=#],[data-toggle],[data-target],[data-slide])').click(function() {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname)
          {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              if (target.length) {
                  $('html,body').animate({
                      scrollTop: target.offset().top
                  }, 1000);
                  return false;
              }
          }
      });
  });

  //#to-top button appears after scrolling
  var fixed = false;
  $(document).scroll(function() {
      if ($(this).scrollTop() > 250) {
          if (!fixed) {
              fixed = true;
              // $('#to-top').css({position:'fixed', display:'block'});
              $('#to-top').show("slow", function() {
                  $('#to-top').css({
                      position: 'fixed',
                      display: 'block'
                  });
              });
          }
      } else {
          if (fixed) {
              fixed = false;
              $('#to-top').hide("slow", function() {
                  $('#to-top').css({
                      display: 'none'
                  });
              });
          }
      }
  });


$("#vr_start_button").click(function(){
  $(".vr_manual_reg").show();
});

/*
$(document).ready(function(){
  $().
});
*/
