function include(scriptUrl) {
    document.write('<script src="' + scriptUrl + '"></script>');
}

function isIE() {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
};


/* Stick up menus
 ========================================================*/
;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop')) {
        include('js/sc-tmstickup.js');

        $(document).ready(function () {
            $('#stuck_container').TMStickUp({})
        });
    }
})(jQuery);


/* SMOOTH SCROLLIG
 ========================================================*/
;
//(function ($) {
   // var o = $('html');
    //if (o.hasClass('desktop')) {
        //include('js/sc-mousewheel.js');
        //include('js/sc-simplr.smoothscroll.js');

        //$(document).ready(function () {
            //$.srSmoothscroll({
                //step: 150,
                //speed: 800
            //});
        //});
    //}
//})(jQuery);


















