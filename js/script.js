$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.main-page__header-nav-list,.main-page__header-nav-bottom-container').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
