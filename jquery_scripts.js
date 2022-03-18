$(document).ready(function(){
    $("#div_wttr").load("https://wttr.in/?0");
});

$("#btn_kuma").click(function() {
    window.open("http://svr-mon1:3002/dashboard");
})

$("#btn_ogc").click(function() {
    window.open("http://ogc-home/scripts/start.php");
})

$("#btn_google").click(function() {
    window.open("https://www.google.com");
})

$("#btn_selfhosted").click(function() {
    window.open("https://www.reddit.com/r/selfhosted/");
})

$("#btn_youtube").click(function() {
    window.open("https://www.youtube.com");
})

$("#div_add_item").click(function() {
    window.open("#");
})