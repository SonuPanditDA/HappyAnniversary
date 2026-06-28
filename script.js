// =============================
// LOADER
// =============================

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.opacity = "0";

        document.getElementById("loader").style.pointerEvents = "none";

        setTimeout(() => {

            document.getElementById("loader").style.display = "none";

        }, 800);

    }, 1800);

});

// =============================
// LIVE COUNTER
// =============================

const startDate = new Date("June 29, 2022 00:00:00");

function updateCounter() {

    const now = new Date();

    let diff = now - startDate;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));

    diff -= years * (1000 * 60 * 60 * 24 * 365.25);

    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));

    diff -= months * (1000 * 60 * 60 * 24 * 30.44);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    diff -= days * (1000 * 60 * 60 * 24);

    const hours = Math.floor(diff / (1000 * 60 * 60));

    diff -= hours * (1000 * 60 * 60);

    const minutes = Math.floor(diff / (1000 * 60));

    diff -= minutes * (1000 * 60);

    const seconds = Math.floor(diff / 1000);

    document.getElementById("years").innerText = years;
    document.getElementById("months").innerText = months;
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

setInterval(updateCounter,1000);

updateCounter();


// =============================
// SURPRISE BUTTON
// =============================

const surpriseBtn = document.getElementById("surpriseBtn");

surpriseBtn.addEventListener("click",()=>{

document.getElementById("surpriseMessage").style.display="block";

confettiAnimation();

});


// =============================
// FLOATING HEARTS
// =============================

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="100vh";

heart.style.fontSize=(20+Math.random()*25)+"px";

heart.style.pointerEvents="none";

heart.style.zIndex="999";

heart.style.transition="transform 6s linear,opacity 6s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform="translateY(-120vh)";

heart.style.opacity="0";

},100);

setTimeout(()=>{

heart.remove();

},6000);

}

setInterval(createHeart,700);


// =============================
// CONFETTI
// =============================

function confettiAnimation(){

for(let i=0;i<150;i++){

const conf=document.createElement("div");

conf.style.position="fixed";

conf.style.width="10px";

conf.style.height="10px";

conf.style.left=Math.random()*100+"vw";

conf.style.top="-10px";

conf.style.background=`hsl(${Math.random()*360},100%,60%)`;

conf.style.borderRadius="50%";

conf.style.zIndex="9999";

document.body.appendChild(conf);

const duration=3000+Math.random()*2000;

conf.animate([

{transform:"translateY(0px) rotate(0deg)"},

{transform:`translateY(${window.innerHeight+200}px) rotate(720deg)`}

],{

duration:duration,

easing:"linear"

});

setTimeout(()=>{

conf.remove();

},duration);

}

}


// =============================
// GALLERY LIGHTBOX
// =============================

const images=document.querySelectorAll(".gallery img");

images.forEach(img=>{

img.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.style.position="fixed";

overlay.style.left="0";

overlay.style.top="0";

overlay.style.width="100%";

overlay.style.height="100%";

overlay.style.background="rgba(0,0,0,.9)";

overlay.style.display="flex";

overlay.style.justifyContent="center";

overlay.style.alignItems="center";

overlay.style.zIndex="99999";

const image=document.createElement("img");

image.src=img.src;

image.style.maxWidth="90%";

image.style.maxHeight="90%";

image.style.borderRadius="20px";

overlay.appendChild(image);

overlay.onclick=()=>overlay.remove();

document.body.appendChild(overlay);

});

});


// =============================
// SCROLL TO TOP
// =============================

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.style.position="fixed";

topBtn.style.right="20px";

topBtn.style.bottom="20px";

topBtn.style.width="50px";

topBtn.style.height="50px";

topBtn.style.borderRadius="50%";

topBtn.style.border="none";

topBtn.style.background="#ff2d75";

topBtn.style.color="white";

topBtn.style.cursor="pointer";

topBtn.style.display="none";

topBtn.style.zIndex="999";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


// =============================
// LOVE MESSAGE ROTATOR
// =============================

const messages=[

"I Love You ❤️",

"My Forever ❤️",

"You Are My Home 🏡",

"My Favourite Person ❤️",

"Happy Anniversary 💍",

"Forever Together ❤️"

];

let index=0;

setInterval(()=>{

const hero=document.querySelector(".hero p");

if(hero){

hero.innerHTML=messages[index];

index++;

if(index>=messages.length){

index=0;

}

}

},3500);


// =============================
// END
// =============================