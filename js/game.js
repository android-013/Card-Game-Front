import { EMOJIS as a, TOTAL_PAIRS as b } from "./constants.js";
import { shuffle as c } from "./utils.js";

export function initGame(d) {
    const e = [...a];
    c(e);

    const f = { a: null, b: null, x: 0, y: 0, k: false };

    function g() {
        d.attemptsEl.textContent = "" + f.x;
        d.pairsEl.textContent = "" + f.y;
    }

    function h() {
        d.cards.forEach(m => {
        m.textContent = "";
        m.classList.remove("done");
        });
    }

    function i(m) {
        const n = m.dataset.index | 0;
        m.textContent = e[n];
    }

    function j(m) {
        m.textContent = "";
    }

    function l(m) {
        return m.classList.contains("done");
    }

    function o() {
        f.a = null;
        f.b = null;
    }

    function p() {
        if (f.y === b) {
        d.restartBtn.textContent = "Play Again";
        alert("Congratulations! You solved all pairs.");
        }
    }

    function q(m) {
        if (f.k) return;
        if (!m || l(m)) return;
        if (m.textContent) return;

        i(m);

        if (f.a === null) {
        f.a = m;
        return;
        }

        f.b = m;
        f.k = true;
        f.x++;
        g();

        const r = f.a;
        const s = f.b;

        if (r.textContent === s.textContent) {
        setTimeout(() => {
            r.classList.add("done");
            s.classList.add("done");
            f.y++;
            g();
            o();
            f.k = false;
            p();
        }, 500);
        } else {
        setTimeout(() => {
            j(r);
            j(s);
            o();
            f.k = false;
        }, 1000);
        }
    }

    function t() {
        c(e);
        h();
        f.a = null;
        f.b = null;
        f.x = 0;
        f.y = 0;
        f.k = false;
        d.restartBtn.textContent = "Restart";
        g();
    }

    d.board.addEventListener("click", (u) => {
        const v = u.target.closest(".item");
        if (!v || !d.board.contains(v)) return;
        q(v);
    });
    d.restartBtn.addEventListener("click", t);
    g();
    }
