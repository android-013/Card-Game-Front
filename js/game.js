import { EMOJIS as a, TOTAL_PAIRS as b } from "./constants.js";
import { shuffle as c } from "./utils.js";
import { a as d, b as e, c as f, d as g } from "./animations.js";

export function initGame(h) {
    const i = [...a];
    c(i);

    const j = { a: null, b: null, x: 0, y: 0, k: false };

    function l() {
        h.attemptsEl.textContent = "" + j.x;
        h.pairsEl.textContent = "" + j.y;
    }

    function m() {
        h.cards.forEach(s => {
        s.textContent = "";
        s.classList.remove("done");
        });
    }

    function n(s) {
        const t = s.dataset.index | 0;
        s.textContent = i[t];
        d(s);
    }

    function o(s) {
        s.textContent = "";
    }

    function p(s) {
        return s.classList.contains("done");
    }

    function q() {
        j.a = null;
        j.b = null;
    }

    function r() {
        if (j.y === b) {
        h.restartBtn.textContent = "Play Again";
        alert("Congratulations! You solved all pairs.");
        }
    }

    function u(s) {
        if (j.k) return;
        if (!s || p(s)) return;
        if (s.textContent) return;

        n(s);

        if (j.a === null) {
        j.a = s;
        return;
        }

        j.b = s;
        j.k = true;

        j.x++;
        l();

        const v = j.a;
        const w = j.b;

        if (v.textContent === w.textContent) {
        setTimeout(() => {
            v.classList.add("done");
            w.classList.add("done");

            f(v);
            f(w);

            j.y++;
            l();

            q();
            j.k = false;

            r();
        }, 500);
        } else {
        e(v);
        e(w);

        setTimeout(() => {
            o(v);
            o(w);

            q();
            j.k = false;
        }, 1000);
        }
    }

    function x() {
        c(i);
        m();
        g(h.board);

        j.a = null;
        j.b = null;
        j.x = 0;
        j.y = 0;
        j.k = false;

        h.restartBtn.textContent = "Restart";
        l();
    }

    h.board.addEventListener("click", (y) => {
        const z = y.target.closest(".item");
        if (!z || !h.board.contains(z)) return;
        u(z);
    });

    h.restartBtn.addEventListener("click", x);

    l();
    }
