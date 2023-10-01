$(".submenu").hide();
$(".gnb li").mouseenter(function(){
    $(".submenu").stop().slideDown(300)
});
$(".header").mouseleave(function(){
    $(".submenu").stop().slideUp(300)
});
$(window).scroll(function(){
    if($(this).scrollTop() > 100){
        $('.header').addClass('header_scroll')
    }else{
        $('.header').removeClass('header_scroll')
    }
})
$("#board li a").click(function(){
    $(this).parent().addClass("on").siblings().removeClass("on")
});

$(function(){
    var $selectEmail = $('#select_domain'),
        $tagetInput = $('#email_domain');

        $selectEmail.change(function(){
            var domain = $(this).val();
            console.log(domain);
            $tagetInput.val(domain);
        })
})
