var nav = document.getElementsByClassName('con')[0];
var about_hover = document.getElementsByClassName('about_hover')[0];
function topnest(){
    if(window.scrollY  == 0){
        nav.style.transform = "translateY(0px)";
        about_hover.style.transform = "translateY(0px)";
    }else{
        nav.style.transform  = "translateY(-50px)";
        about_hover.style.transform = "translateY(-8px)";

    }
}





function love(class_name){
    var heart =  document.getElementsByClassName(class_name)[0];
    if(window.getComputedStyle(heart).color == "rgb(255, 195, 26)"){
        heart.style.color = "#6c6a6a";
    }else{
        heart.style.color = "#FFC31A";
    }



}