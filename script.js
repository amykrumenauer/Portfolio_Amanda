/* =========================================================
   AMANDA KRUMENAUER — PORTFÓLIO
   JAVASCRIPT
========================================================= */


/* =========================================================
   LOADER
========================================================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (!loader) return;

    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
    loader.style.pointerEvents = "none";

    setTimeout(() => {
        loader.style.display = "none";
    }, 700);

});


/* =========================================================
   MENU MOBILE
========================================================= */

const menuBtn = document.querySelector("#menu-btn");
const nav = document.querySelector("#nav-menu");

if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("active");

        if (nav.classList.contains("active")) {

            menuBtn.classList.remove("ri-menu-3-line");
            menuBtn.classList.add("ri-close-line");

        } else {

            menuBtn.classList.remove("ri-close-line");
            menuBtn.classList.add("ri-menu-3-line");

        }

    });

}


/* =========================================================
   FECHAR MENU AO CLICAR
========================================================= */

const navLinks = document.querySelectorAll("#nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav?.classList.remove("active");

        menuBtn?.classList.remove("ri-close-line");
        menuBtn?.classList.add("ri-menu-3-line");

    });

});


/* =========================================================
   NAVBAR NO SCROLL
========================================================= */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 60) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================================================
   TYPEWRITER
========================================================= */

const typing = document.getElementById("typing");

const words = [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "UI / UX Designer",
    "Criadora de soluções digitais"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {

    if (!typing) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent =
            currentWord.substring(0, charIndex);

        charIndex++;

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(type, 1500);

            return;
        }

    } else {

        typing.textContent =
            currentWord.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(
        type,
        deleting ? 45 : 90
    );
}

type();


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        "section, .project, .creation, .card, .timeline-item"
    );

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );

revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =========================================================
   BOTÃO VOLTAR AO TOPO
========================================================= */

const topButton =
    document.createElement("button");

topButton.innerHTML = "↑";

topButton.classList.add("topButton");

topButton.setAttribute(
    "aria-label",
    "Voltar ao topo"
);

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.style.opacity = "1";
        topButton.style.visibility = "visible";

    } else {

        topButton.style.opacity = "0";
        topButton.style.visibility = "hidden";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================================
   CARROSSEL DE PROJETOS
========================================================= */

const track =
    document.querySelector(".carousel-track");

const next =
    document.querySelector(".next");

const prev =
    document.querySelector(".prev");

if (track && next && prev) {

    next.addEventListener("click", () => {

        track.scrollBy({
            left: track.clientWidth,
            behavior: "smooth"
        });

    });

    prev.addEventListener("click", () => {

        track.scrollBy({
            left: -track.clientWidth,
            behavior: "smooth"
        });

    });

}


/* =========================================================
   ESTRELAS
========================================================= */

const starsContainer =
    document.querySelector(".stars");

if (starsContainer) {

    const numberOfStars = 100;

    for (let i = 0; i < numberOfStars; i++) {

        const star =
            document.createElement("span");

        star.classList.add("star");

        star.style.left =
            `${Math.random() * 100}%`;

        star.style.top =
            `${Math.random() * 100}%`;

        const size =
            Math.random() * 2 + 1;

        star.style.width =
            `${size}px`;

        star.style.height =
            `${size}px`;

        star.style.animationDelay =
            `${Math.random() * 4}s`;

        star.style.animationDuration =
            `${2 + Math.random() * 4}s`;

        starsContainer.appendChild(star);

    }

}


/* =========================================================
   METEOROS
========================================================= */

const meteorsContainer =
    document.querySelector(".meteors");

if (meteorsContainer) {

    const numberOfMeteors = 6;

    for (let i = 0; i < numberOfMeteors; i++) {

        const meteor =
            document.createElement("span");

        meteor.classList.add("meteor");

        meteor.style.left =
            `${Math.random() * 120}%`;

        meteor.style.top =
            `${Math.random() * 50}%`;

        meteor.style.animationDelay =
            `${Math.random() * 10}s`;

        meteor.style.animationDuration =
            `${5 + Math.random() * 5}s`;

        meteorsContainer.appendChild(meteor);

    }

}


/* =========================================================
   PARALLAX SUAVE DA FOTO
========================================================= */

const heroImage =
    document.querySelector(".hero-image");

if (
    heroImage &&
    window.matchMedia("(pointer: fine)").matches
) {

    document.addEventListener(
        "mousemove",
        event => {

            const x =
                event.clientX /
                window.innerWidth -
                0.5;

            const y =
                event.clientY /
                window.innerHeight -
                0.5;

            heroImage.style.transform =
                `translate(${x * 8}px, ${y * 8}px)`;

        }
    );

}


/* =========================================================
   CURSOR PERSONALIZADO
========================================================= */

const cursor =
    document.querySelector(".cursor");

if (
    cursor &&
    window.matchMedia("(pointer: fine)").matches
) {

    document.addEventListener(
        "mousemove",
        event => {

            cursor.style.left =
                `${event.clientX}px`;

            cursor.style.top =
                `${event.clientY}px`;

        }
    );

}


/* =========================================================
   CURSOR INTERATIVO
========================================================= */

const interactiveElements =
    document.querySelectorAll(
        "a, button, .card, .project"
    );

interactiveElements.forEach(element => {

    element.addEventListener(
        "mouseenter",
        () => {

            if (!cursor) return;

            cursor.style.width = "14px";
            cursor.style.height = "14px";

        }
    );

    element.addEventListener(
        "mouseleave",
        () => {

            if (!cursor) return;

            cursor.style.width = "8px";
            cursor.style.height = "8px";

        }
    );

});


/* =========================================================
   ANO AUTOMÁTICO
========================================================= */

const year =
    document.querySelector("#year");

if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =========================================================
   SUAVIDADE EXTRA DOS CARDS
========================================================= */

const cards =
    document.querySelectorAll(
        ".card, .project"
    );

if (
    window.matchMedia("(pointer: fine)").matches
) {

    cards.forEach(card => {

        card.addEventListener(
            "mousemove",
            event => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;

                const rotateX =
                    (y - rect.height / 2) / 35;

                const rotateY =
                    (rect.width / 2 - x) / 35;

                card.style.transform =
                    `perspective(1000px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-5px)`;

            }
        );

        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform = "";

            }
        );

    });

}

/* =========================================================
   METEOROS
========================================================= */

function createMeteor() {

    const meteor = document.createElement("span");

    meteor.classList.add("meteor");

    meteor.style.left =
        `${Math.random() * 120}%`;

    meteor.style.top =
        `${Math.random() * 45}%`;

    const duration =
        3 + Math.random() * 4;

    meteor.style.animationDuration =
        `${duration}s`;

    meteor.style.animationDelay =
        `${Math.random() * 8}s`;

    document.body.appendChild(meteor);

    setTimeout(() => {
        meteor.remove();
    }, (duration + 8) * 1000);
}

setInterval(() => {

    if (Math.random() > 0.35) {
        createMeteor();
    }

}, 3500);

/* =========================================================
   FORMULÁRIO
========================================================= */

const contactForm =
    document.querySelector("#contact-form");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();

            const name =
                contactForm.querySelector(
                    '[name="name"]'
                )?.value;

            const message =
                contactForm.querySelector(
                    '[name="message"]'
                )?.value;

            if (!name || !message) {

                alert(
                    "Preencha seu nome e sua mensagem."
                );

                return;

            }

            alert(
                "Mensagem pronta para ser enviada!"
            );

        }
    );

}