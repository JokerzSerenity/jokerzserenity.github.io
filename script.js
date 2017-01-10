$("#homeButton").click(function() {
    $('html,body').animate({
        scrollTop: $(".home").offset().top},
        'slow');
});

$("#eventsButton").click(function() {
    $('html,body').animate({
        scrollTop: $(".events").offset().top},
        'slow');
});

$("#joinButton").click(function() {
    $('html,body').animate({
        scrollTop: $(".join").offset().top},
        'slow');
});

$("#contactButton").click(function() {
    $('html,body').animate({
        scrollTop: $(".contact").offset().top},
        'slow');
});