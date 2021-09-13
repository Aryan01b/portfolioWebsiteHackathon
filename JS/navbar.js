var preScrollPos = window.pageYOffset;
window.onscroll=function(){
    var CurrentScrollPos = window.pageYOffset;
    if (preScrollPos>CurrentScrollPos){
        document.getElementById("navbar").style.top="0";        
    } else {
        document.getElementById("navbar").style.top="-70px"
    }
    preScrollPos=CurrentScrollPos;
}