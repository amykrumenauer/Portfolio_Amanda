/* ==========================================
   LOADER
========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    loader.style.pointerEvents = "none";

    setTimeout(() => {

        loader.style.display = "none";

    }, 600);

});

/* ==========================================
   NAVBAR
========================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.background = "rgba(10,10,10,.95)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";

    } else {

        header.style.background = "rgba(0,0,0,.4)";
        header.style.boxShadow = "none";

    }

});

/* ==========================================
   TYPEWRITER
========================================== */

const typing = document.getElementById("typing");

const words = [

    "Full Stack Developer",
    "Cybersecurity",
    "UI / UX Designer",
    "Backend Developer",
    "Frontend Developer"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {

    const current = words[wordIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex++);

        if (charIndex > current.length) {

            deleting = true;

            setTimeout(type, 1500);

            return;

        }

    } else {

        typing.textContent = current.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(type, deleting ? 50 : 100);

}

type();

/* ==========================================
   CURSOR
========================================== */

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});

/* ==========================================
   SCROLL REVEAL
========================================== */

const reveals = document.querySelectorAll("section");

function revealSections() {

    const trigger = window.innerHeight * 0.85;

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < trigger) {

            section.style.opacity = "1";
            section.style.transform = "translateY(0px)";

        }

    });

}

reveals.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(80px)";
    section.style.transition = ".8s";

});

window.addEventListener("scroll", revealSections);

revealSections();

/* ==========================================
   BOTÃO TOPO
========================================== */

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.classList.add("topButton");

document.body.appendChild(topButton);

topButton.onclick = () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

}

window.addEventListener("scroll", ()=>{

    if(window.scrollY>400){

        topButton.style.opacity="1";
        topButton.style.visibility="visible";

    }else{

        topButton.style.opacity="0";
        topButton.style.visibility="hidden";

    }

});

/* ==========================================
   PROJETOS
========================================== */

const projetos = [

{
nome:"AMAPE Tecnologia",
descricao:"Landing page da empresa.",
imagem:"assets/img/amape.png"
},

{
nome:"Toca dos Tatus",
descricao:"Sistema para adoção de animais.",
imagem:"assets/img/toca.png"
},

{
nome:"Peixaria Empório do Vale",
descricao:"Website institucional responsivo.",
imagem:"assets/img/peixaria.png"
},

{
nome:"Canal de Denúncias",
descricao:"Aplicativo Android em Kotlin.",
imagem:"assets/img/canal.png"
}

];

const container = document.querySelector(".projects");

if(container){

projetos.forEach(p=>{

container.innerHTML += `

<div class="project">

<img src="${p.imagem}" alt="${p.nome}">

<div class="project-info">

<h3>${p.nome}</h3>

<p>${p.descricao}</p>

</div>

</div>

`;

});

}

/* ==========================================
   PARTICULAS
========================================== */

const canvas = document.getElementById("particles");

if(canvas){

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles=[];

for(let i=0;i<120;i++){

particles.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2,
dx:(Math.random()-0.5),
dy:(Math.random()-0.5)

});

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

ctx.beginPath();

ctx.arc(p.x,p.y,p.r,0,Math.PI*2);

ctx.fillStyle="#8B5CF6";

ctx.fill();

p.x+=p.dx;
p.y+=p.dy;

if(p.x<0)p.x=canvas.width;
if(p.x>canvas.width)p.x=0;

if(p.y<0)p.y=canvas.height;
if(p.y>canvas.height)p.y=0;

});

requestAnimationFrame(animate);

}

animate();

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

});

}

/* ==========================================
   EFEITO 3D NOS CARDS
========================================== */

document.addEventListener("mousemove",(e)=>{

document.querySelectorAll(".card,.project").forEach(card=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateX=(y-rect.height/2)/20;

const rotateY=(rect.width/2-x)/20;

card.style.transform=`
perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
`;

});

});

/* ==========================================
   ANO AUTOMÁTICO
========================================== */

const year=document.querySelector("#year");

if(year){

year.textContent=new Date().getFullYear();

}

const track = document.querySelector(".carousel-track");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

if (track && next && prev) {

    next.addEventListener("click", () => {
        track.scrollBy({
            left: 550,
            behavior: "smooth"
        });
    });

    prev.addEventListener("click", () => {
        track.scrollBy({
            left: -550,
            behavior: "smooth"
        });
    });

}