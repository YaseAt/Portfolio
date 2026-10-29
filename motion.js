document.querySelector("body").addEventListener("mousemove", pupilla);

function pupilla(event) {
    const occhi = document.querySelectorAll(".occhio");

    occhi.forEach(function(occhio) {
        const pupilla = occhio.querySelector(".pupilla");
        const rettangolo = occhio.getBoundingClientRect();

        const x = rettangolo.left + rettangolo.width / 2;
        const y = rettangolo.top + rettangolo.height / 2;

        const dx = event.clientX - x;
        const dy = event.clientY - y;

        const angolo = Math.atan2(dy, dx);

        const distanza = 15;

        const px = Math.cos(angolo) * distanza;
        const py = Math.sin(angolo) * distanza;

        pupilla.style.transform =
            `translate(calc(-50% + ${px}px), calc(-50% + ${py}px))`;
    });
}