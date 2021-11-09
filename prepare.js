$(document).ready(function () {
    //判斷滾輪是否到頂//
    $(window).on('scroll', function() {
        if ($(window).scrollTop() <= $('.name').offset().top) {
            $('.nav li').css('background-color','white')
            $('.nav li:eq(0)').css('background-color','rgba(157,195,230')
        }
    })
    //讓圓點隨著滾輪移動變色//
    $(window).scroll(function(){
        if($(window).scrollTop()>=$('.name').offset().top && $(window).scrollTop()<$('.section1').offset().top){
            $('.nav li').css('background-color','white')//除了被點擊到的游標，其他都恢復成原來的顏色
            $('.nav li:eq(1)').css('background-color','rgba(157,195,230')
        }
        else if($(window).scrollTop()>=$('.section1').offset().top && $(window).scrollTop()<$('.section2').offset().top){
            $('.nav li').css('background-color','white')
            $('.nav li:eq(1)').css('background-color','rgba(157,195,230')
        }
    })
    //判斷滾輪是否到底//
    /*$(window).on('scroll', function() {
        if ($(window).scrollTop() >= $('.section5').offset().top + $('.section5').outerHeight() - window.innerHeight) {
            $('.nav li').css('background-color','white')
            $('.nav li:eq(5)').css('background-color','rgba(157,195,230')
            $('.goto_top').fadeOut()
            $('.goto_top').fadeIn()
        }
    })*/
    //控制前兩張的頁面圓點//
    $(".nav li:eq(0)").click(function(){
        $("html,body").animate({"scrollTop":"0px"})
        $(".nav li:eq(0)").css("background-color","rgba(157,195,230)")
        $(".nav li:eq(1)").css("background-color","white")
    })
    $(".nav li:eq(1)").click(function(){
        $(".nav li:eq(0)").css("background-color","white")
        $("html,body").animate({"scrollTop":"730px"})
        $(".nav li:eq(1)").css("background-color","rgba(157,195,230)")
        $(".nav li:eq(2)").css("background-color","white")
    })

    //控制剩下的頁面圓點//
    var num_li=$("li").length
    for(i=2;i<=num_li;i++){
        $("html,body").stop()
        $(".nav li:eq("+i+")").click({id:i},function(e){
            $(".nav li").css("background-color","white")
            page=e.data.id
            $("html,body").animate({"scrollTop":$(".section"+page).offset().top})
            $(".nav li:eq("+e.data.id+")").css("background-color","rgba(157,195,230)")
        })
    }
})
