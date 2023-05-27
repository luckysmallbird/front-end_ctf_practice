window.onload = function()
{
    var geturl = new URL(location.href);
    var input = geturl.searchParams.get('image');
    if(input != undefined && input != '' )
    {
        let param = window.location.search;
        if(param.indexOf('alert')!=-1){
            alert("forbid your alert!!!");
            return ;
        }
        if(param.indexOf('prompt')!=-1){
            alert("forbid your alert!!!");
            return ;
        }
        if(param.indexOf('confirm')!=-1){
            alert("forbid your confirm!!!");
            return ;
        }
        if(param.indexOf('console')!=-1){
            alert("forbid your console!!!");
            return ;
        }
        var b = document.body , addr = "./../static/images/"+input.toString()+".gif";
        b.innerHTML = "<img src="+addr+">";
    }
}