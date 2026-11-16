/* =========================================================
   CONTROLE DE TAMANHO DE FONTE (ACESSIBILIDADE) — DELOG
   ========================================================= */
(function () {
    const STORAGE_KEY = "delog_manual_font_scale";
    const MIN_SCALE = 0.85;
    const MAX_SCALE = 1.40;
    const STEP = 0.10;

    function getScale() {
        const saved = parseFloat(localStorage.getItem(STORAGE_KEY));
        return isNaN(saved) ? 1.0 : saved;
    }

    function applyScale(scale) {
        const content = document.querySelector(".wy-nav-content");
        if (content) {
            content.style.fontSize = (scale * 100).toFixed(0) + "%";
        }
        localStorage.setItem(STORAGE_KEY, scale.toFixed(2));
    }

    window.alterarFonte = function (acao) {
        let current = getScale();
        if (acao === "aumentar" && current < MAX_SCALE) {
            current = Math.min(MAX_SCALE, current + STEP);
        } else if (acao === "diminuir" && current > MIN_SCALE) {
            current = Math.max(MIN_SCALE, current - STEP);
        } else if (acao === "resetar") {
            current = 1.0;
        }
        applyScale(current);
    };

    document.addEventListener("DOMContentLoaded", function () {
        applyScale(getScale());
    });
})();
