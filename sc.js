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

let x    = 0;
let s1   = document.getElementById("s1").style;
let s2   = document.getElementById("s2").style;
let s3   = document.getElementById("s3").style;
let s4   = document.getElementById("s4").style;
let r    = document.getElementById("right").style;
let l    = document.getElementById("left").style;

function smenaV(){
    if(x == 0){
        x              = 1;
        s1.transform   = "rotate(-20deg)";
        s1.marginLeft  = "-600px";
        s2.transform   = "rotate(0deg)";
        s2.marginLeft  = "0px";
        l.opacity      = "1";
    }else if(x == 1){
        x              = 2;
        s2.transform   = "rotate(-20deg)";
        s2.marginLeft  = "-600px";
        s3.transform   = "rotate(0deg)";
        s3.marginLeft  = "0px";
    }else if(x == 2){
        x              = 3;
        s3.transform   = "rotate(-20deg)";
        s3.marginLeft  = "-600px";
        s4.transform   = "rotate(0deg)";
        s4.marginLeft  = "0px";
        r.opacity      = "0.3";
    }
}

function smenaN(){
    if(x == 3){
        x = 2;
        s3.transform   = "rotate(0deg)";
        s3.marginLeft  = "0px";
        s4.transform   = "rotate(20deg)";
        s4.marginLeft  = "600px";
        r.opacity      = "1";
    }else if(x == 2){
        x = 1;
        s2.transform   = "rotate(0deg)";
        s2.marginLeft  = "0px";
        s3.transform   = "rotate(20deg)";
        s3.marginLeft  = "600px";
    }else if(x == 1){
        x = 0;
        s1.transform   = "rotate(0deg)";
        s1.marginLeft  = "0px";
        s2.transform   = "rotate(20deg)";
        s2.marginLeft  = "600px";
        l.opacity      = "0.3";
    }
}

function closee(){
    document.getElementById("footer").style.bottom  = "-500px";
}

function oopen(print1, print2){
    document.getElementById("fo1").innerHTML        = print1;
    document.getElementById("fo2").innerHTML        = print2;
    document.getElementById("footer").style.bottom  = "0px";
}

function x1(){
    let in1 = document.getElementById("in1").value;
    let in2 = document.getElementById("in2").value;
    let in3 = document.getElementById("in3").value;
    let x1, x2, D;
    D = in2*in2 - 4*in1*in3;
    D = Math.sqrt(D);

    if(D > 0){
        x1 = ( -in2 - D ) / ( 2*in1 );
        x2 = ( -in2 + D ) / ( 2*in1 );
        oopen("Первый корень: " + x1.toFixed(4),"Второй корень: " + x2.toFixed(4));
    }else if(D == 0){
        x1 = (-in2)/(2*in1);
        oopen("Первый корень: " + x1.toFixed(4),"Больше нет корней");
    }else{
        oopen("Нет корней","Нет корней");
    }
}

function x2(){
    let in1 = document.getElementById("in4").value;
    let in2 = document.getElementById("in5").value;
    let c   = Math.sqrt(in1*in1 + in2*in2);
    oopen("Гипотенуза: " + c.toFixed(4),"Больше решений нет");
}

function x3(){
    let S = document.getElementById("in6").value;
    let V = document.getElementById("in7").value;
    let T = document.getElementById("in8").value;
    let x1, x2, itog;

    x1    = (T*V - Math.sqrt( (T*V)*(T*V) + S*V*T*4 ))/(-2*T);
    x2    = (T*V + Math.sqrt( (T*V)*(T*V) + S*V*T*4 ))/(-2*T);
    if(x1 > 0) itog = x1;
    else       itog = x2;
    oopen("Скорость: " + itog.toFixed(4)  + "км/ч", "Больше решений нет");
}

function x4(){
    let S1 = document.getElementById("in9").value;
    let S2 = document.getElementById("in10").value;
    let V1 = document.getElementById("in11").value;
    let V2 = document.getElementById("in12").value;
    let itog;

    if(S1/V1 > S2/V2){
        itog = S1/V1 - S2/V2;
        oopen("Мне выходить через: " + itog.toFixed(4) + "ч", "Больше решений нет");
    }else{
        itog = S2/V2 - S1/V1;
        oopen("Ему выходить через: " + itog.toFixed(4) + "ч", "Больше решений нет");
    }
}