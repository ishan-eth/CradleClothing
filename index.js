$(document).ready(function() {
    $(".categories > li").click(function() {
        $(".categories > li").removeClass("active");
        $(this).addClass("active");
        
        const category = $(this).text().trim().toLowerCase().replace(' ', '-');

        $(".product-section").fadeOut(300);
        setTimeout(() => {
            $(`#${category}-items`).fadeIn(300);
        }, 300);
    });

    $(".obj-img, .black").hover(
        function () {
            $(this).addClass('glow-effect');
        },
        function () {
            $(this).removeClass('glow-effect');
        }
    );

    $(".categories li:first-child").addClass('active');
    $("#compression-items").show();
});

$("#about-us").click(function() {
    window.location.href = "about-us.html";
})

$("#shop").click(function() {
    $('html,body').animate({
        scrollTop: $(".product-section").offset().top},
        'slow');
});

$(".black, .obj-img").click(function() {
    window.location.href = "coming-soon.html";
})