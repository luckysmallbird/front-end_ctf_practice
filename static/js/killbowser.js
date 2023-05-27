var flag=0;
function attack(){
    if(flag==1)
        return;
    var hp = document.getElementById('hp');
    var img = document.getElementById('img');
    var newhp = parseInt(hp.innerHTML);
    if(newhp>0)
        newhp -=1 , hp.innerHTML = newhp;;
    if(newhp==0){
        img.src="./../static/images/bowser_cry.gif" , flag=1;
        var sf = document.getElementById('showflag');
        sf.innerHTML = flag1;
    }
}