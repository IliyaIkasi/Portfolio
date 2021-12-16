
// $(document).ready(function () {
//     $(window).scroll(function () {
//         var scroll = $(window).scrollTop();
//         if (scroll > 50) {
//             $(".scrolled").css("background", "blue");
//         }

//         else {
//             $(".scrolled").css("background", "#333");
//         }
//     })
// })


$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > $(window).height()) {
            $("scrolled");
        }
        else {
            $(".scrolled");
        }

    })
})
