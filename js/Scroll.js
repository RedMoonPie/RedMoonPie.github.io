var target = $(".Main_Logo");
var targetHeight = 600;
var i = 1;
var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
/*
$(document).scroll(function(e){
    
    console.log(window.scrollY)
    console.log(scrollPercent)
    if(scrollPercent >= 0){
        scrollPercent = (targetHeight - window.scrollY) / targetHeight;
        target.css('opacity', scrollPercent);
    }
    else {
        i = i+1 
        scrollPercent = 1;
        console.log(`Menor ${scrollPercent}`)
        targetHeight = targetHeight * i
    }
});
*/