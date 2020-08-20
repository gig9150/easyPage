$(document).ready(function(){
    $("#container").addClass("start");
	$("nav li").click(function(){
        $("#container").css("max-width","100%");
        var id = $(this).attr("data-rol");
        $("nav li").removeClass("on");
        $(this).addClass("on");
        //클릭시 가지고 있던 메소드 모두 지우기
        $(".content").removeClass("prev this next");
        //클릭한 메뉴와 매칭되는 id에 this클래스를 지정하고 그 앞의 모든 <section>태그는 prev클래스를 지정한다
        $("#"+id).addClass("this").prevAll().addClass("prev");
        //뒤에오는 모든 <section>태그는 next클래스를 지정한다.
        $("#"+id).nextAll().addClass("next");
    });
    $(".logo_box").click(function(){
        $("nav li").removeClass("on");
        $(".content").removeClass("prev this next");
        $("#container").css("max-width","1200px");
    });

});

