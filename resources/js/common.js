$(document).ready(function () {
    $('.btn').click(function () {
        $('.popup').addClass('on');
    });

    $('.aaaa').click(function () {
        $('.popup').removeClass('on');
        console.log(11);
    });
});
