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
    if (5000 <= scrollNow && scrollNow <= 5760) {

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
    if (5700 <= scrollNow && scrollNow <= 6141) {

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

// 海報

$('.poster-yellow-box').click(function () {

    $('.poster-yellow-top').css('opacity', '1')
})

$('.poster-red-box').click(function () {

    $('.poster-red-top').css('opacity', '1')
})
$('.poster-blue-box').click(function () {

    $('.poster-blue-top').css('opacity', '1')
})



// 籤詩
let aaa = 0
$('.box1-1').click(function () {
    aaa++;

    if ((aaa % 2) == 0) {
        $(this).css('transform', 'rotateY(0deg)').css("background-image", "url(./XD/1x/card-1.png)");
    } else {
        $(this).css('transform', 'rotateY(180deg)').css("background-image", "url(./XD/1x/card-1-1.png)");


    }
})

let bbb = 0
$('.box1-2').click(function () {
    bbb++;

    if ((bbb % 2) == 0) {
        $(this).css('transform', 'rotateY(0deg)').css("background-image", "url(./XD/1x/card-1.png)");
    } else {
        $(this).css('transform', 'rotateY(180deg)').css("background-image", "url(./XD/1x/card-1-2.png)");


    }
})

let ccc = 0
$('.box2-1').click(function () {
    ccc++;

    if ((ccc % 2) == 0) {
        $(this).css('transform', 'rotateY(0deg)').css("background-image", "url(./XD/1x/card-2.png)");
    } else {
        $(this).css('transform', 'rotateY(180deg)').css("background-image", "url(./XD/1x/card-2-1.png)");


    }
})

let ddd = 0
$('.box2-2').click(function () {
    ddd++;

    if ((ddd % 2) == 0) {
        $(this).css('transform', 'rotateY(0deg)').css("background-image", "url(./XD/1x/card-2.png)");
    } else {
        $(this).css('transform', 'rotateY(180deg)').css("background-image", "url(./XD/1x/card-2-2.png)");


    }
})


let eee = 0
$('.box3-1').click(function () {
    eee++;

    if ((eee % 2) == 0) {
        $(this).css('transform', 'rotateY(0deg)').css("background-image", "url(./XD/1x/card-3.png)");
    } else {
        $(this).css('transform', 'rotateY(180deg)').css("background-image", "url(./XD/1x/card-3-1.png)");


    }
})

let fff = 0
$('.box3-2').click(function () {
    fff++;

    if ((fff % 2) == 0) {
        $(this).css('transform', 'rotateY(0deg)').css("background-image", "url(./XD/1x/card-3.png)");
    } else {
        $(this).css('transform', 'rotateY(180deg)').css("background-image", "url(./XD/1x/card-3-2.png)");


    }
})