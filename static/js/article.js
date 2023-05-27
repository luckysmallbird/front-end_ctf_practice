window.onload = function ()
{
    var geturl = new URL(location.href);
    var input=geturl.searchParams.get('input') , article=document.getElementById('copytext');
    if(input!=undefined && input!=''){
        $(".copytext").each(function(){
            $(this).show();
        });
        input = geturl.searchParams.get('input');
        var ptlist=`上次去花店被一種花吸引了我的注意<br>賣花老闆說<br>那是紅色鬱金香，代表熱烈的愛<br>`+
                    `我沒買<br>因為再好的鬱金香<br>也沒有${input}的浴巾香`;
        document.getElementById('c1').innerHTML = (ptlist);
        ptlist=`今天搭電梯 電梯只能乘11人<br>當時電梯裡面有10個人<br>我在電梯門口遲疑了一下還是走進去<br>進去後電梯響起超載報警<br>我心中裝著${input}這件事果然還是無法瞞過電梯`;
        document.getElementById('c2').innerHTML = (ptlist);
        ptlist=`自從有了${input}，我和朋友們玩剪刀石頭布都只會出剪刀了，因為${input}就是我的拳布`
        document.getElementById('c3').innerHTML = (ptlist);
    }
    else{
        $(".copytext").each(function(){
            $(this).hide();
        });
    }
}