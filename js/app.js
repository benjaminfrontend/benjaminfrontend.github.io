const txtAnim = document.querySelector('h4');

new Typewriter(txtAnim, {
    deleteSpeed: 20
})

.typeString('Hey ! Moi c\'et')
.pauseFor(300)
.deleteChars(9)
.pause(1000)
.typeString(' Moi c\'est')
.start()

const sr = ScrollReveal();

sr.reveal('img', {
    duration: 500,
    scale: 0.5,
    reset: true
});

sr.reveal('nav.nav', {
    duration: 2000,
    scale: 0.5,
    reset: true
});

sr.reveal('.left', {
    origin: 'top',
    duration: 3000,
    scale: 0.5,
    reset: true
});

sr.reveal('.container', {
    origin: 'top',
    duration: 3000,
    scale: 0.5,
    reset: true
});

sr.reveal('.guillemets1', {
    origin: 'top',
    duration: 1000,
    scale: 0.5,
    reset: true
});

sr.reveal('.guillemets2', {
    origin: 'top',
    duration: 1000,
    scale: 0.5,
    reset: true
});

sr.reveal('.à-propos', {
    origin: 'top',
    duration: 1000,
    scale: 0.5,
    reset: true
});

sr.reveal('.description', {
    origin: 'top',
    duration: 1000,
    scale: 0.5,
    reset: true
});

sr.reveal('.card', {
    origin: 'top',
    duration: 1000,
    scale: 0.5,
    reset: true
});
