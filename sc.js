/*function smenaV(){
    let s1 = document.getElementById("s1").style;
    let s2 = document.getElementById("s2").style;
    
    s1.transform = "rotate(-20deg)";
    s1.marginLeft = "-600px";

    s2.transform = "rotate(0deg)";
    s2.marginLeft = "0px";
}

function smenaN(){
    let s1 = document.getElementById("s1").style;
    let s2 = document.getElementById("s2").style;
    
    s1.transform = "rotate(0deg)";
    s1.marginLeft = "0px";

    s2.transform = "rotate(20deg)";
    s2.marginLeft = "600px";
}*/

let x = 0;
let s1 = document.getElementById("s1").style;
let s2 = document.getElementById("s2").style;
let s3 = document.getElementById("s3").style;
let r = document.getElementById("right").style;
let l = document.getElementById("left").style;

function smenaV(){
    if(x == 0){
        x = 1;
        s1.transform = "rotate(-20deg)";
        s1.marginLeft = "-600px";
        s2.transform = "rotate(0deg)";
        s2.marginLeft = "0px";
        l.opacity = "1";
    }else if(x == 1){
        x = 2;
        s2.transform = "rotate(-20deg)";
        s2.marginLeft = "-600px";
        s3.transform = "rotate(0deg)";
        s3.marginLeft = "0px";
        r.opacity = "0.3";
    }
}

function smenaN(){
    if(x == 2){
        x = 1;
        s2.transform = "rotate(0deg)";
        s2.marginLeft = "0px";
        s3.transform = "rotate(20deg)";
        s3.marginLeft = "600px";
        r.opacity = "1";
    }else if(x == 1){
        x = 0;
        s1.transform = "rotate(0deg)";
        s1.marginLeft = "0px";
        s2.transform = "rotate(20deg)";
        s2.marginLeft = "600px";
        l.opacity = "0.3";
    }
}

function closee(){
    document.getElementById("footer").style.bottom = "-500px";
}

function oopen(print1, print2){
    document.getElementById("fo1").innerHTML = print1;
    document.getElementById("fo2").innerHTML = print2;
    document.getElementById("footer").style.bottom = "0px";
}

function x1(){
    let in1 = document.getElementById("in1").value;
    let in2 = document.getElementById("in2").value;
    let in3 = document.getElementById("in3").value;
    let x1 ;
    let x2 ;
    let D ;

    D = in2*in2 - 4*in1*in3;
    D = Math.sqrt(D);

    if(D > 0){
        x1 = ( -in2 - D ) / ( 2*in1 );
        x2 = ( -in2 + D ) / ( 2*in1 );
        oopen("Первый корень:" + x1,"Второй корень:" + x2);
    }else if(D == 0){
        x1 = (-in2)/(2*in1);
        oopen("Первый корень:" + x1,"Больше нет корней");
    }else{
        oopen("Нет корней","Нет корней");
    }
}

function x2(){
    let in1 = document.getElementById("in4").value;
    let in2 = document.getElementById("in5").value;
    let c ;

    c = in1*in1 + in2*in2 ;
    c = Math.sqrt(c);
    oopen("Гипотенуза:" + c,"Больше решений нет");
}

function x3(){
    let in1 = document.getElementById("in6").value;
    let in2 = document.getElementById("in7").value;
    let a ;

    a = 180 - in1 - in2 ;
    oopen("Неизвестный угол:" + a,"Больше решений нет");
}