$(function() {
    $btnMenu = $("#js-btn-menu");
    $gnav = $(".gnav");

    $btnMenu.on("click", function() {
        $btnMenu.toggleClass("active");
        $gnav.toggleClass("show");
        $gnav.animate({width: "toggle"}, 200);
    })
});