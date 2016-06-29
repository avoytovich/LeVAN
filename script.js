$(document).ready(function() {
    $('.navbar-toggle').click(logo);
    $(document).scroll(on_top);
    $('.avstrijska_sv_small').click(about_AVSsv);
    $('.avstrijska_tem_small').click(about_AVStem);
    $('.california_bil_small').click(about_CALbil);
    $('.california_small').click(about_CAL);
    $('.california_sv_small').click(about_CALsv);
    $('.california_tem_small').click(about_CALtem);
    $('.carolinna_small').click(about_CAR);
    $('.cegljna_small').click(about_CEG);
    $('.copyng_small').click(about_COP);
    $('.coralova_small').click(about_COR);
    $('.corner_small').click(about_CORN);
    $('.garden_trav_small').click(about_GARDtr);
    $('.modena_roz_small').click(about_MODroz);
    $('.modena_sv_small').click(about_MODsv);
    $('.old_small').click(about_OLD);
    $('.old_st_small').click(about_OLDst);
    $('.staruy_myr_small').click(about_STmyr);
    $('.verona_sv_small').click(about_VERsv);
    $('.vushneva_small').click(about_VUSH);
    $('.laying').click(laying);
    $('#home').click(home);
    $('#production').click(production);
    $('.ico').mouseenter(light);
    $('.ico').mouseleave(dark);
    $('#contact').click(contact);
    $('.calculator').click(calculator);
});

function logo () {
    $('#logo').toggle(1000);
}

function on_top () {
    $('.on_top').fadeIn(3000, function () {
        $('.on_top').fadeOut(5000);
    });
}

function about_AVSsv () {
    $('.about_all, #avstrijska_tem, #california_bil, #california, #california_sv, #california_tem, #carolinna, #cegljna, #copyng, #coralova, #corner, #garden_trav, #modena_roz, #modena_sv, #old, #old_street, #staruy_myr, #verona_sv, #vushneva' ).fadeOut(1000);
    $('.discribe_all, #avstrijska_sv').fadeIn(1000);
}

function about_AVStem () {
    $('.about_all, #avstrijska_sv, #california_bil, #california, #california_sv, #california_tem, #carolinna, #cegljna, #copyng, #coralova, #corner, #garden_trav, #modena_roz, #modena_sv, #old, #old_street, #staruy_myr, #verona_sv, #vushneva' ).fadeOut(1000);
    $('.discribe_all, #avstrijska_tem').fadeIn(1000);
}

function about_CALbil () {
    $('.about_all, #avstrijska_sv, #avstrijska_tem, #california, #california_sv, #california_tem, #carolinna, #cegljna, #copyng, #coralova, #corner, #garden_trav, #modena_roz, #modena_sv, #old, #old_street, #staruy_myr, #verona_sv, #vushneva' ).fadeOut(1000);
    $('.discribe_all, #california_bil').fadeIn(1000);
}

function about_CAL () {
    $('.about_all, #avstrijska_sv, #avstrijska_tem, #california_bil, #california_sv, #california_tem, #carolinna, #cegljna, #copyng, #coralova, #corner, #garden_trav, #modena_roz, #modena_sv, #old, #old_street, #staruy_myr, #verona_sv, #vushneva' ).fadeOut(1000);
    $('.discribe_all, #california').fadeIn(1000);
}

function about_CALsv () {
    $('.about_all, #avstrijska_sv, #avstrijska_tem, #california_bil, #california, #california_tem, #carolinna, #cegljna, #copyng, #coralova, #corner, #garden_trav, #modena_roz, #modena_sv, #old, #old_street, #staruy_myr, #verona_sv, #vushneva' ).fadeOut(1000);
    $('.discribe_all, #california_sv').fadeIn(1000);
}

function about_CALtem () {
    $('.about_all, #avstrijska_sv, #avstrijska_tem, #california_bil, #california, #california_sv, #carolinna, #cegljna, #copyng, #coralova, #corner, #garden_trav, #modena_roz, #modena_sv, #old, #old_street, #staruy_myr, #verona_sv, #vushneva' ).fadeOut(1000);
    $('.discribe_all, #california_tem').fadeIn(1000);
}

function about_CAR () {
    $('.about_all, #avstrijska_sv, #avstrijska_tem, #california_bil, #california, #california_sv, #california_tem, #cegljna, #copyng, #coralova, #corner, #garden_trav, #modena_roz, #modena_sv, #old, #old_street, #staruy_myr, #verona_sv, #vushneva' ).fadeOut(1000);
    $('.discribe_all, #carolinna').fadeIn(1000);
}

function about_CEG () {
    $('.about_all, #avstrijska_sv, #avstrijska_tem, #california_bil, #california, #california_sv, #california_tem, #carolinna, #copyng, #coralova, #corner, #garden_trav, #modena_roz, #modena_sv, #old, #old_street, #staruy_myr, #verona_sv, #vushneva' ).fadeOut(1000);
    $('.discribe_all, #cegljna').fadeIn(1000);
}

function about_COP () {
    $('.about_all, #avstrijska_sv, #avstrijska_tem, #california_bil, #california, #california_sv, #california_tem, #carolinna, #cegljna, #coralova, #corner, #garden_trav, #modena_roz, #modena_sv, #old, #old_street, #staruy_myr, #verona_sv, #vushneva' ).fadeOut(1000);
    $('.discribe_all, #copyng').fadeIn(1000);
}

function about_COR () {
    $('.about_all, #avstrijska_sv, #avstrijska_tem, #california_bil, #california, #california_sv, #california_tem, #carolinna, #cegljna, #copyng, #corner, #garden_trav, #modena_roz, #modena_sv, #old, #old_street, #staruy_myr, #verona_sv, #vushneva' ).fadeOut(1000);
    $('.discribe_all, #coralova').fadeIn(1000);
}

function about_CORN () {
    $('.about_all, #avstrijska_sv, #avstrijska_tem, #california_bil, #california, #california_sv, #california_tem, #carolinna, #cegljna, #copyng, #coralova, #garden_trav, #modena_roz, #modena_sv, #old, #old_street, #staruy_myr, #verona_sv, #vushneva' ).fadeOut(1000);
    $('.discribe_all, #corner').fadeIn(1000);
}

function about_GARDtr () {
    $('.about_all, #avstrijska_sv, #avstrijska_tem, #california_bil, #california, #california_sv, #california_tem, #carolinna, #cegljna, #copyng, #coralova, #corner, #modena_roz, #modena_sv, #old, #old_street, #staruy_myr, #verona_sv, #vushneva' ).fadeOut(1000);
    $('.discribe_all, #garden_trav').fadeIn(1000);
}

function about_MODroz () {
    $('.about_all, #avstrijska_sv, #avstrijska_tem, #california_bil, #california, #california_sv, #california_tem, #carolinna, #cegljna, #copyng, #coralova, #corner, #garden_trav, #modena_sv, #old, #old_street, #staruy_myr, #verona_sv, #vushneva' ).fadeOut(1000);
    $('.discribe_all, #modena_roz').fadeIn(1000);
}

function about_MODsv () {
    $('.about_all, #avstrijska_sv, #avstrijska_tem, #california_bil, #california, #california_sv, #california_tem, #carolinna, #cegljna, #copyng, #coralova, #corner, #garden_trav, #modena_roz, #old, #old_street, #staruy_myr, #verona_sv, #vushneva' ).fadeOut(1000);
    $('.discribe_all, #modena_sv').fadeIn(1000);
}

function about_OLD () {
    $('.about_all, #avstrijska_sv, #avstrijska_tem, #california_bil, #california, #california_sv, #california_tem, #carolinna, #cegljna, #copyng, #coralova, #corner, #garden_trav, #modena_roz, #modena_sv, #old_street, #staruy_myr, #verona_sv, #vushneva' ).fadeOut(1000);
    $('.discribe_all, #old').fadeIn(1000);
}

function about_OLDst () {
    $('.about_all, #avstrijska_sv, #avstrijska_tem, #california_bil, #california, #california_sv, #california_tem, #carolinna, #cegljna, #copyng, #coralova, #corner, #garden_trav, #modena_roz, #modena_sv, #old, #staruy_myr, #verona_sv, #vushneva' ).fadeOut(1000);
    $('.discribe_all, #old_street').fadeIn(1000);
}

function about_STmyr () {
    $('.about_all, #avstrijska_sv, #avstrijska_tem, #california_bil, #california, #california_sv, #california_tem, #carolinna, #cegljna, #copyng, #coralova, #corner, #garden_trav, #modena_roz, #modena_sv, #old, #old_street, #verona_sv, #vushneva' ).fadeOut(1000);
    $('.discribe_all, #staruy_myr').fadeIn(1000);
}

function about_VERsv () {
    $('.about_all, #avstrijska_sv, #avstrijska_tem, #california_bil, #california, #california_sv, #california_tem, #carolinna, #cegljna, #copyng, #coralova, #corner, #garden_trav, #modena_roz, #modena_sv, #old, #old_street, #staruy_myr, #vushneva' ).fadeOut(1000);
    $('.discribe_all, #verona_sv').fadeIn(1000);
}

function about_VUSH () {
    $('.about_all, #avstrijska_sv, #avstrijska_tem, #california_bil, #california, #california_sv, #california_tem, #carolinna, #cegljna, #copyng, #coralova, #corner, #garden_trav, #modena_roz, #modena_sv, #old, #old_street, #staruy_myr, #verona_sv' ).fadeOut(1000);
    $('.discribe_all, #vushneva').fadeIn(1000);
}


function laying () {
    $('.background_main, .background_notice, .product, .carousel, .contact, #calculat' ).fadeOut(1000);
    $('.information').fadeIn(1000)
}

function home () {
    $('.information, .product, .contact, #calculat').fadeOut(1000);
    $('.background_main, .background_notice, .carousel').fadeIn(1000)
}

function production () {
    $('.background_main, .information, .background_notice, .carousel, .discribe_all, .contact, #calculat').fadeOut(1000);
    $('.product, .about_all').fadeIn(1000);
}

function contact () {
    $('.background_main, .information, .background_notice, .carousel, .discribe_all, .product, #calculat').fadeOut(1000);
    $('.contact').fadeIn(1000);
}

function calculator () {
    $('#calculat').slideToggle(1000);
}


function light () {
    $(this).fadeTo("fast",1);
    
}

function dark () {
    $(this).fadeTo("fast",0.5);
}


$(document).ready(function(){
    function testnumlength () {
      if (number.length > 7) {
          $('#total').text("Err");
          number = "";
      }  
    }
    var number ="";
    var newnumber = "";
    var total = "";
    var operator = "";
    $("#total").text("0");
    $("#numbers a, #decimal").not("#clear, #clearall").click(function (){
        newnumber = $(this).text();
        number += newnumber;
        $("#total").text(number);
        testnumlength(number);
    }); 
    $("#clear").click(function(){
        number = '';
        $("#total").text("0");
    });
    $("#clearall").click(function(){
        number = '';
        newnumber = '';
        $("#total").text("0");
    });
    $('#operators a').not("#equals, #decimal").click(function(){
        operator = $(this).text();
             total = number;
             number = "";
             $("#total").text("");
    });
    $('#equals').click (function() {
        if (operator === "+") {
            total=Number(total);
            number=Number(number);
            total += number;
            if ((total%total.toFixed(2)) === 0) {
                $("#total").text(total);
            } else {
                $("#total").text((total).toFixed(2));
            }
            total="";
            number="";
        } else if (operator === "-") {
            total=Number(total);
            number=Number(number);
            total -= number;
            if ((total%total.toFixed(2)) === 0) {
                $("#total").text(total);
            } else {
                $("#total").text((total).toFixed(2));
            }
            total="";
            number="";
        } else if (operator === "*") {
            total=Number(total);
            number=Number(number);
            total *= number;
            if ((total%total.toFixed(2)) === 0) {
                $("#total").text(total);
            } else {
                $("#total").text((total).toFixed(2));
            }
            total="";
            number="";
        } else if (operator === "/") {
            total=Number(total);
            number=Number(number);
            total /= number;
            if ((total%total.toFixed(2)) === 0) {
                $("#total").text(total);
            } else {
                $("#total").text((total).toFixed(2));
            }
            total="";
            number="";
        }
    });
});




$(function () {
    var pic = $('.pictures');
    var backgrounds = [
      'url(images/small/avstrijska_sv_small.jpg)', 
      'url(images/small/avstrijska_tem_small.jpg)', 
      'url(images/small/california_bil_small.jpg)', 
      'url(images/small/california_small.jpg)', 
      'url(images/small/california_sv_small.jpg)', 
      'url(images/small/california_tem_small.jpg)',  
      'url(images/small/carolinna_small.jpg)', 
      'url(images/small/cegljna_small.jpg)', 
      'url(images/small/copyng_small.jpg)',  
      'url(images/small/coralova_small.jpg)',  
      'url(images/small/corner_small.jpg)', 
      'url(images/small/garden_trav_small.jpg)',
      'url(images/small/modena_roz_small.jpg)',
      'url(images/small/modena_sv_small.jpg)',
      'url(images/small/old_small.jpg)',
      'url(images/small/old_street_small.jpg)',
      'url(images/small/st_myr_small.jpg)',
      'url(images/small/verona_sv_small.jpg)',
      'url(images/small/vushneva_small.jpg)',];
    var current = 0;

    function nextBackground() {
        pic.css(
            'background',
        backgrounds[current = ++current % backgrounds.length]);

        setTimeout(nextBackground, 5000);
    }
    setTimeout(nextBackground, 5000);
    body.css('background', backgrounds[0]);
});


    var array = [];
    array [0] = "'Success is most often achieved by those who don't know that failure is inevitable'--- Coco Chanel";
    array [1] = "'Things work out best for those who make the best of how things work out'--- John Wooden";
    array [2] = "'Courage is grace under pressure'--- Ernest Hemingway";
    array [3] = "'If you are not willing to risk the usual, you will have to settle for the ordinary'--- Jim Rohn";
    array [4] = "'Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning'--- Albert Einstein";
    array [5] = "'Take up one idea. Make that one idea your life -- think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body be full of that idea, and just leave every other idea alone. This is the way to success'--- Swami Vivekananda";
    array [6] = "'Sometimes you can't see yourself clearly until you see yourself through the eyes of others'--- Ellen DeGeneres";
    array [7] = "'All our dreams can come true if we have the courage to pursue them'--- Walt Disney";
    array [8] = "'It does not matter how slowly you go, so long as you do not stop'--- Confucius";
    array [9] = "'Success is walking from failure to failure with no loss of enthusiasm'--- Winston Churchill";
    array [10] = "'Someone is sitting in the shade today because someone planted a tree a long time ago'--- Warren Buffett";

document.getElementById("citations").innerHTML = array[Math.floor(Math.random()*10)];

var price = [];
    price [0] = "5,11"; //Avs_sv
    price [1] = "5,11"; //Avs_tem
    price [2] = "5,15"; //Cal_bil
    price [3] = "5,15"; //Cal
    price [4] = "5,15"; //Cal_sv
    price [5] = "5,15"; //Cal_tem
    price [6] = "371,45"; //Car
    price [7] = "5,20"; //Ceg
    price [8] = "123,82"; //Cop
    price [9] = "5,15"; //Cor
    price [10] = "17,52"; //Corn
    price [11] = "355,98"; //Gar_tr
    price [12] = "318,78"; //Mod_roz
    price [13] = "309,54"; //Mod_sv
    price [14] = "5,25"; //Old
    price [15] = "5,30"; //Old_st
    price [16] = "5,15"; //St_myr
    price [17] = "243,44"; //Ver_sv
    price [18] = "5,20"; //Vush
    price [19] = "5,11"; //Avs_sv
    price [20] = "5,11"; //Avs_sv

document.getElementById("price_avs_sv").innerHTML = price[0];
document.getElementById("price_avs_tem").innerHTML = price[1];
document.getElementById("price_cal_bil").innerHTML = price[2];
document.getElementById("price_cal").innerHTML = price[3];
document.getElementById("price_cal_sv").innerHTML = price[4];
document.getElementById("price_cal_tem").innerHTML = price[5];
document.getElementById("price_car").innerHTML = price[6];
document.getElementById("price_ceg").innerHTML = price[7];
document.getElementById("price_cop").innerHTML = price[8];
document.getElementById("price_cor").innerHTML = price[9];
document.getElementById("price_corn").innerHTML = price[10];
document.getElementById("price_gar_tr").innerHTML = price[11];
document.getElementById("price_mod_roz").innerHTML = price[12];
document.getElementById("price_mod_sv").innerHTML = price[13];
document.getElementById("price_old").innerHTML = price[14];
document.getElementById("price_old_st").innerHTML = price[15];
document.getElementById("price_st_myr").innerHTML = price[16];
document.getElementById("price_ver_sv").innerHTML = price[17];
document.getElementById("price_vush").innerHTML = price[18];



document.getElementById('headphone').addEventListener('click', my);

function my () {
    var audio = document.getElementById('audio');
    audio.play();
    document.getElementById('headphone').addEventListener('click', me);
}

function me () {
    var audio = document.getElementById('audio');
    audio.pause();
    document.getElementById('headphone').removeEventListener('click', me);
}
