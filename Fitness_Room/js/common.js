$(document).ready(
    function(){
        $("#aboutUs").mouseover(function(){
            $("#about").show();
        });
        $("#aboutUs").mouseout(function(){
            $("#about").hide();
        });
        $("#news").mouseover(function(){
            $("#new").show();
        });
        $("#news").mouseout(function(){
            $("#new").hide();
        });
        $(document).scroll(function(){
            if (document.documentElement.scrollTop >= 700){
                // $("#go-top").css("display", "block")
                $("#go-top").fadeIn(500);
            }else{
                // $("#go-top").css("display", "none")
                $("#go-top").fadeOut(200);
            }
        });
        $("#go-top").click(function(){
            var y = $(document).scrollTop();
            console.log(y);
            var handle = setInterval(function(){
                if(y<=0){
                    clearInterval(handle);
                }
                y = y - 80;
                $(document).scrollTop(y);
            }, 5)
        })
    }
)