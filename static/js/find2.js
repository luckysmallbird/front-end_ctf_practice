window.onload = function(){
    var rd = Math.floor(Math.random()*1200)+1;
    for(let i=0;i<=100;i++){
        let ptlist = '<tr>';
        for(let j=0;j<=16;j++){
            if(rd==i*17+j)
                ptlist +='<th><input type="submit" value="Click me" onclick=alert(secerturl)></th>';
            else
                ptlist += '<th><input type="submit" value="Click me" onclick=confirm("unlucky")></th>';
        }
        ptlist+='</tr>'
        $("table").append(ptlist);
    }
    $("p").css('text-align','center');
    $("p").css('font-size','60');
}