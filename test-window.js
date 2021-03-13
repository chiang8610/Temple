let scrollLast = 0

$(window).scroll(function () {




    console.log('scoll top', $(this).scrollTop());
    let scrollNow = $(this).scrollTop();
    // 選單列
    //等300以下才開始用跑elseㄝ
    if (scrollNow <= 300) {
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
    if (650 <= scrollNow && scrollNow <= 1600) {

        if (scrollLast < scrollNow) {
            // 往下
            console.log('往下+=20');
            $('.introduction-img').find('img').css('width', '+=20')
            $('.introduction-img-font').css('bottom', '+=15')
        }
        else {
            // 往上
            console.log('往上-=20');
            $('.introduction-img').find('img').css('width', '-=10')
            $('.introduction-img-font').css('bottom', '-=15')
        }
    }
    else {

    }


    //圖片放大-歷史
    if (2000 <= scrollNow && scrollNow <= 2600) {

        if (scrollLast < scrollNow) {
            // 往下
            console.log('往下+=20');
            $('.history-img').find('img').css('width', '+=20')
            $('.history-img-font').css('bottom', '+=15')
        }
        else {
            // 往上
            console.log('往上-=20');
            $('.history-img').find('img').css('width', '-=10')
            $('.history-img-font').css('bottom', '-=15')
        }

    }

    // 會跑的字
    if (3100 <= scrollNow && scrollNow <= 4300) {

        if (scrollLast < scrollNow) {
            // 往下

            $('.font-Carousel').css('left', '-=20')
        }
        else {
            // 往上

            $('.font-Carousel').css('left', '+=20')
        }

    }

    //圖片放大-石頭
    if (3527 <= scrollNow && scrollNow <= 4427) {

        if (scrollLast < scrollNow) {
            // 往下
            console.log('往下+=20');
            $('.stone-img').find('img').css('width', '+=20')
            $('.stone-img-font').css('bottom', '+=15')
        }
        else {
            // 往上
            console.log('往上-=20');
            $('.stone-img').find('img').css('width', '-=10')
            $('.stone-img-font').css('bottom', '-=15')
        }

    }


    //圖片放大-木頭
    if (4627 <= scrollNow && scrollNow <= 5627) {

        if (scrollLast < scrollNow) {
            // 往下
            console.log('往下+=20');
            $('.wood-img').find('img').css('width', '+=20')
            $('.wood-img-font').css('bottom', '+=15')
        }
        else {
            // 往上
            console.log('往上-=20');
            $('.wood-img').find('img').css('width', '-=10')
            $('.wood-img-font').css('bottom', '-=15')
        }

    }


    //圖片放大-封面
    if (8127 <= scrollNow && scrollNow <= 9227) {

        if (scrollLast < scrollNow) {
            // 往下
            console.log('往下+=20');
            $('.cover-img').find('img').css('width', '+=20')
            $('.cover-img-font').css('bottom', '+=15')
        }
        else {
            // 往上
            console.log('往上-=20');
            $('.cover-img').find('img').css('width', '-=10')
            $('.cover-img-font').css('bottom', '-=15')
        }

    }

    //圖片放大-內頁
    if (9700 <= scrollNow && scrollNow <= 10427) {

        if (scrollLast < scrollNow) {
            // 往下
            console.log('往下+=20');
            $('.content-img').find('img').css('width', '+=20')
            $('.content-img-font').css('bottom', '+=15')
        }
        else {
            // 往上
            console.log('往上-=20');
            $('.content-img').find('img').css('width', '-=10')
            $('.content-img-font').css('bottom', '-=15')
        }

    }

    //圖片放大-材質
    if (12027 <= scrollNow && scrollNow <= 13027) {

        if (scrollLast < scrollNow) {
            // 往下
            console.log('往下+=20');
            $('.material-img').find('img').css('width', '+=20')
            $('.material-img-font').css('bottom', '+=15')
        }
        else {
            // 往上
            console.log('往上-=20');
            $('.material-img').find('img').css('width', '-=10')
            $('.material-img-font').css('bottom', '-=15')
        }

    }



    // 龍
    if (7374 <= scrollNow && scrollNow <= 7600) {
        if (scrollLast < scrollNow) {
            // 往下
            // 龍
            $('.dragon-box').css('width', '110px').css('height', '110px').css('transition', '2s').css('border-radius', '50%').css('top', '1100px').css('opacity', '0').css('left', '250px');

            $('.color-yellow').css('transition', '6s').css('opacity', '1')

            // 獅子
            $('.lion-box').css('width', '110px').css('height', '110px').css('transition', '2s').css('border-radius', '50%').css('top', '1100px').css('opacity', '0').css('left', '900px');

            $('.color-red').css('transition', '6s').css('opacity', '1')

            // 鳥
            $('.bird-box').css('width', '110px').css('height', '110px').css('transition', '2s').css('border-radius', '50%').css('top', '1100px').css('opacity', '0').css('right', '250px');

            $('.color-blue').css('transition', '6s').css('opacity', '1')
        }
        else {
            // 龍
            $('.dragon-box').css('width', '400px').css('height', '768px').css('transition', '2s').css('border-radius', '50%').css('top', '0').css('opacity', '1').css('left', '10%');

            $('.color-yellow').css('transition', '3s').css('opacity', '0')


            // 獅子
            $('.lion-box').css('width', '550px').css('height', '768px').css('transition', '2s').css('border-radius', '50%').css('top', '100px').css('opacity', '1').css('left', '37%');

            $('.color-red').css('transition', '3s').css('opacity', '0')


            // 鳥
            $('.bird-box').css('width', '400px').css('height', '768px').css('transition', '2s').css('border-radius', '50%').css('top', '0').css('opacity', '1').css('right', '10%');

            $('.color-blue').css('transition', '3s').css('opacity', '0')

        }


    }
    scrollLast = scrollNow;
})


// dm華過去變大

$('.Direct-Mail-dragon-box').mouseenter(function () {

    $(this).css('width', '320px')

})
$('.Direct-Mail-dragon-box').mouseleave(function () {

    $(this).css('width', '300px')

})


$('.Direct-Mail-lion-box').mouseenter(function () {

    $(this).css('width', '320px')

})
$('.Direct-Mail-lion-box').mouseleave(function () {

    $(this).css('width', '300px')

})


$('.Direct-Mail-bird-box').mouseenter(function () {

    $(this).css('width', '320px')

})
$('.Direct-Mail-bird-box').mouseleave(function () {

    $(this).css('width', '300px')

})




// dm點下去出現

$('.Direct-Mail-dragon-box').click(function () {

    $('.Direct-Mail').css('visibility', 'hidden')
    $('.Direct-Mail-big-yellow').css('visibility', 'visible')
    $('.back-box').css('visibility', 'visible')

})

$('.back-fount').click(function () {

    $('.Direct-Mail').css('visibility', 'visible')
    $('.Direct-Mail-big-yellow').css('visibility', 'hidden')
    $('.back-box').css('visibility', 'hidden')

})

$('.Direct-Mail-lion-box').click(function () {

    $('.Direct-Mail').css('visibility', 'hidden')
    $('.Direct-Mail-big-red').css('visibility', 'visible')
    $('.back-box').css('visibility', 'visible')

})

$('.back-fount').click(function () {

    $('.Direct-Mail').css('visibility', 'visible')
    $('.Direct-Mail-big-red').css('visibility', 'hidden')
    $('.back-box').css('visibility', 'hidden')

})

$('.Direct-Mail-bird-box').click(function () {

    $('.Direct-Mail').css('visibility', 'hidden')
    $('.Direct-Mail-big-blue').css('visibility', 'visible')
    $('.back-box').css('visibility', 'visible')

})

$('.back-fount').click(function () {

    $('.Direct-Mail').css('visibility', 'visible')
    $('.Direct-Mail-big-blue').css('visibility', 'hidden')
    $('.back-box').css('visibility', 'hidden')

})



// 海報華過去變大

$('.poster-yellow-box').mouseenter(function () {

    $(this).css('width', '460px')

})
$('.poster-yellow-box').mouseleave(function () {

    $(this).css('width', '450px')

})


$('.poster-red-box').mouseenter(function () {

    $(this).css('width', '460px')

})
$('.poster-red-box').mouseleave(function () {

    $(this).css('width', '450px')

})


$('.poster-blue-box').mouseenter(function () {

    $(this).css('width', '460px')

})
$('.poster-blue-box').mouseleave(function () {

    $(this).css('width', '450px')

})


// 完整海報顯示
$('.poster-yellow-box').click(function () {

    $('.poster-yellow-top').css('opacity', '1')
})

$('.poster-red-box').click(function () {

    $('.poster-red-top').css('opacity', '1')
})
$('.poster-blue-box').click(function () {

    $('.poster-blue-top').css('opacity', '1')
})


// 詩籤
let aaa = 0
$('.box1-1').click(function () {
    aaa++;

    if ((aaa % 2) == 0) {
        $(this).css('transform', 'rotateY(0deg)').css("background-image", "url(./XD/1x/card-1.png)").css('background-repeat', 'no-repeat');
    } else {
        $(this).css('transform', 'rotateY(180deg)').css("background-image", "url(./XD/1x/card-1-1.png)").css('background-repeat', 'no-repeat');


    }
})

let bbb = 0
$('.box1-2').click(function () {
    bbb++;

    if ((bbb % 2) == 0) {
        $(this).css('transform', 'rotateY(0deg)').css("background-image", "url(./XD/1x/card-1.png)").css('background-repeat', 'no-repeat');
    } else {
        $(this).css('transform', 'rotateY(180deg)').css("background-image", "url(./XD/1x/card-1-2.png)").css('background-repeat', 'no-repeat');;


    }
})

let ccc = 0
$('.box2-1').click(function () {
    ccc++;

    if ((ccc % 2) == 0) {
        $(this).css('transform', 'rotateY(0deg)').css("background-image", "url(./XD/1x/card-2.png)").css('background-repeat', 'no-repeat');
    } else {
        $(this).css('transform', 'rotateY(180deg)').css("background-image", "url(./XD/1x/card-2-1.png)").css('background-repeat', 'no-repeat');;


    }
})

let ddd = 0
$('.box2-2').click(function () {
    ddd++;

    if ((ddd % 2) == 0) {
        $(this).css('transform', 'rotateY(0deg)').css("background-image", "url(./XD/1x/card-2.png)").css('background-repeat', 'no-repeat');
    } else {
        $(this).css('transform', 'rotateY(180deg)').css("background-image", "url(./XD/1x/card-2-2.png)").css('background-repeat', 'no-repeat');;


    }
})


let eee = 0
$('.box3-1').click(function () {
    eee++;

    if ((eee % 2) == 0) {
        $(this).css('transform', 'rotateY(0deg)').css("background-image", "url(./XD/1x/card-3.png)").css('background-repeat', 'no-repeat');
    } else {
        $(this).css('transform', 'rotateY(180deg)').css("background-image", "url(./XD/1x/card-3-1.png)").css('background-repeat', 'no-repeat');;

    }
})

let fff = 0
$('.box3-2').click(function () {
    fff++;

    if ((fff % 2) == 0) {
        $(this).css('transform', 'rotateY(0deg)').css("background-image", "url(./XD/1x/card-3.png)").css('background-repeat', 'no-repeat');
    } else {
        $(this).css('transform', 'rotateY(180deg)').css("background-image", "url(./XD/1x/card-3-2.png)").css('background-repeat', 'no-repeat');


    }
})


