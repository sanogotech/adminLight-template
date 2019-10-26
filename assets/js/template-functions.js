$('#menu-toggle').click(function(e) {
    e.preventDefault();
    $('#wrapper').toggleClass('toggled');
});

$('#menu-toggle').click(function() {
    if ($('#open-close').hasClass("fa-long-arrow-left")) {
        $('#open-close').removeClass('fa-long-arrow-left');
        $('#open-close').addClass('fa-long-arrow-right');
    } else {
        $('#open-close').removeClass('fa-long-arrow-right');
        $('#open-close').addClass('fa-long-arrow-left');
    }
});