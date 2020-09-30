export function getDragAfterElementY(y) {
    const draggableElements = [...document.querySelectorAll(".listItem")];

    return draggableElements.reduce((closest, child) => {
      const box = child.getBoundingClientRect()
      const offset = y - box.top - box.height / 2;

      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child }
      } else {
        return closest
      }
    }, { offset: Number.NEGATIVE_INFINITY }).element
}

export function getDragAfterElementX(x) {
    const draggableElements = [...document.querySelectorAll(".cat")];

    return draggableElements.reduce((closest, child) => {
      const box = child.getBoundingClientRect()
      const offset = x - box.left - box.width / 2;

      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child }
      } else {
        return closest
      }
    }, { offset: Number.NEGATIVE_INFINITY }).element
}