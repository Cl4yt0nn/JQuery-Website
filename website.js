//JQuery
let j = 0;
let srcArr = ["ww.webp","jp.jpg","hs.webp","lph.jpg","finger.jpeg"];
$(document).ready(function(){
    $("#images").attr("src","Images/" + srcArr[j]);
    $( "#accordion" ).accordion();
    $( document ).tooltip();
    $("#start").datepicker();
    $("#end").datepicker();

    $("#left").click(function(){
        j--;
        if (j == -1) {
            j = 4;
        }
        document.getElementById("left").disabled = true;
        document.getElementById("right").disabled = true;
        setTimeout(enable,800);
        $("#images").fadeOut();
        $("#images").fadeIn();
        setTimeout(cycleImage,400);
    })
    $("#right").click(function(){
        j++;
        if (j == 5) {
            j = 0;
        }
        document.getElementById("left").disabled = true;
        document.getElementById("right").disabled = true;
        setTimeout(enable,800);
        $("#images").fadeOut();
        $("#images").fadeIn();
        setTimeout(cycleImage,400);
    })
})
function cycleImage() {
    $("#images").attr("src","Images/" + srcArr[j]);
}
function enable() {
    document.getElementById("left").disabled = false;
    document.getElementById("right").disabled = false;
}
let selected = 0;
function select(x) {
    if (x != selected) {
        document.getElementsByClassName("navItem")[selected].style.background = "#FFFFFF";
        selected = x;
    }
    document.getElementsByClassName("navItem")[selected].style.background = "#EEEEEE";
    if (selected != 0) {
        document.getElementById("homePage").style.display = "none";
    } else {
        document.getElementById("homePage").style.display = "inline";
    }
    if (selected != 1) {
        document.getElementById("calendarPage").style.display = "none";
    } else {
        document.getElementById("calendarPage").style.display = "inline";
    }
    if (selected != 2) {
        document.getElementById("visitPage").style.display = "none";
    } else {
        document.getElementById("visitPage").style.display = "inline";
    }
    if (selected != 3) {
        document.getElementById("faqPage").style.display = "none";
    } else {
        document.getElementById("faqPage").style.display = "inline";
    }
}
select(0);