window.onload = function(){
    var rd = Math.floor(Math.random()*1200)+1;
    for(let i=0;i<=100;i++){
        for(let j=0;j<=16;j++){
            if(rd==i*17+j)
                $("body").append('<input type="submit" value="Click me" onclick=alert(secerturl)>');
            else
                $("body").append('<input type="submit" value="Click me" onclick=confirm("unlucky")>');
        }
        $("body").append('<br>');
    }
    $("p").css('text-align','center');
    $("p").css('font-size','60');
}