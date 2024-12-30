const draggableGrids = document.querySelectorAll("[data-draggable-grid]");
if (draggableGrids) {
  // Initialise drag and drop grid.
  draggableGrids.forEach((grid) => {
    Sortable.create(grid, {
      animation: 150,
      ghostClass: "grid__item--dragged",
    });

    const tiles = grid.children;
    Array.from(tiles).forEach((tile) => {
      tile.addEventListener("dragend", () => {
        console.log("Item dragged");
      });
    });
  });
}
