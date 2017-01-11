$("#homeButton").click(function() {
    $('html,body').animate({
        scrollTop: $(".home").offset().top},
        1500);
});

$("#eventsButton").click(function() {
    $('html,body').animate({
        scrollTop: $(".events").offset().top},
        1500);
});

$("#joinButton").click(function() {
    $('html,body').animate({
        scrollTop: $(".join").offset().top},
        1500);
});

$("#contactButton").click(function() {
    $('html,body').animate({
        scrollTop: $(".contact").offset().top},
        1500);
});