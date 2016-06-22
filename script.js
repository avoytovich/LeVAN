$(document).ready(function() {
    $('.navbar-toggle').click(logo);
    $(document).scroll(on_top);
    $('.avstrijska_sv_small').click(about);
    $('.laying').click(laying);
    $('#home').click(home);
    $('#production').click(production);
    $('.ico').mouseenter(light);
    $('.ico').mouseleave(dark);
});

function logo () {
    $('#logo').toggle(1000);
}

function on_top () {
    $('.on_top').fadeIn(3000, function () {
        $('.on_top').fadeOut(5000);
    });
}

function about () {
    $('#avstrijska_sv').fadeIn(1000);
}

function laying () {
    $('.background_main, .background_notice, .product').fadeOut(1000);
    $('.information').fadeIn(1000)
}

function home () {
    $('.information, .product').fadeOut(1000);
    $('.background_main, .background_notice').fadeIn(1000)
}

function production () {
    $('.background_main, .information, .background_notice').fadeOut(1000);
    $('.product').fadeIn(1000);
}

function light () {
    $(this).fadeTo("fast",1);
}

function dark () {
    $(this).fadeTo("fast",0.5);
}





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
