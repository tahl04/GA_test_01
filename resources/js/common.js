$(document).ready(function () {
    $('.btn').click(function () {
        $('.popup').addClass('on');
    });

    $('.aaaa').click(function () {
        $('.popup').removeClass('on');
        // console.log(11);
    });

    $('.hide').click(function () {
        console.log(45);
        gtag('event', 'asd222');
        console.log(gtag);
    });

});



function asd(a){
                            // gtag('event', 'Preregistration' );
                            // console.log("asd"+a);
                            // gtag('event', 'Preregistration' );
                            // console.log("asd"+a+1);
                            // gtag('event', 'Preregistration' );
                            // console.log("asd"+a+2);
                            // gtag('event', 'Preregistration' );
                            // console.log("asd"+a+3);
                            // gtag('event', 'Preregistration_Complete' );
                            gtag('event', 'asd111' );
                            console.log("asd"+a);
                            gtag('event', 'asd222' );
                            console.log("asd"+a+"일번");
                            gtag('event', 'Preregistration' );
                            console.log("asd"+a+"이번");
                        }