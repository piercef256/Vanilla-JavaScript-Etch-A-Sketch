let grid_size = 10;

createGrid = (classes = "node light") => {
    const container = document.querySelector(".grid");
    emptyGridContainerBeforeInsertingNewSizeGrid(container);

    for (var i = 0; i < grid_size; i++) {
        var row = document.createElement("div");
        row.className = "row";
        for (var j = 0; j < grid_size; j++) {
            var node = document.createElement("div");
            node.setAttribute("class", `${classes}`);
            let formula = 500 / grid_size;
            node.style.width = `${formula}px`;
            node.style.height = `${formula}px`;
            node.id = `${i * grid_size + 1 + j}`;
            row.appendChild(node);
        }
        container.appendChild(row);
    }
    const nodes = Array.from(document.querySelectorAll(".node"));
    nodes.forEach((node) =>
        node.addEventListener("mouseover", changeNodeColor)
    );
};

changeNodeColor = (e) => {
    e.target.classList.add("dark");
};

resetGridColors = () => {
    const nodes = document.querySelectorAll(".node");
    nodes.forEach((node) => node.setAttribute("class", "node light"));
};

emptyGridContainerBeforeInsertingNewSizeGrid = (container) => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
};

updateSliderSizeDisplayOnMouseMove = (e) => {
    const grid_size_display = document.querySelector("#grid-size-display");
    grid_size_display.textContent = `${e.target.value} x ${e.target.value}`;
};

createGridOfNewSliderSize = (e) => {
    grid_size = e.target.value;
    createGrid();
};

addEventListenersToElements = () => {
    const reset = document.querySelector("#reset-button");
    reset.addEventListener("click", resetGridColors);

    const slider = document.querySelector("#slider");
    slider.addEventListener("change", createGridOfNewSliderSize);
    slider.addEventListener("mousemove", updateSliderSizeDisplayOnMouseMove);
};

main = () => {
    createGrid();
    addEventListenersToElements();
};

main();
