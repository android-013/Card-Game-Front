import { injectStyles } from "./styles.js";
import { renderUI } from "./ui.js";
import { initGame } from "./game.js";
const root = document.getElementById("app");
injectStyles();
const ui = renderUI(root);
initGame(ui);
