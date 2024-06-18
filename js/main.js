const logocont = document.getElementById('logocont');
logocont.style.fill = "#fff";

const nav = document.getElementById('nav');
const uli = document.getElementsByClassName('uli');
const registrobox = document.getElementsByClassName('registrobox');
const whiteli1 = document.getElementsByClassName('whiteli1');
let action = 0;

window.onscroll = function(){
    if(scrollY >= 0){
        if(action == 0){
            action = 1;
            logocont.style.fill = "#000";
            nav.style.background = "#fff";
            nav.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.8)";
            for(let ulis in uli) {
                uli[ulis].style.color = "#000";
                console.log('cambio');
            }
        }
        
    }
    if(scrollY == 0) {
        if(action == 1){
            action = 0;
            logocont.style.fill = "#fff";
            nav.style.background = "none";
            nav.style.boxShadow = "none";
            for(let ulis in uli) {
                uli[ulis].style.color = "#fff";
                console.log('cambio');
            }
        }
    }
}

//Background
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
let tiempopantallas = 4000;

function esconder1(){
    setTimeout(function(){
        img1.style.transform = "scale(1.5)";
        img1.style.opacity = "0";
        esconder2();
    },tiempopantallas)
}
function esconder2(){
    setTimeout(function(){
        img2.style.transform = "scale(1.5)";
        img2.style.opacity = "0";
        mostrartodo();
    },tiempopantallas)
}
function mostrartodo(){
    setTimeout(function(){
        img2.style.transform = "scale(1.0)";
        img1.style.transform = "scale(1.0)";
        img2.style.opacity = "1";
        img1.style.opacity = "1";
        esconder1();
    },tiempopantallas)
}
esconder1();

const regibtn = document.getElementById('regibtn');
const regli = document.getElementById('regli');

regli.addEventListener('mouseover',function(){
    regli.style.width = "auto";
    regibtn.style.transform = "scale(1)";
});
regli.addEventListener('mouseout',function(){
    regli.style.width = "150px";
    regibtn.style.transform = "scale(0)";
});