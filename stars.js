document.addEventListener("DOMContentLoaded", function () {
    const contenitore = document.querySelector(".stelle");

    if (!contenitore) return;

    const numeroStelle = 15;

    for (let i = 0; i < numeroStelle; i++) {
        const stella = document.createElement("div");

        stella.classList.add("stella");

        const dimensione = Math.random() * 20 + 20;

        stella.style.width = dimensione + "px";
        stella.style.height = dimensione + "px";

        stella.style.left = Math.random() * 100 + "%";
        stella.style.top = Math.random() * 100 + "%";

        stella.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        contenitore.appendChild(stella);
    }
});