//BACK-TO-TOP
$('body').prepend('<a href="#" class="back-to-top"></a>');

var amountScrolled = 300;

$(window).scroll(function() {
    if ( $(window).scrollTop() > amountScrolled ) {
        $('a.back-to-top').fadeIn('slow');
    } else {
        $('a.back-to-top').fadeOut('slow');
    }
});

$('a.back-to-top').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 700);
    return false;
});



//DISABLE RIGHT CLICK
window.oncontextmenu = function () {
    alert("Right click disabled!");
    return false;
}

//SET COOKIES ON VOTE

function voteOn(id){
    var nm = "";
    if (id == 11001){
        nm = $('#candone').text();
    }
    else if (id == 11002) {
        nm = $('#candtwo').text();
    }
    else if (id == 11003) {
        nm = $('#candthree').text();
    }
    else if (id == 11004) {
        nm = $('#candfour').text();
    }
    else if (id == 11005) {
        nm = $('#candfive').text();
    }
    else if (id == 11006) {
        nm = $('#candsix').text();
    }
    else if (id == 11007) {
        nm = $('#candseven').text();
    }
    else if (id == 11008) {
        nm = $('#candeight').text();
    }
    else if (id == 11009) {
        nm = $('#candnine').text();
    }
    else if (id == 11010) {
        nm = $('#candten').text();
    }
    else if (id == 11011) {
        nm = $('#candeleven').text();
    }
    else if (id == 11012) {
        nm = $('#candtwelve').text();
    }
    else if (id == 11013) {
        nm = $('#candthirteen').text();
    }
    else if (id == 11014) {
        nm = $('#candfourteen').text();
    }
    else if (id == 11015) {
        nm = $('#candfifteen').text();
    }
    var cfm = confirm("Confirm vote for " + id + " as in " + nm + "?");
    if (cfm) {
        // var date = new Date();
        // date.setTime(date.getTime()+(24*60*60*1000));
        // var expires = "; expires="+date.toGMTString();
        // document.cookie("cfmadvote = uservtscfm" + expires);
        alert("Vote confirmed");
    }
}

