 jQuery(document).ready(function($) {

    $(".scroll a, .navbar-brand, .gototop,.explore").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 600,'swing');
    $(".scroll li").removeClass('active');
    $(this).parents('li').toggleClass('active');
    });
    });






var wow = new WOW(
  {
    boxClass:     'wowload',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true        // act on asynchronously loaded content (default is true)
  }
);
wow.init();




$('.carousel').swipe( {
     swipeLeft: function() {
         $(this).carousel('next');
     },
     swipeRight: function() {
         $(this).carousel('prev');
     },
     allowPageScroll: 'vertical'
 });

 var modal = document.getElementById('myModal');

 // Get the button that opens the modal
 var btn = document.getElementById("myBtn");

 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close0")[0];
 var span2 = document.getElementsByClassName("close1")[0];
 var span3 = document.getElementsByClassName("close2")[0];


 // When the user clicks the button, open the modal
 btn.onclick = function() {
    modal.style.display = "block";
 }

 // When the user clicks on <span> (x), close the modal
 span.onclick = function() {
    modal.style.display = "none";
 }

 // When the user clicks anywhere outside of the modal, close it

 //portfolio

 var modall = document.getElementById('myModall');

 // Get the button that opens the modall
 var btn = document.getElementById("myBtnn");

 // Get the <span> element that closes the modall

 // When the user clicks the button, open the modall
 btn.onclick = function() {
    modall.style.display = "block";
 }

 // When the user clicks on <span> (x), close the modall

 span2.onclick = function() {
    modall.style.display = "none";
 }

 // When the user clicks anywhere outside of the modall, close it


 //skills
 var modalll = document.getElementById('myModalll');

 // Get the button that opens the modal
 var btnnn = document.getElementById("myBtnnn");

 // Get the <span> element that closes the modal
 // var span = document.getElementsByClassName("close")[0];

 // When the user clicks the button, open the modal
 btnnn.onclick = function() {
    modalll.style.display = "block";
 }

 // When the user clicks on <span> (x), close the modal
 span3.onclick = function() {
    modalll.style.display = "none";
 }

 // When the user clicks anywhere outside of the modal, close it


 window.onclick = function(event) {
    if (event.target == modalll || event.target == modal || event.target == modall) {
        modalll.style.display = "none";
        modall.style.display = "none";
        modal.style.display = "none";
    }
 }
