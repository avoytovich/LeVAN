// JavaScript File
$(document).ready(function(){
    $(".text_one").fadeIn('slow');
    $(".text_two").fadeIn(2000);
    $(".text_three").fadeIn(3000);
    $(".text_four").fadeIn(4000);
    $(".text_five").fadeIn(5000);
    $(".text_six").fadeIn(6000);
    $(".text_seven").fadeIn(7000);
    $(".text_eight").fadeIn(8000);
    $(".text_nine").fadeIn(9000);
    $(".text_ten").fadeIn(10000);
    $(".text_eveven").fadeIn(11000);
    $(".text_twelve").fadeIn(12000);
    $(".text_thirteen").fadeIn(13000);
    $(".text_fourteen").fadeIn(14000);
    $(".text_fiftheen").fadeIn(15000);
});

$(document).ready(function() {
    $('#production').click(function() {
        $('.background').hide('fast');
        $('#product').show();
    });
});

$(document).ready(function() {
    $('#home').click(function() {
        $('#product').hide('fast');
        $('.background').show();
    });
});




$(document).ready(function(){
    $("#avstrijska_sv_small").click(function() {
       $('#avstrijska_tem').hide();
       $('#california_bil').hide();
       $('#avstrijska_sv').show();
    });
});

$(document).ready(function() {
    $('#avstrijska_tem_small').click(function() {
        $('#avstrijska_sv').hide();
        $('#california_bil').hide();
        $('#avstrijska_tem').show();
    });
});

$(document).ready(function() {
    $('#california_bil_small').click(function() {
        $('#avstrijska_sv').hide();
        $('#avstrijska_tem').hide();
        $('#california_bil').show();
    });
});




    var array = [];
    array [0] = "Success is most often achieved by those who don't know that failure is inevitable. -- Coco Chanel";
    array [1] = "Things work out best for those who make the best of how things work out.- John Wooden";
    array [2] = "Courage is grace under pressure. -- Ernest Hemingway";
    array [3] = "If you are not willing to risk the usual, you will have to settle for the ordinary.- Jim Rohn";
    array [4] = "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning. -- Albert Einstein";
    array [5] = "Take up one idea. Make that one idea your life -- think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body be full of that idea, and just leave every other idea alone. This is the way to success. -- Swami Vivekananda";
    array [6] = "Sometimes you can't see yourself clearly until you see yourself through the eyes of others. -- Ellen DeGeneres";
    array [7] = "All our dreams can come true if we have the courage to pursue them.- Walt Disney";
    array [8] = "It does not matter how slowly you go, so long as you do not stop.- Confucius";
    array [9] = "Success is walking from failure to failure with no loss of enthusiasm.- Winston Churchill";
    array [10] = "Someone is sitting in the shade today because someone planted a tree a long time ago. -- Warren Buffett";

document.getElementById("citations").innerHTML = array[Math.floor(Math.random()*10)];

var price = [];
    price [0] = "5,11"; //Avs_sv
    price [1] = "5,11"; //Avs_tem
    price [2] = "5,15"; //Cal_bil
    price [3] = "5,11"; //Avs_sv
    price [4] = "5,11"; //Avs_sv
    price [5] = "5,11"; //Avs_sv
    price [6] = "5,11"; //Avs_sv
    price [7] = "5,11"; //Avs_sv
    price [8] = "5,11"; //Avs_sv
    price [9] = "5,11"; //Avs_sv
    price [10] = "5,11"; //Avs_sv

document.getElementById("price_avs_sv").innerHTML = price[0];
document.getElementById("price_avs_tem").innerHTML = price[1];
document.getElementById("price_cal_bil").innerHTML = price[2];



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
