document.querySelector("h1").style.opacity = 0;

setTimeout(() => {
    document.querySelector("h1").style.transition = "1.5s";
    document.querySelector("h1").style.opacity = 1;
}, 400);
