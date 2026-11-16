/* =========================================================
   LIGHTBOX / ZOOM DE IMAGENS — MANUAL DELOG
   ========================================================= */
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".rst-content img");
    if (!images.length) return;

    const overlay = document.createElement("div");
    overlay.id = "img-lightbox-overlay";
    overlay.style.cssText = `
        display: none;
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.85);
        z-index: 9999;
        justify-content: center;
        align-items: center;
        cursor: zoom-out;
        padding: 20px;
    `;

    const enlargedImg = document.createElement("img");
    enlargedImg.style.cssText = `
        max-width: 95%;
        max-height: 95%;
        border-radius: 4px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
    `;

    overlay.appendChild(enlargedImg);
    document.body.appendChild(overlay);

    images.forEach((img) => {
        img.style.cursor = "zoom-in";
        img.addEventListener("click", function () {
            enlargedImg.src = this.src;
            enlargedImg.alt = this.alt;
            overlay.style.display = "flex";
        });
    });

    overlay.addEventListener("click", function () {
        overlay.style.display = "none";
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            overlay.style.display = "none";
        }
    });
});
