const zouwu = "/beings/zouwu.png";
const swooping = "/beings/swooping.png";
const salamander = "/beings/salamander.png";
const puffskein = "/beings/puffskein.png";
const kelpie = "/beings/kelpie.png";

const creatures = [zouwu, swooping, salamander, puffskein, kelpie];


window.renderMap = function (numColRow) {
    const map = document.getElementById("map");
    map.innerHTML = " ";

    map.style.gridTemplateColumns = `repeat(${numColRow}, 1fr)`
    map.style.gridTemplateRows = `repeat(${numColRow}, 1fr)`

    for (let i = 0; i < numColRow * numColRow; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        map.appendChild(cell);
        }
    fillMapWithCreatures(randomCreatures)
    };

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min)) + min;
    return num;
};

window.clearMap = function () {
    const map = document.getElementById("map");
    map.innerHTML = "";
}

function randomCreatures (creatures) {
    creature = creatures[Math.floor(Math.random() * (creatures.length))];
    return creature;
}

function fillMapWithCreatures(randomCreatures) {
    const cells = document.getElementsByClassName("cell");
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].innerHTML === "") {
            creature = randomCreatures(creatures);
            const img = document.createElement("img");

            img.src = creature;
            img.setAttribute("data-coords", `x${i % Math.sqrt(cells.length)}_y${Math.floor(i / Math.sqrt(cells.length))}`);
            cells[i].appendChild(img);
            cells[i].setAttribute("data-being", creature);
        }
    }
};


renderMap(num);
randomCreatures(creatures);
