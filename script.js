// ==========================
// AOS INITIALIZATION
// ==========================

AOS.init({
    duration: 1000,
    once: true
});

// ==========================
// TYPING ANIMATION
// ==========================

const typed = new Typed("#typing", {
    strings: [
        "Electronics & Communication Engineer",
        "UI/UX Designer",
        "Python Developer",
        "IoT Enthusiast",
        "Problem Solver"
    ],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
});

// ==========================
// MOBILE MENU TOGGLE
// ==========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// ==========================
// SMOOTH ACTIVE LINK HIGHLIGHT
// ==========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

// ==========================
// COUNTER ANIMATION
// ==========================



// ==========================
// PARTICLES JS
// ==========================

particlesJS("particles-js", {
    particles: {
        number: {
            value: 60
        },
        color: {
            value: "#00D4FF"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.5
        },
        size: {
            value: 3
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#00D4FF",
            opacity: 0.3,
            width: 1
        },
        move: {
            enable: true,
            speed: 2
        }
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            }
        }
    }
});
// ==========================
// FLOATING CARD ANIMATION
// ==========================

const floatingCards = document.querySelectorAll(
    ".skill-card, .project-card, .achievement-card, .publication-card"
);

floatingCards.forEach((card, index) => {
    card.style.animation = `floatAnim ${4 + index % 3}s ease-in-out infinite`;
});

// ==========================
// NAVBAR SCROLL EFFECT
// ==========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(10, 10, 10, 0.85)";
        navbar.style.boxShadow = "0 0 25px rgba(0, 212, 255, 0.12)";
        navbar.style.backdropFilter = "blur(20px)";
    } else {
        navbar.style.background = "rgba(10, 10, 10, 0.5)";
        navbar.style.boxShadow = "none";
    }
});

// ==========================
// CONTACT FORM SUBMIT EFFECT
// ==========================

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const button = contactForm.querySelector("button");

        button.innerText = "Sending...";

        setTimeout(() => {
            button.innerText = "Message Sent ✓";

            setTimeout(() => {
                button.innerText = "Send Message";
                contactForm.reset();
            }, 2000);

        }, 1500);
    });
}

// ==========================
// PARALLAX HERO EFFECT
// ==========================

const glowCircle = document.querySelector(".glow-circle");

window.addEventListener("mousemove", (e) => {
    if (!glowCircle) return;

    let x = (window.innerWidth / 2 - e.pageX) / 30;
    let y = (window.innerHeight / 2 - e.pageY) / 30;

    glowCircle.style.transform = `translate(${x}px, ${y}px)`;
});

// ==========================
// SCROLL REVEAL EXTRA EFFECT
// ==========================

const revealElements = document.querySelectorAll(
    ".about-card, .timeline-content, .cert-card, .contact-card"
);

const revealOnScroll = () => {
    revealElements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {
            element.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ==========================
// CURSOR GLOW EFFECT
// ==========================

const cursorGlow = document.createElement("div");
cursorGlow.classList.add("cursor-glow");
document.body.appendChild(cursorGlow);

window.addEventListener("mousemove", (e) => {
    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";
});