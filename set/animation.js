let main_r = document.getElementById("main_r").style;
let main_section_button = document.getElementById("section_button").style;
let profile = document.getElementById("profile").style;

let main_r_b = 0;
let profile_b = 0;
let prof_sec_b = 0;

let prof_section_1 = document.getElementById("prof_section_1").style;
let prof_section_2 = document.getElementById("prof_section_2").style;
let prof_section_3 = document.getElementById("prof_section_3").style;

function loc(loc){
    if(loc == "r"){
        document.location.href = "maps_r.html";
    }else if(loc == "k"){
        document.location.href = "maps_k.html";
    }
}

function open_main(){
    if (main_r_b == 0){
        document.getElementById("main_r").style.bottom = "0px";
        document.getElementById("section_button").style.bottom = "12px";
        main_r_b = 1;
    }
}

function close_main(){
    if(main_r_b == 1){
        main_r.bottom = "-73%";
        main_section_button.bottom = "-100%";
        main_r_b = 0;
    }
}

function open_profile(){
    if(profile_b == 0){
        profile.top = "0px";
        main_r.bottom = "-100%";
        main_section_button.bottom = "-100%";
    }
}

function close_profile(){
    if(profile_b == 0){
        profile.top = "-100%";
        main_r.bottom = "-73%";
        main_section_button.bottom = "-100%";
        main_r_b = 0;
    }
}

function section_sled(){
    if(prof_sec_b == 0){
        prof_section_1.left = "-400px";
        prof_section_1.transform = "rotate(-20deg)";
        prof_section_2.left = "0px";
        prof_section_2.transform = "rotate(0deg)";
        prof_sec_b = 1;
    }else if(prof_sec_b == 1){
        prof_section_2.left = "-400px";
        prof_section_2.transform = "rotate(-20deg)";
        prof_section_3.left = "0px";
        prof_section_3.transform = "rotate(0deg)";
        prof_sec_b = 2;
    }
}

function section_pred(){
    if(prof_sec_b == 2){
        prof_section_2.left = "0px";
        prof_section_2.transform = "rotate(0deg)";
        prof_section_3.left = "400px";
        prof_section_3.transform = "rotate(20deg)";
        prof_sec_b = 1;
    }else if(prof_sec_b == 1){
        prof_section_1.left = "0px";
        prof_section_1.transform = "rotate(0deg)";
        prof_section_2.left = "400px";
        prof_section_2.transform = "rotate(20deg)";
        prof_sec_b = 0;
    }
}


/* Яндекс карты */

let center = [54.77249, 32.07522];

function init() {
    var map = new ymaps.Map("YMapsID", {
        center: center,
        zoom: 17,
    });
    map.controls.remove("geolocationControl");
    map.controls.remove("searchControl");
    map.controls.remove("trafficControl");
    map.controls.remove("typeSelector");
    map.controls.remove("fullscreenControl");
    map.controls.remove("zoomControl");
    map.controls.remove("rulerControl");

    var placemark = new ymaps.Placemark(center, {
        balloonContent: "<div class='ballonContent'> <h2 class='ballonContent_h2'> Работник зала в магазине «Дикси» </h2> <h6 class='ballonContent_h6'> ул.Румянцева 15 </h6> </div>"
    }, {});

    map.geoObjects.add(placemark);
    placemark.balloon.open();
};

ymaps.ready(init);