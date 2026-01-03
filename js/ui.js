export function renderUI(root) {
    root.innerHTML = "";

    const container = document.createElement("div");
    container.className = "container";

    // Game info
    const gameInfo = document.createElement("div");
    gameInfo.className = "game-info";

    const attemptsBox = document.createElement("div");
    attemptsBox.innerHTML = `<p>The Attempts: <span id="x">0</span></p>`;

    const solvedBox = document.createElement("div");
    solvedBox.innerHTML = `<p>Pairs Solved: <span id="y">0</span></p>`;

    gameInfo.append(attemptsBox, solvedBox);

    // Board
    const board = document.createElement("div");
    board.id = "board";

    const cards = [];
    let idx = 1;

    for (let r = 0; r < 4; r++) {
        const row = document.createElement("div");
        row.className = "row";

        for (let c = 0; c < 5; c++) {
        const card = document.createElement("div");
        card.className = "item";
        card.id = `q${idx}`;
        card.dataset.index = String(idx - 1); // 0-based index
        row.appendChild(card);
        cards.push(card);
        idx++;
        }

        board.appendChild(row);
    }

    // Restart Button
    const restartBtn = document.createElement("button");
    restartBtn.id = "rb";
    restartBtn.type = "button";
    restartBtn.textContent = "Restart";

    container.append(gameInfo, board, restartBtn);
    root.appendChild(container);

    return {
        root,
        container,
        board,
        cards,
        attemptsEl: container.querySelector("#x"),
        pairsEl: container.querySelector("#y"),
        restartBtn
    };
    }
