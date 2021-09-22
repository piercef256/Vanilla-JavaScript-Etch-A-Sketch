const GRID_SIZE = 16;

createGrid = () => {
    const container = document.querySelector(".container");

    for (var i = 0; i < GRID_SIZE; i++) {
        var row = document.createElement('div');
        row.className = "row";
        for (var j = 0; j < GRID_SIZE; j++) {
            var node = document.createElement('div');
            node.className = "node";
            node.style.width = `${1280 / GRID_SIZE / 4}px`;
            node.style.height = `${1280 / GRID_SIZE / 4}px`;
            node.id = `${i * GRID_SIZE + 1 + j}`;
            row.appendChild(node);
        }
        container.appendChild(row);
    }

}

createGrid();