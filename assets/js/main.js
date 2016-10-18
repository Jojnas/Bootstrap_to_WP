/**
 * Created by jano on 10/17/2016.
 */
$(function () {
   // cache window object

    var $window = $(window);
    $('section[data-type="background"]').each(function () {
        var $bgobj = $(this); // assigning object

        $(window).scroll(function () {
            // scroll the background at var speed
            // the yPos is a negative value because we are scrolling it UP

            var yPos = -($window.scrollTop) / $bgobj.data('speed');

            // put together our final background position

            var coords = '50%' + yPos + 'px';

            // move the background

            $bgobj.css({backgroundPosition: coords});


        })
    })
});