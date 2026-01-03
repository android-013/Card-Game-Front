export function injectStyles() {
    const css = `
        .game-info{display:flex;justify-content:center;gap:1rem;margin:20px 0;padding:0;font-family:Arial,sans-serif}
        .game-info p{margin:0;font-size:18px;font-weight:700;color:#000}
        .game-info div{display:flex;justify-content:center;align-items:center;padding:10px 20px;border-radius:10px;box-shadow:0 4px 6px rgba(0,0,0,.1);background-color:#007bff}

        #rb{display:block;margin:20px auto;padding:10px 20px;font-size:18px;background-color:#007bff;color:#fff;border:none;border-radius:5px;cursor:pointer}
        #rb:hover{background-color:#005cbd}

        *{margin:0;padding:0;box-sizing:border-box}
        .container{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;background:linear-gradient(180deg,#686de0,#130f40);width:100%;gap:1rem;transition:all .3s;user-select:none}
        .row{margin-top:.5rem;margin-bottom:.5rem;display:flex;justify-content:center;align-items:center;flex-wrap:wrap;gap:1rem;transition:all .3s}
        .item{display:flex;justify-content:center;align-items:center;background:linear-gradient(180deg,#7ed6df,#22a6b3);border-radius:1rem;box-shadow:0 0 10px rgba(0,0,0,.1);cursor:pointer;transition:.3s;font-weight:700;color:rgba(0,0,0,.8);width:5rem;height:8rem;font-size:2rem;transition:all .3s}
        .done{background:#fff}

        @media (max-width:768px){
        .item{width:4rem;height:6rem;font-size:1.5rem;border-radius:7.5px}
        .container{gap:.5rem}
        .row{gap:.5rem}
        }
    `;

    const style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);
}
