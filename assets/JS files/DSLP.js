//===========common============================================================
$("#prabod>pre,#wasala>pre,#heshan>pre").css("display","none");
//===========login page============================================================
//===========page one============================================================
let text = ["JAVA DEVELOPER","FREELANCER","UI DESIGNER","APP DEVELOPER"];
var count = 0;
let animate1;
let animate2;
let animate3;
let animate4;

animate1=setInterval(animateText1, 150);
function animateText1() {
    $('#textRider').text(text[0].substr(0, count));
    count++;
    if (count == text[0].length) {
        $('#textRider').text(text[0])
        count = 0;
        clearInterval(animate1);
        animate2=setInterval(animateText2, 150);
    }
}
function animateText2() {
    $('#textRider').text(text[1].substr(0, count));
    count++;
    if (count == text[1].length) {
        $('#textRider').text(text[1])
        count = 0;
        clearInterval(animate2);
        animate3=setInterval(animateText3, 150);
    }
}
function animateText3() {
    $('#textRider').text(text[2].substr(0, count));
    count++;
    if (count == text[2].length) {
        $('#textRider').text(text[2])
        count = 0;
        clearInterval(animate3);
        animate4=setInterval(animateText4, 150);
    }
}
function animateText4() {
    $('#textRider').text(text[3].substr(0, count));
    count++;
    if (count == text[3].length) {
        $('#textRider').text(text[3])
        count = 0;
        clearInterval(animate4);
        animate1=setInterval(animateText1, 150);
    }
}


//===========page two============================================================
//===========page three============================================================
//===========page four============================================================
$("#skillList>div>div").mouseover(function() {
    $(this).css("border-bottom-color","#E74C3C");
    $(this).find(" > img").css("top","20%");
    $(this).find(" > pre").css("top","60%");
    $(this).find(" > pre").css("color","#E74C3C");
}).mouseout(function() {
    $(this).css("border-bottom-color","transparent");
    $(this).find(" > img").css("top","25%");
    $(this).find(" > pre").css("top","64%");
    $(this).find(" > pre").css("color","white");
});

//===========page five============================================================

$("#prabod,#wasala,#heshan").mouseover(function() {
    $(this).css("background-color","#E74C3C");
    $(this).css("cursor","pointer");
    $(this).find(" > img").css("border-color","white");
    $(this).find(" > pre").css("display","block");
    $(this).find(" > h3").css("top","70%");
    $(this).find(" > pre").css("top","66%");

}).mouseout(function() {
    $(this).css("background-color","#242C54");
    $(this).find(" > img").css("border-color","#E74C3C");
    $(this).find(" > pre").css("display","none");
    $(this).find(" > h3").css("top","72%");
    $(this).find(" > pre").css("top","68%");
});

//===========page six============================================================
$("#graphic,#ui_ux,#web,#seo,#softwareDev,#app").mouseover(function() {
    $(this).css("background-color","#E74C3C");
    $(this).css("cursor","pointer");
    $(this).find(" > pre").css("color","white");
    $(this).find(" > pre").css("top","67%");
    $(this).find(" > pre").css("font-size","32px");

}).mouseout(function() {
    $(this).css("background-color","#161B36");
    $(this).find(" > pre").css("color","#E74C3C");
    $(this).find(" > pre").css("top","65%");
    $(this).find(" > pre").css("font-size","30px");
});
//===========page seven============================================================

