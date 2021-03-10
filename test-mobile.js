let scrollLast = 0
$(window).scroll(function () {

    console.log('scoll top', $(this).scrollTop());
    let scrollNow = $(this).scrollTop();
    // 選單列
    //等300以下才開始用跑elseㄝ
    if (scrollNow <= 200) {
        $('.navbar').removeClass('hide_nav');
    }
    else {

        if (scrollLast < scrollNow) {
            // 往下
            // console.log('往下');
            $('.navbar').addClass('hide_nav');
        }
        else {
            // 往上
            // console.log('往上');
            $('.navbar').removeClass('hide_nav');
        }
    }

    //圖片放大-介紹
    if (208 <= scrollNow && scrollNow <= 520) {

        if (scrollLast < scrollNow) {
            // 往下
            console.log('往下+=20');
            $('.introduction-img').find('img').css('width', '+=10')
            $('.introduction-img-font').css('bottom', '+=8')
        }
        else {
            // 往上
            console.log('往上-=20');
            $('.introduction-img').find('img').css('width', '-=6')
            $('.introduction-img-font').css('bottom', '-=8')
        }
    }
    else {

    }


    //圖片放大-歷史
    if (688 <= scrollNow && scrollNow <= 993) {

        if (scrollLast < scrollNow) {
            // 往下
            console.log('往下+=20');
            $('.history-img').find('img').css('width', '+=10')
            $('.history-img-font').css('bottom', '+=8')
        }
        else {
            // 往上
            console.log('往上-=20');
            $('.history-img').find('img').css('width', '-=6')
            $('.history-img-font').css('bottom', '-=8')
        }

    }

    // // 會跑的字
    if (1429 <= scrollNow && scrollNow <= 2411) {

        if (scrollLast < scrollNow) {
            // 往下

            $('.font-Carousel').css('left', '-=10')
        }
        else {
            // 往上

            $('.font-Carousel').css('left', '+=10')
        }

    }

    //圖片放大-石頭
    if (1578 <= scrollNow && scrollNow <= 1935) {

        if (scrollLast < scrollNow) {
            // 往下
            console.log('往下+=20');
            $('.stone-img').find('img').css('width', '+=10')
            $('.stone-img-font').css('bottom', '+=8')
        }
        else {
            // 往上
            console.log('往上-=20');
            $('.stone-img').find('img').css('width', '-=6')
            $('.stone-img-font').css('bottom', '-=8')
        }

    }


    // //圖片放大-木頭
    if (2031 <= scrollNow && scrollNow <= 2470) {

        if (scrollLast < scrollNow) {
            // 往下
            console.log('往下+=20');
            $('.wood-img').find('img').css('width', '+=10')
            $('.wood-img-font').css('bottom', '+=8')
        }
        else {
            // 往上
            console.log('往上-=20');
            $('.wood-img').find('img').css('width', '-=6')
            $('.wood-img-font').css('bottom', '-=8')
        }

    }


    // //圖片放大-封面
    if (5000 <= scrollNow && scrollNow <= 5481) {

        if (scrollLast < scrollNow) {
            // 往下
            console.log('往下+=20');
            $('.cover-img').find('img').css('width', '+=10')
            $('.cover-img-font').css('bottom', '+=8')
        }
        else {
            // 往上
            console.log('往上-=20');
            $('.cover-img').find('img').css('width', '-=6')
            $('.cover-img-font').css('bottom', '-=8')
        }

    }

    // //圖片放大-內頁
    if (5700 <= scrollNow && scrollNow <= 6041) {

        if (scrollLast < scrollNow) {
            // 往下
            console.log('往下+=20');
            $('.content-img').find('img').css('width', '+=10')
            $('.content-img-font').css('bottom', '+=8')
        }
        else {
            // 往上
            console.log('往上-=20');
            $('.content-img').find('img').css('width', '-=6')
            $('.content-img-font').css('bottom', '-=8')
        }

    }

    // //圖片放大-材質
    if (6433 <= scrollNow && scrollNow <= 6801) {

        if (scrollLast < scrollNow) {
            // 往下
            console.log('往下+=20');
            $('.material-img').find('img').css('width', '+=10')
            $('.material-img-font').css('bottom', '+=8')
        }
        else {
            // 往上
            console.log('往上-=20');
            $('.material-img').find('img').css('width', '-=6')
            $('.material-img-font').css('bottom', '-=8')
        }

    }
    scrollLast = scrollNow;

})

// dm點下去出現

$('.Direct-Mail-dragon-box').click(function () {

    $('.Direct-Mail-dragon-box').css('visibility', 'hidden')
    $('.Direct-Mail-big-yellow').css('visibility', 'visible')


})

$('.Direct-Mail-big-yellow').click(function () {

    $('.Direct-Mail-dragon-box').css('visibility', 'visible')
    $('.Direct-Mail-big-yellow').css('visibility', 'hidden')



})

$('.Direct-Mail-lion-box').click(function () {

    $('.Direct-Mail-lion-box').css('visibility', 'hidden')
    $('.Direct-Mail-big-red').css('visibility', 'visible')


})

$('.Direct-Mail-big-red').click(function () {

    $('.Direct-Mail-lion-box').css('visibility', 'visible')
    $('.Direct-Mail-big-red').css('visibility', 'hidden')



})


$('.Direct-Mail-bird-box').click(function () {

    $('.Direct-Mail-bird-box').css('visibility', 'hidden')
    $('.Direct-Mail-big-blue').css('visibility', 'visible')


})

$('.Direct-Mail-big-blue').click(function () {

    $('.Direct-Mail-bird-box').css('visibility', 'visible')
    $('.Direct-Mail-big-blue').css('visibility', 'hidden')



})