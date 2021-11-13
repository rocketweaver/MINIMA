var worksBg = document.getElementsByClassName('works-item');

for(var i=0; i< worksBg.length; i++){
    worksBg[i].style.backgroundImage = "url(img/works"+[i+1]+".png)";
}

AOS.init({
    duration: 1000
});