$(window).load(function() {
    $('.flexslider').flexslider({
        slideshow: false
    });
});
window.addEventListener("keydown", moveSomething, false);

function moveSomething(e) {
    switch (e.keyCode) {
        case 37:
            document.getElementById("leftarrow").click();
            break;
        case 39:
            document.getElementById("rightarrow").click();
            break;
    }
}
        $('#myCarousel3').carousel({
        interval: 190000 //changes the speed
    });

function videochange(ved_id)
{
    document.getElementById("video_").innerHTML = '<iframe src="http://player.vimeo.com/video/' + ved_id + '" width="98%" height="500" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
}

function imagechange(imageurl)
{
    document.getElementById("main_image").src = imageurl;
}

function changei(id)
{

    var Numrow = 1;

    while (document.getElementById('abc' + Numrow)) {
        if (id == Numrow)
        {
            var a = document.getElementById('abc' + Numrow).className;
            if (a == 'open')
            {
                document.getElementById('abc' + Numrow).innerHTML = '+';
            } else
            {
                document.getElementById('abc' + Numrow).innerHTML = '-';
            }

        } else {
            document.getElementById('abc' + Numrow).innerHTML = '+';
        }
        Numrow = Numrow + 1;
    }

    if (open == 0)
    {
        open = 1;
    } else {
        open = 0;
    }

}

// $(function() {
//     $('a').click(function() {
//       $(this).find('i').toggleClass('fa fa-plus fa fa-minus');
//     });
// });

$('#myCarousel3').carousel({
    interval: 90000 //changes the speed
});
$('#myCarousel4').carousel({
    interval: 90000 //changes the speed
});

function hidecareer()
{
    $("#career").slideUp(500).fadeOut(1000);
    document.getElementById('copimg').src = "assets/images/right.png";
}
function showcareer()
{
    (function slide() {
        $('#career').animate({backgroundPosition: '-=2px'}, 60, 'linear', slide);
    })();
    document.getElementById('copimg').src = "assets/images/down.png";
    $("#career").slideDown(500).fadeIn(1000);
    var y = $(window).scrollTop();
    $("html, body").animate({scrollTop: y + $(window).height()}, 200);
    return false;
}

function hidefilms()
{
    $("#filmss").fadeOut(1000);
    $("#photoss").fadeIn(1000);
}
function hidephotos()
{
    $("#photoss").fadeOut(1000);
    $("#filmss").fadeIn(1000);
}

function pauseaudio()
{
    document.getElementById('musicplay').style.display = 'none';
    $("#musicpause").fadeIn(1000);
    document.getElementById('player').pause();
}

function playaudio()
{
    document.getElementById('musicpause').style.display = 'none';
    $("#musicplay").fadeIn(1000);
    document.getElementById('player').play();
}



function get_fulldetail(ids)
{
    // document.getElementById('galleryy').click();
    var productdiv = 'P' + ids;
    var xmlhttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function()
    {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
            document.getElementById(productdiv).innerHTML = xmlhttp.responseText;
            // document.getElementById('galleryy').click();
        }
    }
    xmlhttp.open("GET.html", "get5445.html?id=" + ids, true);
    xmlhttp.send();

}

function get_videodetail(ids)
{
    // document.getElementById('galleryy').click();
    var productdiv = 'V' + ids;
    var xmlhttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function()
    {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
            document.getElementById(productdiv).innerHTML = xmlhttp.responseText;
            // document.getElementById('galleryy').click();
        }
    }
    xmlhttp.open("GET.html", "video5445.html?id=" + ids, true);
    xmlhttp.send();

}

var btn = 'false';
var password='false';

function get_privatedetail()
{
    var pass = document.getElementById('password').value;
    var ids = '12';
    if (pass != '') {
        if (btn == 'true') {
            var xmlhttp;
            if (window.XMLHttpRequest)
            {// code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            }
            else
            {// code for IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function()
            {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
                {
                    if (xmlhttp.responseText == 'Wrong')
                    {
                        alert('Entered password is incorrect');
                        password='false';
                    }
                    else {
                       password='true';
                       document.getElementById('private').click();
                    }
                }
            }
            xmlhttp.open("GET.html", "get5445.html?id=" + ids + "& pass=" + pass, true);
            xmlhttp.send();
        }
    }
    btn = 'false';
}
function checkempty()
{
    btn = 'true';
    var pass = document.getElementById('password').value;
    if (pass == '') {
        alert('Please enter password');
        //document.getElementById('privatedesc').innerHTML='';
    } else
    {
        
        
    }
}


var teamload = 0;
function team_load()
{

    if (teamload == 0)
    {
        var xmlhttp;
        if (window.XMLHttpRequest)
        {
            xmlhttp = new XMLHttpRequest();
        }
        else
        {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function()
        {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
            {

                var mainDiv = document.getElementById('teamparent');
                var newSpan = document.createElement('span');
                alert();
                mainDiv.appendChild(xmlhttp.responseText);
                //document.getElementById('teamload').innerHTML = xmlhttp.responseText;

            }
        }
        xmlhttp.open("GET.html", "getteam.html", true);
        xmlhttp.send();
        teamload = 1;
    }
}

function opennewtab(url) {
    if (url != '')
    {
        window.open(url, '_blank');
    }
}

function radiochecked(abc)
{
    var bb = abc + 'r';
    var x = document.getElementsByClassName("yourint");
    x[0].style.background = "#6c4c3d";
    x[1].style.background = "#6c4c3d";
    x[2].style.background = "#6c4c3d";
    x[3].style.background = "#6c4c3d";
    x[4].style.background = "#6c4c3d";
    x[5].style.background = "#6c4c3d";
    document.getElementById(bb).style.backgroundColor = '#ee6c5a';
}